import { Button } from "@material-ui/core";
import React, { memo, useContext, useState } from "react";
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
  const [imageUrl, setImageUrl] = useState<string>();
  const saveImage = (e: any) => {
    setImageUrl(e);
  };

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
          New Polygon
        </Button>
        <Button
          variant="outlined"
          style={{
            color: "white",
            backgroundColor: "green",
            margin: "1em",
          }}
          onClick={() => {
            polygon.image = imageUrl;
            savePolygon(polygon);
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
          saveImage,
        }}
      />
    </>
  );
}

export default DisplayPolygon;
