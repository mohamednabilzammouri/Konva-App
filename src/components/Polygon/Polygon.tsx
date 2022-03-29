import React, { useEffect, useState } from "react";
import { Layer, Line, Stage } from "react-konva";
import { Drawerbackground } from "../../Styles/SquareBackground";
import { Polygon } from "../../Types/Types";
import DisplayRect from "../Konva/DisplayRect";
import Success from "../Notifications/Success";

interface PlygonProps {
  polygonData: {
    flattenedPoints: any;
    polygon: Polygon;
    handleMouseOverStartPoint: any;
    handleMouseMove: any;
    handleClick: any;
    handleMouseOutStartPoint: any;
    handleDragMovePoint: any;
    saveImageRef: any;
  };
}

function DrawPolygon(props: PlygonProps): JSX.Element {
  const [stage, setStage] = useState({
    stageScale: 1,
    stageX: 0,
    stageY: 0,
  });
  const handleWheel = (e: any) => {
    e.evt.preventDefault();

    const scaleBy = 1.02;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStage({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    });
  };
  let stageRef = React.useRef<any>(null);
  useEffect(() => {
    saveImageRef(stageRef);
  }, []);

  const {
    flattenedPoints,
    polygon,
    handleMouseOverStartPoint,
    handleMouseMove,
    handleClick,
    handleMouseOutStartPoint,
    handleDragMovePoint,
    saveImageRef,
  } = props.polygonData;
  return (
    <Drawerbackground>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight * 0.85}
        onMouseDown={handleClick}
        onMouseMove={handleMouseMove}
        ref={stageRef}
        stageX={stage.stageX}
        stageY={stage.stageY}
        scaleX={stage.stageScale}
        scaleY={stage.stageScale}
        onWheel={handleWheel}
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
    </Drawerbackground>
  );
}

export default DrawPolygon;
