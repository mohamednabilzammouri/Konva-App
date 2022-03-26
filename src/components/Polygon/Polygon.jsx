import { useContext, useEffect, useState } from "react";
import { Layer, Line, Stage } from "react-konva";
import { LayoutContext } from "../../Context/Context";
import DisplayRect from "../Konva/DisplayRect";

function Polygon(props) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const { currentStatus } = useContext(LayoutContext);

  const {
    flattenedPoints,
    polygon,
    handleMouseOverStartPoint,
    handleMouseMove,
    handleClick,
    handleMouseOutStartPoint,
    handleDragMovePoint,
  } = props.polygonData;

  useEffect(() => {
    setWidth(document.getElementsByClassName("main")[0].clientHeight);
    setHeight(document.getElementsByClassName("main")[0].clientHeight);
    console.log([width, height, currentStatus]);
  }, [width, height, currentStatus]);

  return (
    <Stage
      width={width}
      height={height}
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
