import { Link, Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import DisplayPolygon from "./components/Polygon/DisplayPolygon";
import PolygonCard from "./components/Polygon/PolygonCard/PolygonCard/PolygonCard";
import DisplayPolygonCards from "./components/Polygon/PolygonCard/PolygonList/DisplayPolygonCards";

function App() {
  return (
    <>
      {" "}
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/mypolygons"
            element={<DisplayPolygonCards />}
          ></Route>

          <Route exact path="/" element={<DisplayPolygon />}></Route>
        </Routes>
        {/* <Route path="/about"></Route>
        <Route path="/dashboard"></Route> */}
      </Router>
      <Footer />
    </>
  );
}
export default App;
