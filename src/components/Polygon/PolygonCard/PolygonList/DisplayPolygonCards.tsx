import { useContext } from "react";
import { MyPolygonsContext } from "../../../../Context/Context";
import { Polygon } from "../../../../Types/Types";
import UploadJson from "../../../FileManagement/UploadJson";
import PolygonCard from "../PolygonCard/PolygonCard";
import { StyledPolygons } from "./DIsplayPolygonCardsStyle";

function DisplayPolygonCards(): JSX.Element {
  const { polygons } = useContext(MyPolygonsContext);

  return (
    <StyledPolygons>
      <UploadJson />

      {polygons?.map((polygon: Polygon) => (
        <PolygonCard Mypolygon={polygon} />
      ))}
    </StyledPolygons>
  );
}

export default DisplayPolygonCards;
