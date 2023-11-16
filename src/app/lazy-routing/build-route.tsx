import { ComponentType } from 'react'
import lazyWithPreload from 'react-lazy-with-preload'
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'

import { importWithRetry } from './import-with-retry'

/** Extending RouteObject with the function to preload lazy component in advance */
export type RouteWithPreload =
  | (Omit<IndexRouteObject, 'children'> & {
      children?: undefined
      preload?: () => Promise<ComponentType<unknown>>
    })
  | (Omit<NonIndexRouteObject, 'children'> & {
      children?: Array<RouteWithPreload>
      preload?: () => Promise<ComponentType<unknown>>
    })

export type BuildRouteInput = Readonly<{
  path: string
  factory: () => Promise<{ default: ComponentType<unknown> }>
  children?: Array<RouteWithPreload>
}>

export const buildRoute = ({
  path,
  factory,
  children,
}: BuildRouteInput): RouteWithPreload => {
  const Component = lazyWithPreload(() => importWithRetry(factory))

  return {
    path,
    children,
    preload: Component.preload,
    element: <Component />,
  }
}
