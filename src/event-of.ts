class ExtendedEventBase<T> extends Event {
  constructor(type: string, init?: T & EventInit) {
    super(type, init)
    return Object.freeze(Object.assign(Object.create(this), init))
  }
}

export type EventOf<T extends object> = typeof Event &
  (new (type: string, init: T) => Event & Readonly<Omit<T, keyof Event>>)

export const eventOf = <T extends object>() => ExtendedEventBase as EventOf<T>
