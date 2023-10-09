// https://stackoverflow.com/a/59499895/6277151
export {}

declare global {
  interface Window {
    __NUXT__: any
  }
}
