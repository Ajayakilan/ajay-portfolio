import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  resumeSection,
  educationInfo,
  myProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isOpen, setIsOpen] = useState(false);
  const viewSkills = skillsSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;
  const viewMyProjects = myProjects.display;

  const close = () => setIsOpen(false);

  return (
    <>
      <Headroom>
        <header className={isDark ? "dark-menu header" : "header"}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <div className={`menu-icon ${isOpen ? "is-open" : ""}`} onClick={() => setIsOpen(p => !p)}>
            <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
          </div>
          <ul className={isDark ? "dark-menu menu desktop-menu" : "menu desktop-menu"}>
            {viewSkills && <li><a href="#skills">Skills</a></li>}
            {viewResume && <li><a href="#resume">Resume</a></li>}
            {viewEducation && <li><a href="#education">Education</a></li>}
            {viewMyProjects && <li><a href="#projects">Projects</a></li>}
            <li><a href="#contact">Contact</a></li>
            <li><a><ToggleSwitch /></a></li>
          </ul>
        </header>
      </Headroom>

      {isOpen && (
        <div className={`mobile-dropdown ${isDark ? "dark" : ""}`}>
          <ul className="mobile-menu">
            {viewSkills && <li><a href="#skills" onClick={close}>Skills</a></li>}
            {viewResume && <li><a href="#resume" onClick={close}>Resume</a></li>}
            {viewEducation && <li><a href="#education" onClick={close}>Education</a></li>}
            {viewMyProjects && <li><a href="#projects" onClick={close}>Projects</a></li>}
            <li><a href="#contact" onClick={close}>Contact</a></li>
            <li><a><ToggleSwitch /></a></li>
          </ul>
        </div>
      )}
    </>
  );
}
export default Header;
