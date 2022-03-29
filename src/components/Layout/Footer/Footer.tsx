import { StyledFooter } from "./FooterStyle";

function Footer() {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} Hasty GmbH Assesment. By Mohamed nabil
      Zammouri
    </StyledFooter>
  );
}

export default Footer;
