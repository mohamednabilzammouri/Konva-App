import "./App.css";
import Container from "./components/Layout/Container/Container";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import { LayoutContext } from "./Context/Context";
import useToggleSidebar from "./Hooks/useToggleSidebar";

function App() {
  const { currentStatus, toggleSidebar } = useToggleSidebar();
  return (
    <LayoutContext.Provider value={{ currentStatus, toggleSidebar }}>
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
}
export default App;
