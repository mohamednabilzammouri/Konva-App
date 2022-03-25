import { Layer, Line, Stage } from "react-konva";
import DisplayRect from "../Konva/DisplayRect";

function Polygon(props) {
  const {
    flattenedPoints,
    polygon,
    handleMouseOverStartPoint,
    handleMouseMove,
    handleClick,
    handleMouseOutStartPoint,
    handleDragMovePoint,
  } = props.polygonData;
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleClick}
      onMouseMove={handleMouseMove}
    >
      <Layer>
        <Line
          points={flattenedPoints}
          stroke="black"
          strokeWidth={5}
          closed={polygon.isFinished}
        />
        <DisplayRect
          polygonProps={{
            polygon,
            handleMouseOverStartPoint,
            handleMouseOutStartPoint,
            handleDragMovePoint,
          }}
        />
      </Layer>
    </Stage>
  );
}

export default Polygon;
