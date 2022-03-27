import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import DisplayPolygon from "./components/Polygon/DisplayPolygon";
import DisplayPolygonCards from "./components/Polygon/PolygonCard/PolygonList/DisplayPolygonCards";
import { MyPolygonsContextProvider } from "./Context/Context";

function App() {
  return (
    <>
      <MyPolygonsContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/mypolygons" element={<DisplayPolygonCards />}></Route>
            <Route path="/" element={<DisplayPolygon />}></Route>
            <Route path="*" element={<Navigate to="" />} />
          </Routes>
        </Router>
        <Footer />
      </MyPolygonsContextProvider>
    </>
  );
}
export default App;
