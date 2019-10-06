import { useEffect, useState } from 'react'
export const usePointerPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const pointerMoveEventHandler = ({ clientX, clientY }) => setPosition({ x: clientX, y: clientY })

    document.addEventListener('pointermove', pointerMoveEventHandler)

    return () => {
      document.removeEventListener('pointermove', pointerMoveEventHandler)
    }
  }, [])

  return position
}
