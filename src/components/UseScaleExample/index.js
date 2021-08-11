import { useRef  } from "react"
import {useScale}  from "../../hooks/useScale"
import usePan from '../../hooks/usePan';
import './UseScaleExample.css'
import map from '../../images/map.svg'

export const UseScaleExample = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const scale = useScale(ref)
    const [offset, startPan] = usePan()
    return (
    <div>
        <span>{scale}</span>
        <canvas
            onMouseDown={startPan}
            className = "test-scale"
            style={{
                transform: `scale(${scale})`,
                backgroundImage:  `url(${map})`,
                backgroundPosition: `${-offset.x}px ${-offset.y}px`
            }}
        >
        </canvas>
    </div>
    )
}