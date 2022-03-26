import { createContext, useState } from "react";
import { Polygon } from "../Types/Types";
import { Stage } from "react-konva";

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
      poly.dateTime = {
        Year: new Date().getFullYear(),
        Month: new Date().getMonth(),
        Day: new Date().getDate(),
        Hour: new Date().getHours(),
        Minutes: new Date().getMinutes(),
      };

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
