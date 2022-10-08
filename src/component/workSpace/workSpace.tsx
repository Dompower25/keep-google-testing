import React from "react";
import "../workSpace/WorkSpaceModule.css";
import LeftSideBar from "../leftSideBar/leftSideBar";
import NoteCreatingBar from "../note/NoteCreatingBar";
import InformationNote from "../note/InformationNote";
import Notes from "../note/Notes";
import { Box } from "@mui/system";

const WorkSpace = () => {
  return (
    <div className="workSpaceBox">
      <LeftSideBar />
      <Box sx={{width: "100%", padding: "0 30px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <NoteCreatingBar />
        <Notes />
      </Box>
    </div>
  );
};

export default WorkSpace;
