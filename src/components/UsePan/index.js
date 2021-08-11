import usePan from '../../hooks/usePan';

export const UsePan = () => {
  const [offset, startPan] = usePan()
  console.log("offset: ", offset);
  return (
    <div onMouseDown={startPan}>
      <h1>Pannable: {offset.x}, {offset.y}</h1>
    </div>
  )
}