import { InlineEventListener, init, hook } from '@ski/mixins/mixins.js'
import { spy, NestedSpy, SpyChangeSource } from '@ski/spy/spy.js'
import { stream, run, domEvents } from '@ski/streams/streams.js'
import { decorator } from '@ski/decorators/decorators.js'
import { MethodDecorator } from '../../decorators/src/decorator'

export type EventConstructor = new (type: string, ...args: any[]) => Event

type TypedMethodDecorator<T, U> = (
  target: T,
  method: string | symbol,
  descriptor: TypedPropertyDescriptor<(event: U) => any>
) => void

const linkEvents = decorator(
  class extends MethodDecorator<any, any, InlineEventListener<any>> {
    constructor(
      private cls,
      private type: string,
      private changes: AsyncGenerator<SpyChangeSource<any>>
    ) {
      super()
    }

    decorateMethod({ constructor, descriptor } = this.params) {
      constructor === this.cls &&
        stream(this.changes).trigger(change =>
          run(domEvents<Event>(change.value, this.type), event =>
            descriptor.value!.call(change.source, event)
          )
        )
    }
  }
)

export class Emitter<
  S extends string,
  C extends EventConstructor,
  E extends Event = InstanceType<C>
> {
  //
  constructor(public readonly type: S, private eventConstructor: C) {}

  // used only to retrieve the type
  event: InlineEventListener<E>

  from<T extends object>(constructor: {
    prototype: T
  }): NestedSpy<T, T, TypedMethodDecorator<T, E>> {
    return spy(
      constructor.prototype,
      changes => linkEvents(constructor, this.type, changes) as TypedMethodDecorator<T, E>
      // (
      //   proto: { constructor: Function },
      //   _method: string | symbol,
      //   descriptor: TypedPropertyDescriptor<(event: E) => any>
      // ) => {
      //   proto.constructor === constructor &&
      //     stream(changes).trigger(change =>
      //       run(domEvents<E>(change.value, this.type), event =>
      //         descriptor.value!.call(change.source, event)
      //       )
      //     )
      // }
    )
  }

  at<U extends EventTarget>(element: U & { [K in `on${S}`]: InlineEventListener<E> }) {
    return (
      target: Object,
      _method: string | symbol,
      descriptor: TypedPropertyDescriptor<(event: E) => any>
    ) => {
      init(<any>target.constructor, self =>
        element.addEventListener(this.type, event =>
          descriptor.value!.call(self, <E>event)
        )
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

  create(
    ...args: C extends new (type: string, ...args: infer A) => Event ? A : never
  ): Event {
    return new this.eventConstructor(this.type, ...args)
  }
}

export type EmitterListener<E> = E extends Emitter<any, infer C>
  ? ((event: InstanceType<C>) => any) | null | undefined
  : never
