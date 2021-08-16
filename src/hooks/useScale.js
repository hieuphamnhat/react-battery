import { useState } from 'react';
import useEventListener from './useEventListener';

const MIN_SCALE = 1
const MAX_SCALE = 3

export const useScale = () => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);

//   const handler = useCallback(
//     ({ clientX, clientY }) => {
//       // Update coordinates
//       setCoords({ x: clientX, y: clientY });
//     },
//     [setCoords]
//   );

  function zoom(e){
    //e.preventDefault();
    console.log("deltaY: ", e.deltaY);
    setScale(currentScale => {
        let scale: number
        //currentScale += e.deltaY / 7 * -0.01;
        if(e.deltaY < 0)
            currentScale += 0.5;
        if(e.deltaY > 0)
            currentScale += -0.5;
        // console.log(currentScale)
        scale = Math.min(Math.max(.125, currentScale), 20);
        if (scale <= MIN_SCALE){
            scale = MIN_SCALE;
        }
      return scale})

    //   scale += e.deltaY * -0.01;
    //  scale = Math.min(Math.max(.125, scale), 4);
  }

  useEventListener('wheel', zoom);

  return scale;
}