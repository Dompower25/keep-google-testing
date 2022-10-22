import React, { useCallback, useState } from "react";
import Sidebar from "./component/sidebar/Sidebar";

import WorkSpace from "./component/workSpace/WorkSpace";
import "./style/App.css";

function App() {
  const [openLeftMenuBar, setOpenLeftMenuBar] = useState(false);

  const toggleOpenLeftMenuBar = useCallback(() => {
    setOpenLeftMenuBar((openLeftMenuBar) => !openLeftMenuBar);
  }, []);

  return (
    <div className="App">
      <Sidebar toggleOpenLeftMenuBar={toggleOpenLeftMenuBar} />
      <WorkSpace toggleOpen={openLeftMenuBar} />
    </div>
  );
}

export default App;
