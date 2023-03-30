import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Search, HelpOutline } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="Reshika Shrestha" src="" />
        <AccessTimeIcon />
        {/* Avatar fro looged in user */}
        {/* time icon */}
      </div>

      <div className="header_search">
        {/* Search icon */}
        <Search />
        {/* input */}
        <input placeholder="Search" />
      </div>
      <div className="header_right">
        <HelpOutline />
        {/* input */}
      </div>
    </div>
  );
}

export default Header;
