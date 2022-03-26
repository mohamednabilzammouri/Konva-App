import React from "react";
import { Polygon } from "../../../../Types/Types";
import PolygonCard from "../PolygonCard/PolygonCard";
import { StyledPolygons } from "./DIsplayPolygonCardsStyle";

interface PolygonCardProps {
  polygons: Polygon[];
}

function DisplayPolygonCards() {
  return (
    <StyledPolygons>
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
      <PolygonCard />
    </StyledPolygons>
  );
}

export default DisplayPolygonCards;
