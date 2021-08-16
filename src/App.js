import './App.css';
// import {UsePan} from './components/UsePan';
// import {UseScale} from './components/UseScale';
// import { UseScaleExample } from './components/UseScaleExample';
import usePan from './hooks/usePan';
import {useScale} from './hooks/useScale';
import map from './images/map.svg';
import { useRef  } from "react";
import Canvas from './components/Canvas';
function App() {
  const ref = useRef<HTMLDivElement | null>(null)
  const scale = useScale(ref)
  const [offset, startPan] = usePan()
  return (
    <div  onMouseDown={startPan}>
      {/* <UsePan />
      <UseScale />
      <h1>Test Scale</h1>
      <UseScaleExample/> */}
      {/* <Canvas/> */}
      <canvas
            onMouseDown={startPan}
            className = "test-scale"
            style={{
                transform: `scale(${scale})`,
                backgroundImage:  `url(${map})`,
                backgroundPosition: `${-offset.x}px ${-offset.y}px`,
            }}
        >
      </canvas>
    </div>
  );
}

export default App;
