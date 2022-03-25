import { useState } from "react";

function useToggleSidebar() {
  const [currentStatus, setCurrentStatus] = useState(false);
  const toggleSidebar = () => {
    setCurrentStatus(!currentStatus);
  };
  return { currentStatus, toggleSidebar };
}

export default useToggleSidebar;
