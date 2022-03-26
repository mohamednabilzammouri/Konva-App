import { Button } from "@material-ui/core";
import { useContext } from "react";

import usePolygon from "../../Hooks/usePolygon";
import Polygon from "./Polygon";
import { MyPolygonsContext } from "../../Context/Context";

function DisplayPolygon() {
  const {
    flattenedPoints,
    polygon,
    handleMouseOverStartPoint,
    handleMouseMove,
    handleClick,
    handleMouseOutStartPoint,
    handleDragMovePoint,
    handleSavePolygon,
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
          onClick={() => savePolygon(polygon)}
        >
          Save
        </Button>
      </div>
      <Polygon
        polygonData={{
          flattenedPoints,
          polygon,
          handleMouseOverStartPoint,
          handleMouseMove,
          handleClick,
          handleMouseOutStartPoint,
          handleDragMovePoint,
          handleSavePolygon,
        }}
      />
    </>
  );
}

export default DisplayPolygon;
