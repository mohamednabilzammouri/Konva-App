import { useContext } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { LayoutContext } from "../../../Context/Context";

function Header() {
  const { currentStatus, toggleSidebar } = useContext(LayoutContext);

  return (
    <div className="header">
      <div className="icon" onClick={toggleSidebar}>
        {currentStatus ? <ChevronLeftIcon /> : <MenuIcon />}
      </div>
      <div className="header-title">Header</div>
    </div>
  );
}

export default Header;
