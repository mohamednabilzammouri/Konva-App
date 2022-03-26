import React, { useContext } from "react";
import { MyPolygonsContext } from "../../../../Context/Context";
import { Polygon } from "../../../../Types/Types";
import PolygonCard from "../PolygonCard/PolygonCard";
import { StyledPolygons } from "./DIsplayPolygonCardsStyle";

interface PolygonCardProps {
  polygons: Polygon[];
}

function DisplayPolygonCards() {
  const { polygons } = useContext(MyPolygonsContext);
  console.log(polygons);

  return (
    <StyledPolygons>
      {polygons.map(() => {
        <>aaaaaaaaa</>;
      })}
    </StyledPolygons>
  );
}

export default DisplayPolygonCards;
