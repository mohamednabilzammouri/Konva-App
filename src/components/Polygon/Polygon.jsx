import { Button } from "@material-ui/core";
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
    <div className="background">
      <div style={{ borderBottom: "2px dashed red" }}>
        <Button
          variant="outlined"
          style={{
            color: "white",
            backgroundColor: "red",
            margin: "1em",
          }}
        >
          Reset
        </Button>
        <Button
          variant="outlined"
          style={{
            color: "white",
            backgroundColor: "green",
            margin: "1em",
          }}
        >
          Save
        </Button>
      </div>
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
