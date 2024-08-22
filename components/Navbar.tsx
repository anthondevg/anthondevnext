"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <nav className="nav fixed-top">
      <div className="">
        <div className="logo pl-4"></div>
        <div
          className={`main_list font-extrabold uppercase ${
            navOpened ? "show_menu" : ""
          }`}
        >
          <ul
            className="navlinks"
            onClick={() => {
              setNavOpened(!navOpened);
            }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#work">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#skills">Projects</a>
            </li>
          </ul>
        </div>
        {/* button navbar burguer */}
        <span
          className={`navTrigger hoverable ${navOpened ? "active" : ""}`}
          onClick={(e) => {
            setNavOpened(!navOpened);
          }}
        >
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
}
