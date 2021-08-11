import React, { useState, useCallback } from 'react';
import useEventListener from '../../hooks/useEventListener';

const MIN_SCALE = 0.5
const MAX_SCALE = 3

export const UseScale = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  function zoom(e){
    //e.preventDefault();
    console.log(e.deltaY);
    setScale(currentScale => {
        let scale: number
        currentScale += e.deltaY * -0.01;
        console.log(currentScale)
        scale = Math.min(Math.max(.125, currentScale), 4);
        if (scale >= MAX_SCALE){
            scale = MAX_SCALE;
        }else if(scale <= MIN_SCALE){
            scale = MIN_SCALE;
        }
      return scale})

    //   scale += e.deltaY * -0.01;
    //  scale = Math.min(Math.max(.125, scale), 4);
  }

  useEventListener('wheel', zoom);

  return (
    <>
        <h1>
        The mouse position is ({coords.x}, {coords.y})
        </h1>
        <h2> Scale: {scale}</h2>
    </>
  );
}