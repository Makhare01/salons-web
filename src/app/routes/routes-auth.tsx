import { Navigate, useRoutes } from 'react-router-dom'

import { buildRoute } from '../lazy-routing'
import { AuthLayout } from '../layouts'

const routeObjectsPages = [
  buildRoute({
    path: 'sign-in',
    factory: () => import('../../pages/sign-in'),
  }),
  buildRoute({
    path: 'sign-up',
    factory: () => import('../../pages/sign-up'),
  }),
]

export const RoutesAuth = () => {
  return useRoutes([
    {
      element: <AuthLayout />,
      children: [
        ...routeObjectsPages,
        {
          path: '*',
          element: <Navigate to="sign-in" replace />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="app" replace />,
    },
  ])
}
