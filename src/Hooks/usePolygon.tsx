import { useState } from "react";
import { POLYGON_INITIAL_STATE } from "../Constants/Constants";
import { Polygon } from "../Types/Types";

function usePolygon(CurrentPolygon: Polygon = POLYGON_INITIAL_STATE) {
  const [polygon, setPolygon] = useState<Polygon>(CurrentPolygon);

  const resetPolygon = () => {
    setPolygon(POLYGON_INITIAL_STATE);
  };

  const getMousePosition = (stage: any) => {
    const { x, y } = stage.getPointerPosition();
    return [x, y];
  };

  const handleClick = (event: any) => {
    const stage = event.target.getStage();
    const mousePos = getMousePosition(stage);
    if (polygon.isFinished) return;

    if (polygon.isMouseOverStartPoint && polygon.points.length >= 3) {
      setPolygon({ ...polygon, isFinished: true });
      return;
    }
    setPolygon({ ...polygon, points: [...polygon.points, mousePos] });
  };

  const handleMouseMove = (event: any) => {
    const stage = event.target.getStage();
    const mousePos = getMousePosition(stage);
    setPolygon({ ...polygon, curMousePos: mousePos });
  };

  const handleMouseOverStartPoint = (event: any) => {
    if (polygon.isFinished || polygon.points.length < 3) return;
    event.target.scale({ x: 2, y: 2 });
    setPolygon({ ...polygon, isMouseOverStartPoint: true });
  };

  const handleMouseOutStartPoint = (event: any) => {
    event.target.scale({ x: 1, y: 1 });
    setPolygon({ ...polygon, isMouseOverStartPoint: false });
  };

  const handleDragMovePoint = (event: any) => {
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
    .reduce((a: any, b: any) => a.concat(b), []);

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
  };
}

export default usePolygon;
