import { useEffect } from 'react'
export const useWindowResize = callback => {
  useEffect(() => {
    window.addEventListener('resize', callback, {
      capture: true,
      passive: true
    })
    return () => {
      window.removeEventListener('resize', callback)
    }
  }, [])
}
