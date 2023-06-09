import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  EmojiEmotions,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import db from "./firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //Run this code when the sidebar component load
    //onSnaphot is same like map for fireabse data
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>
            Reshika Shrestha <EmojiEmotions />
          </h2>
          <h3>
            <FiberManualRecord />
            Reshika Shrestha
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user group" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" />

      {/* Connect to db and list all the channels */}

      {channels.map((chennel) => (
        <SidebarOption title={chennel.name} />
      ))}
    </div>
  );
}

export default Sidebar;
