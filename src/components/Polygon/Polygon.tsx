import { Layer, Line, Stage } from "react-konva";
import { Polygon } from "../../Types/Types";
import DisplayRect from "../Konva/DisplayRect";

interface PlygonProps {
  polygonData: {
    flattenedPoints: any;
    polygon: Polygon;
    handleMouseOverStartPoint: any;
    handleMouseMove: any;
    handleClick: any;
    handleMouseOutStartPoint: any;
    handleDragMovePoint: any;
    handleSavePolygon: any;
  };
}

function DrawPolygon(props: PlygonProps): JSX.Element {
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

export default DrawPolygon;
