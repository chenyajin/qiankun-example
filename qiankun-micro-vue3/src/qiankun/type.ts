export type GlobalState = {
  user: {
    name: string
    age: number
  }
}

export type GlobalStateChange<T = GlobalState> = {
  (params: T): void
}

export type GetGlobalStateChange = {
  (): GlobalState
}
export type ActionType<T = unknown> = {
  onGlobalStateChange: GlobalStateChange<T>
  setGlobalState: GlobalStateChange<T>
  offGlobalStateChange: GlobalStateChange<T>
  getGlobalState: GetGlobalStateChange
}

export type BreadcrumbStoreType = {
  setMicroBreadcrumb: (list: unknown[]) => void
}
