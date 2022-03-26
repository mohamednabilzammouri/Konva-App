import React, { useContext } from "react";
import { MyPolygonsContext } from "../../../../Context/Context";
import { Polygon } from "../../../../Types/Types";
import PolygonCard from "../PolygonCard/PolygonCard";
import { StyledPolygons } from "./DIsplayPolygonCardsStyle";

function DisplayPolygonCards() {
  const { polygons } = useContext(MyPolygonsContext);

  return (
    <StyledPolygons>
      {polygons?.map((polygon: Polygon) => (
        <PolygonCard Mypolygon={polygon} />
      ))}
    </StyledPolygons>
  );
}

export default DisplayPolygonCards;
