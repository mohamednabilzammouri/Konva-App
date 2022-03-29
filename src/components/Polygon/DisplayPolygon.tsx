import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyPolygonsContext } from "../../Context/Context";

import usePolygon from "../../Hooks/usePolygon";
import DrawPolygon from "./Polygon";
import {
  NewPolygonButton,
  SaveNewContainer,
  SavePolygonButton,
} from "./PolygonCard/PolygonList/DisplayPolygonStyle";

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
  const [imageRef, setImageRef] = useState<any>();

  const saveImageRef = (e: any) => {
    setImageRef(e);
  };

  const { savePolygon } = useContext(MyPolygonsContext);

  return (
    <>
      <SaveNewContainer>
        {" "}
        <Link to={"/"}>
          <NewPolygonButton variant="outlined" onClick={resetPolygon}>
            New Polygon
          </NewPolygonButton>
        </Link>
        <SavePolygonButton
          variant="outlined"
          onClick={() => {
            polygon.image = imageRef.current?.toDataURL();
            savePolygon(polygon);
            resetPolygon();
          }}
        >
          Save
        </SavePolygonButton>
      </SaveNewContainer>

      <DrawPolygon
        polygonData={{
          flattenedPoints,
          polygon,
          handleMouseOverStartPoint,
          handleMouseMove,
          handleClick,
          handleMouseOutStartPoint,
          handleDragMovePoint,
          saveImageRef,
        }}
      />
    </>
  );
}

export default DisplayPolygon;
