import { Link } from "react-router-dom";
import { logoUrl } from "../../../Styles/ExternalFiles";
import { HeaderButton, Logo, StyledHeader } from "./HeaderStyle";

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderButton> Draw Board </HeaderButton>
      </Link>
      <Link to="/mypolygons">
        <HeaderButton>My Polygons</HeaderButton>
      </Link>

      <Logo src={logoUrl}></Logo>
    </StyledHeader>
  );
}

export default Header;
