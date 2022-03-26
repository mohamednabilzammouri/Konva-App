import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import DisplayPolygon from "./components/Polygon/DisplayPolygon";

function App() {
  return (
    <div className="app">
      <Header />
      <DisplayPolygon />
      <Footer />
    </div>
  );
}
export default App;
