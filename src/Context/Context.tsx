import { createContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { Polygon } from "../Types/Types";

interface MyPolygonsContextInit {
  polygons?: Polygon[];
  savePolygon?: any;
}

export const MyPolygonsContext = createContext<MyPolygonsContextInit>({});

export function MyPolygonsContextProvider(props: any) {
  const [polygons, setPolygons] = useState<Polygon[]>([]);
  const [storedValue, setValue] = useLocalStorage("MyPolygons", polygons);

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
      setValue([...polygons, poly]);

      alert("ID : " + poly.id + " Successfully Saved");
      console.log(poly);

      return;
    }
    alert("You need at least 2 points to save");
  };

  return (
    <MyPolygonsContext.Provider value={{ polygons, savePolygon }}>
      {props.children}
    </MyPolygonsContext.Provider>
  );
}
