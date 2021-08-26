import { InlineEventListener, init, hook } from '@ski/mixins/mixins.js'
import { NestedSpy, spy, SpyChange } from '@ski/spy/spy.js'
import { stream, domEvent } from '@ski/streams/streams.js'
import { MethodDecorator } from '@ski/decorators/decorators.js'

export type EventConstructor = new (type: string, ...args: any[]) => Event

class LinkEvent extends MethodDecorator<any, any, InlineEventListener<any>> {
  constructor(
    private cls,
    private type: string,
    private changes: AsyncIterable<SpyChange<any, any, any>>
  ) {
    super()
  }

  decorateMethod({ constructor, descriptor } = this.params) {
    if (constructor === this.cls)
      stream(this.changes)
        .trigger(({ source, value: element }) =>
          stream(domEvent(element, this.type)).map(event => ({ source, event }))
        )
        .listen(({ source, event }) => {
          descriptor.value!.call(source, event)
        })
  }
}

type ListenerDecorator<T, E> = (
  prototype: T,
  property: any,
  descriptor: TypedPropertyDescriptor<(event: E) => any>
) => void

export class Emitter<
  S extends string,
  C extends EventConstructor,
  E extends Event = InstanceType<C>
> {
  //
  constructor(public readonly type: S, private eventConstructor: C) {}

  // used only to retrieve the type
  event: InlineEventListener<E>

  from<T extends object>(constructor: { prototype: T }): NestedSpy<T, T, ListenerDecorator<T, E>> {
    return spy(
      constructor.prototype,
      (changes, prototype: T, property: any, descriptor: PropertyDescriptor) =>
        new LinkEvent(constructor, this.type, changes).decorator(prototype, property, descriptor)
    )
  }

  at<U extends EventTarget>(element: U & { [K in `on${S}`]: InlineEventListener<E> }) {
    return (
      target: Object,
      _method: string | symbol,
      descriptor: TypedPropertyDescriptor<(event: E) => any>
    ) => {
      init(<any>target.constructor, self =>
        element.addEventListener(this.type, event => descriptor.value!.call(self, <E>event))
      )
    }
  }

  root(selector: string) {
    return (
      target: Element,
      _method: string | symbol,
      descriptor: TypedPropertyDescriptor<(event: E) => any>
    ) =>
      hook(target, 'attachShadow', (self, root) => {
        root.addEventListener(this.type, event => {
          event.target instanceof Element &&
            event.target.matches(selector) &&
            descriptor.value!.call(self, <E>event)
        })
        return root
      })
  }

  emit(
    target: EventTarget & { [K in `on${S}`]: InlineEventListener<E> },
    ...args: C extends new (type: string, ...args: infer A) => Event ? A : never
  ): boolean {
    return target.dispatchEvent(this.create(...args))
  }

  create(...args: C extends new (type: string, ...args: infer A) => Event ? A : never): Event {
    return new this.eventConstructor(this.type, ...args)
  }
}

export type EmitterListener<E> = E extends Emitter<any, infer C>
  ? ((event: InstanceType<C>) => any) | null | undefined
  : never
