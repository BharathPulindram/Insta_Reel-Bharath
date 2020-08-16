import React from "react";
import "./VideoFooter.css";
import { Avatar, Button } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Ticker from "react-ticker";
function VideoFooter({ channel, song, likes, shares, avatar }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatar} />
        <h3>
          {channel} . <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon style={{ color: "red" }} fontSize="large" />
          <ModeCommentIcon style={{ color: "orange" }} fontSize="large" />
          <SendIcon style={{ color: "green" }} fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon style={{ color: "red" }} />
            <p>{likes} </p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon style={{ color: "orange" }} />
            <p>{shares} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
