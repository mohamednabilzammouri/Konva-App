import { createContext, useState } from "react";
import { Polygon } from "../Types/Types";

interface ContextInit {
  polygons?: Polygon[];
  savePolygon?: any;
}

export const MyPolygonsContext = createContext<ContextInit>({});

export function MyPolygonsContextProvider(props: any) {
  const [polygons, setPolygons] = useState<Polygon[]>([]);

  const savePolygon = (poly: Polygon) => {
    if (poly.points.length > 1) {
      poly.id = polygons.length + 1;
      setPolygons([...polygons, poly]);
      alert(poly.id);
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
