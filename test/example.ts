import { decorator } from '@ski/decorators/decorators.js'

function onClick() {
  return decorator<(e?: Event) => any, 'not a listener'>(target => {})
}

class Jaboticaba {
  constructor(private element: HTMLElement) {}

  @onClick()
  listenerMethod(event: MouseEvent) {}
}
