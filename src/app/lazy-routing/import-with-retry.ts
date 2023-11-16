import { ComponentType } from 'react'

const refreshedKey = 'page-has-been-force-refreshed'

const getPageIsForceRefreshed = () => {
  return window.sessionStorage.getItem(refreshedKey) === 'true'
}

const setPageIsForceRefreshed = (value: boolean) => {
  window.sessionStorage.setItem(refreshedKey, value.toString())
}

/** A function to retry loading a chunk to avoid chunk load error for out of date code */
export const importWithRetry = <C extends { default: ComponentType<unknown> }>(
  componentImport: () => Promise<C>,
): Promise<C> => {
  return new Promise((resolve, reject) => {
    const pageHasBeenForceRefreshed = getPageIsForceRefreshed()

    componentImport()
      .then((component) => {
        setPageIsForceRefreshed(false)
        resolve(component)
      })
      .catch((error) => {
        if (!pageHasBeenForceRefreshed) {
          setPageIsForceRefreshed(true)
          return window.location.reload()
        }

        reject(error)
      })
  })
}
