import { Navigate, useRoutes } from 'react-router-dom'

import { buildRoute } from '../lazy-routing'
import { AppLayout } from '../layouts'
import { NotFoundPage } from '~/pages/not-found'

const routeObjectsPages = [
  buildRoute({
    path: 'home',
    factory: () => import('../../pages/home'),
  }),
]

export const RoutesApp = () => {
  return useRoutes([
    {
      path: 'app',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="home" replace />,
        },
        ...routeObjectsPages,
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="app" replace />,
    },
  ])
}
