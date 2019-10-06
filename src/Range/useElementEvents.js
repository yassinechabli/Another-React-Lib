import { useEffect } from 'react'
export const useElementEvents = (element, eventMapObject) => {
  const rawEvents = Object.keys(eventMapObject).map((eventName) => {
    const callback = eventMapObject[eventName]
    return {
      eventName,
      callback
    }
  })
  useEffect(() => {
    rawEvents.map(({ eventName, callback }) => {
      element.addEventListener(eventName, callback)
    }, {
      capture: true,
      passive: true
    })
    return () => {
      rawEvents.map(({ eventName, callback }) => {
        element.removeEventListener(eventName, callback)
      })
    }
  }, [])
}
