import React from "react";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header--logo"
        src={logo}
        alt="earth logo"
        width={24}
        height={24}
      />
      <h2 className="header--title">my travel journal.</h2>
    </header>
  );
}
