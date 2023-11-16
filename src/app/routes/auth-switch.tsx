import { RoutesApp, RoutesAuth } from '.'

export const AuthSwitch = () => {
  const authenticated = false

  if (authenticated) {
    return <RoutesApp />
  }

  return <RoutesAuth />
}
