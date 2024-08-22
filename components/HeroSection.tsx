import React from "react";
import Navbar from "./Navbar";
import text from "../text.json";
import { Montserrat, Onest } from "next/font/google";
import HeaderLinks from "./HeaderLinks";
import ProfileAvatar from "./ProfileAvatar";

const onest = Onest({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <header id="home" className="h-wrapper">
      <Navbar />

      <section className="h-row">
        <div className="header-titles">
          <ProfileAvatar />
          <h1 className="Strokeme h-title hoverable">
            {text["eng"]["headline"]}
          </h1>
          <h2 className="Subtitle">
            👨‍💻Full Stack Engineer • Frontend • Backend
          </h2>
          <p className={`${onest.className} resume`}>
            +6 years of experience as
            <span className="highlight"> Full Stack Engineer</span> in
            developing both <span className="highlight">Front End</span> and
            <span className="highlight"> Back End</span> web solutions working
            with top companies around the world.
          </p>
        </div>
        <HeaderLinks />
        <ul className="bubbles absolute top-0">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>

      <div className="vl">
        <div className="vlinks">
          <a href="#work" className="vlink">
            Experience
          </a>
        </div>
      </div>
    </header>
  );
}
