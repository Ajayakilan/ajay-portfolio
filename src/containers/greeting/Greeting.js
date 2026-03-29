import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Aurora from "../../components/aurora/Aurora";
import Squares from "../../components/squares/Squares";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
// import resumePdf from "../../../assets/Ajay_Resume.docx";
import resumePdf from "../../assets/Ajayakilan_CV.pdf";
import manOnTableSvg from "../../assets/images/manOnTable.svg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting" style={{ position: 'relative' }}>
      <Aurora
        colorStops={["#bdffb3","#7eafdd","#5227FF"]}
        amplitude={1}
        blend={0.5}
      />
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={resumePdf}
                  download="Resume.pdf"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={manOnTableSvg}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
