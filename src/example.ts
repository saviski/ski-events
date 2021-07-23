import { event, matches, preventDefault, stopPropagation } from '@ski/decorators/decorators.js'
import { Emitter } from './emitter.js'
import { onclick } from './dom-events.js'

class MyEvent extends Event {
  value!: number

  constructor(type: string, init: EventInit & { value: number }, _v?: string) {
    super(type, init)
    Object.assign(this, init)
  }
}

const onTest3 = new Emitter('test3', MyEvent)
const onTest4 = new Emitter('test4', MyEvent)

export class ClassName extends HTMLElement {
  element?: HTMLDivElement

  @event ontest3 = onTest3.event
  @event ontest4 = onTest4.event

  @(onTest4.from(ClassName).element)
  @preventDefault
  @matches('.active > li')
  elementClick(_event: Event): any {}

  @onclick.at(document.body)
  @onclick.root('#element')
  @stopPropagation
  bodyClick(_event: MouseEvent) {}

  abc() {
    onTest3.emit(this, { value: 50 }, 'string')
  }
}
