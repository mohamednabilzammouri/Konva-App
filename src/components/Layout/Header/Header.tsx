import { Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <Button style={{ color: "white", textDecoration: "none" }}>
          {" "}
          New Polygon
        </Button>
      </a>
      <a href="/mypolygons">
        <Button style={{ color: "white", textDecoration: "none" }}>
          My Polygons
        </Button>
      </a>

      <img
        src="https://hasty.ai/assets/images/hasty-logo.svg"
        className="header-title"
        style={{ marginRight: "5%" }}
      ></img>
    </div>
  );
}

export default Header;
