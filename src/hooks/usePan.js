import {
  MouseEvent as SyntheticMouseEvent,
  useCallback,
  useRef,
  useState
} from 'react'


type Point = {x: number; y: number}
const ORIGIN = Object.freeze({x: 0, y: 0})

export default function usePan(): [(Point:Point, e: SyntheticMouseEvent) => void] {
  const [panState, setPanState] = useState(ORIGIN)
  const lastPointRef = useRef(ORIGIN)

  const pan = useCallback((e: MouseEvent) => {
    const lastPoint = lastPointRef.current
    const point = {x: e.pageX, y: e.pageY}
    lastPointRef.current = point

    setPanState(panState => {
      const delta = {
        x: lastPoint.x - point.x,
        y: lastPoint.y - point.y
      }
      const offset = {
        x: panState.x + delta.x,
        y: panState.y + delta.y
      }

      return offset
    })
  }, [])

  const endPan = useCallback(() => {
    document.removeEventListener('mousemove', pan)
    document.removeEventListener('mouseup', endPan)
  }, [pan])

  const startPan = useCallback(
    (e: SyntheticMouseEvent) => {
      document.addEventListener('mousemove', pan)
      document.addEventListener('mouseup', endPan)
      lastPointRef.current = {x: e.pageX, y: e.pageY}
    },
    [pan, endPan]
  )
  console.log('panstate:', panState)
  return [panState, startPan]
}