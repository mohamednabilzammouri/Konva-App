import { Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <Button style={{ color: "white", paddingLeft: "5%" }}>My Polygons</Button>
      <Button style={{ color: "white", paddingLeft: "5%" }}>Save Work</Button>
      <Button style={{ color: "white", paddingLeft: "5%" }}>New Polygon</Button>

      <img
        src="https://hasty.ai/assets/images/hasty-logo.svg"
        className="header-title"
        style={{ marginRight: "5%" }}
      ></img>
    </div>
  );
}

export default Header;
