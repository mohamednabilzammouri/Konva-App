import React from "react";
import { POLYGON_INITIAL_STATE } from "../../Constants/Constants";
import usePolygon from "../../Hooks/usePolygon";
import Polygon from "./Polygon";

function DisplayPolygon(props) {
  const {
    flattenedPoints,
    polygon,
    handleMouseOverStartPoint,
    handleMouseMove,
    handleClick,
    handleMouseOutStartPoint,
    handleDragMovePoint,
    handleSavePolygon,
  } = usePolygon(props.PolygonToDisplay);
  return (
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
  );
}
DisplayPolygon.defaultProps = POLYGON_INITIAL_STATE;

export default DisplayPolygon;
