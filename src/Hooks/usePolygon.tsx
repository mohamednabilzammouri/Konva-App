import { useEffect, useState } from "react";
import { POLYGON_INITIAL_STATE } from "../Constants/Constants";
import { Polygon } from "../Types/Types";
import { isIntersects } from "../Utils/isIntersect";
import { useLocalStorage } from "./useLocalStorage";

function usePolygon(CurrentPolygon: Polygon = POLYGON_INITIAL_STATE) {
  const [polygon, setPolygon] = useState<Polygon>(CurrentPolygon);
  const [storedValue, setValue] = useLocalStorage("CurrentPolygon", polygon);

  useEffect(() => {
    if (polygon.points.length === 0 && storedValue) {
      setPolygon(storedValue);
    }
  }, []);
  const resetPolygon = () => {
    setPolygon(POLYGON_INITIAL_STATE);
  };

  const getMousePosition = (stage: any) => {
    const { x, y } = stage.getPointerPosition();
    return [x, y];
  };
  const getRef = (stage: any) => {
    return stage.ref;
  };

  const handleClick = (event: any) => {
    const stage = event.target.getStage();
    const mousePos = getMousePosition(stage);
    if (polygon.points.length >= 3) {
      let last = polygon.points.length - 1;
      for (let i = 0; i < polygon.points.length - 1; i++) {
        if (
          isIntersects(
            polygon.points[i][0],
            polygon.points[i][1],
            polygon.points[i + 1][0],
            polygon.points[i + 1][1],
            polygon.points[last][0],
            polygon.points[last][1],
            mousePos[0],
            mousePos[1]
          )
        ) {
          return;
        }
      }
    }

    if (polygon.isFinished) return;

    if (polygon.isMouseOverStartPoint && polygon.points.length >= 3) {
      setPolygon({ ...polygon, isFinished: true });
      setValue({ ...polygon, isFinished: true });

      return;
    }
    setPolygon({ ...polygon, points: [...polygon.points, mousePos] });
    setValue({ ...polygon, points: [...polygon.points, mousePos] });
    console.log(polygon.points);
    console.log(mousePos);
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
    console.log("index ", index, "POS :", pos);

    setPolygon({
      ...polygon,
      points: [...points.slice(0, index), pos, ...points.slice(index + 1)],
    });
    setValue({
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
    getRef,
  };
}

export default usePolygon;
