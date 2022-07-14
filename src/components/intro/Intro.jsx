import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const TextRef = useRef();

  useEffect(() => {
    init(TextRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/Images/Me.jpg" alt="Assets 1" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Brijesh Agal</h1>
          <h3>
            Freelance <span ref = {TextRef}>Competitive Programmer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="#" alt="Scroll Down to Portfolio" />
        </a>
      </div>
    </div>
  );
}
