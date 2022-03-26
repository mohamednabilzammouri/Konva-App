import { useContext, useEffect, useState } from "react";
import { Layer, Line, Stage } from "react-konva";
import { LayoutContext } from "../../Context/Context";
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
    <div className="background">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight * 0.85}
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
    </div>
  );
}

export default Polygon;
