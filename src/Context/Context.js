import { createContext, useState } from "react";

export const MyPolygonsContext = createContext();

export function MyPolygonsContextProvider(props) {
  const [polygons, setPolygons] = useState([]);

  const savePolygon = (poly) => {
    if (poly.points.length > 1) {
      setPolygons([...polygons, poly]);
      alert(polygons.length);
      return;
    }
    alert("nein");
  };

  return (
    <MyPolygonsContext.Provider value={{ polygons, savePolygon }}>
      {props.children}
    </MyPolygonsContext.Provider>
  );
}
