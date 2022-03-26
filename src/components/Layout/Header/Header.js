import { Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <Button style={{ color: "white", paddingLeft: "3%" }}>New Polygon</Button>
      <Button style={{ color: "white", paddingLeft: "3%" }}>My Polygons</Button>
      <Button style={{ color: "white", paddingLeft: "3%" }}>
        Save Polygon
      </Button>
      <Button style={{ color: "white", paddingLeft: "3%" }}>Reset</Button>

      <img
        src="https://hasty.ai/assets/images/hasty-logo.svg"
        className="header-title"
        style={{ marginRight: "5%" }}
      ></img>
    </div>
  );
}

export default Header;
