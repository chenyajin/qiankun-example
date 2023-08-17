export type GlobalState = {
  name: string
  age: number | null
}

export type GlobalStateChange<T = GlobalState> = {
  (params: T): void
}
export type ActionType<T = unknown> = {
  onGlobalStateChange: GlobalStateChange<T>
  setGlobalState: GlobalStateChange<T>
  offGlobalStateChange: GlobalStateChange<T>
}
