import { Button } from "@material-ui/core";
import { useContext } from "react";
import { MyPolygonsContext } from "../../Context/Context";

import usePolygon from "../../Hooks/usePolygon";
import DrawPolygon from "./Polygon";

function DisplayPolygon(): JSX.Element {
  const {
    flattenedPoints,
    polygon,
    handleMouseOverStartPoint,
    handleMouseMove,
    handleClick,
    handleMouseOutStartPoint,
    handleDragMovePoint,
    resetPolygon,
  } = usePolygon();

  const { savePolygon } = useContext(MyPolygonsContext);

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "100",
        }}
      >
        <Button
          variant="outlined"
          style={{
            color: "white",
            backgroundColor: "red",
            margin: "1em",
          }}
          onClick={resetPolygon}
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
          onClick={() => {
            savePolygon(polygon);
            resetPolygon();
          }}
        >
          Save
        </Button>
      </div>
      <DrawPolygon
        polygonData={{
          flattenedPoints,
          polygon,
          handleMouseOverStartPoint,
          handleMouseMove,
          handleClick,
          handleMouseOutStartPoint,
          handleDragMovePoint,
        }}
      />
    </>
  );
}

export default DisplayPolygon;
