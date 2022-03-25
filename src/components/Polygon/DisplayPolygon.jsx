import usePolygon from "../../Hooks/usePolygon";
import Polygon from "./Polygon";

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
  } = usePolygon();
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

export default DisplayPolygon;
