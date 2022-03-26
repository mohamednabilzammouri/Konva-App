import { Button } from "@material-ui/core";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Header() {
  console.log("header rendered");
  return (
    <div className="header">
      <Link to="/">
        <Button style={{ color: "white" }}> New Polygon</Button>
      </Link>
      <Link to="/mypolygons">
        <Button style={{ color: "white" }}>My Polygons</Button>
      </Link>

      <img
        src="https://hasty.ai/assets/images/hasty-logo.svg"
        className="header-title"
        style={{ marginRight: "5%" }}
      ></img>
    </div>
  );
}

export default Header;
