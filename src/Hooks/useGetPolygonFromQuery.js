import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { POLYGON_INITIAL_STATE } from "../Constants/Constants";
import { MyPolygonsContext } from "../Context/Context";

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function GetPolygonFromUrl() {
  const { polygons } = useContext(MyPolygonsContext);

  let query = useQuery();
  const [polygonn, setPoly] = useState(POLYGON_INITIAL_STATE);
  useEffect(() => {
    let poly = polygons?.find(
      (polygon) => polygon.id === parseInt(query.get("id"))
    );
    if (poly) {
      setPoly(poly);
    }
  }, []);
  return polygonn;
}
