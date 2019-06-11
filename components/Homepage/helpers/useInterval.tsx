import { useRef, useEffect } from 'react'

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
