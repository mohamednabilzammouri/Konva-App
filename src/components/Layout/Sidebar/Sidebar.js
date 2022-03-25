import { useContext } from "react";
import { LayoutContext } from "../../../Context/Context";

function Sidebar() {
  const { currentStatus } = useContext(LayoutContext);
  console.log(currentStatus);

  return (
    <aside className={`${currentStatus ? "opened" : ""} drawer`}>Sidebar</aside>
  );
}

export default Sidebar;
