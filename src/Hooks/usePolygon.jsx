import { useState } from "react";
import { POLYGON_INITIAL_STATE } from "../Constants/Constants";

function usePolygon(CurrentPolygon = POLYGON_INITIAL_STATE) {
  const [polygon, setPolygon] = useState(CurrentPolygon);

  const resetPolygon = () => {
    setPolygon(POLYGON_INITIAL_STATE);
  };

  const savePolygon = () => {
    if (polygon.points.length > 1) {
      alert("saved");
      resetPolygon();
      return;
    }
    alert("You must set a minimum of two points to save your polygon");
  };

  const getMousePosition = (stage) => {
    const { x, y } = stage.getPointerPosition();
    return [x, y];
  };

  const handleClick = (event) => {
    const stage = event.target.getStage();
    const mousePos = getMousePosition(stage);
    if (polygon.isFinished) return;

    if (polygon.isMouseOverStartPoint && polygon.points.length >= 3) {
      setPolygon({ ...polygon, isFinished: true });
      return;
    }
    setPolygon({ ...polygon, points: [...polygon.points, mousePos] });
  };

  const handleMouseMove = (event) => {
    const stage = event.target.getStage();
    const mousePos = getMousePosition(stage);
    setPolygon({ ...polygon, curMousePos: mousePos });
  };

  const handleMouseOverStartPoint = (event) => {
    if (polygon.isFinished || polygon.points.length < 3) return;
    event.target.scale({ x: 2, y: 2 });
    setPolygon({ ...polygon, isMouseOverStartPoint: true });
  };

  const handleMouseOutStartPoint = (event) => {
    event.target.scale({ x: 1, y: 1 });
    setPolygon({ ...polygon, isMouseOverStartPoint: false });
  };

  const handleDragMovePoint = (event) => {
    const points = polygon.points;
    const index = event.target.index - 1;
    const pos = [event.target.attrs.x, event.target.attrs.y];
    setPolygon({
      ...polygon,
      points: [...points.slice(0, index), pos, ...points.slice(index + 1)],
    });
  };

  const flattenedPoints = polygon.points
    .concat(polygon.isFinished ? [] : polygon.curMousePos)
    .reduce((a, b) => a.concat(b), []);

  const handleSavePolygon = () => {};

  return {
    handleClick,
    handleMouseMove,
    flattenedPoints,
    polygon,
    handleMouseOverStartPoint,
    handleMouseOutStartPoint,
    handleDragMovePoint,
    handleSavePolygon,
    resetPolygon,
    savePolygon,
  };
}

export default usePolygon;
