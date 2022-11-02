import React, { FC } from "react";
import "../workSpace/WorkSpaceModule.css";
import LeftSideBar from "../leftSideBar/leftSideBar";
import NoteCreatingBar from "../note/noteCreating/NoteCreatingBar";
import Note from "../note/Note";
import { Box } from "@mui/system";

interface IWorkSpace {
  toggleOpen: boolean;
}

const WorkSpace: FC<IWorkSpace> = ({ toggleOpen }) => {
  return (
    <div className="workSpaceBox">
      <LeftSideBar toggleOpen={toggleOpen} />
      <Box
        sx={{
          width: "100%",
          padding: "0 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <NoteCreatingBar />
        <Note /> <Note /> <Note />
      </Box>
    </div>
  );
};

export default WorkSpace;
