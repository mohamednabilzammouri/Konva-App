import { Rect } from "react-konva";
import { Polygon } from "../../Types/Types";

interface DisplayRectProps {
  polygonProps: {
    polygon: Polygon;
    handleMouseOverStartPoint: any;
    handleMouseOutStartPoint: any;
    handleDragMovePoint: any;
  };
}

function DisplayRect(props: DisplayRectProps) {
  const {
    polygon,
    handleMouseOverStartPoint,
    handleMouseOutStartPoint,
    handleDragMovePoint,
  } = props.polygonProps;
  return (
    <>
      {polygon.points.map((point: number[], index: number) => {
        const width = 6;
        const x = point[0] - width / 2;
        const y = point[1] - width / 2;
        const startPointAttr =
          index === 0
            ? {
                onMouseOver: handleMouseOverStartPoint,
                onMouseOut: handleMouseOutStartPoint,
              }
            : null;
        return (
          <Rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={width}
            fill="white"
            stroke="black"
            strokeWidth={2}
            onDragMove={handleDragMovePoint}
            draggable
            {...startPointAttr}
          />
        );
      })}
    </>
  );
}

export default DisplayRect;
