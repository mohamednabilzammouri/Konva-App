import React from "react";

function Footer() {
  console.log("footer rendered");

  return (
    <div className="footer">
      © {new Date().getFullYear()} Hasty GmbH Assesment. By Mohamed nabil
      Zammouri
    </div>
  );
}

export default Footer;
