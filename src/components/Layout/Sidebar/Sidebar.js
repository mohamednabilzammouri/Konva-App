import { useContext } from "react";
import { LayoutContext } from "../../../Context/Context";

function Sidebar() {
  const { currentStatus } = useContext(LayoutContext);
  return (
    <aside className={`${currentStatus ? "opened" : "drawer"}`}>Sidebar</aside>
  );
}

export default Sidebar;
