import React from "react";
import "./VideoHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon style={{ color: "black" }} />
      <h3>Bharath</h3>
      <CameraAltIcon style={{ color: "brown" }} />
    </div>
  );
}

export default VideoHeader;
