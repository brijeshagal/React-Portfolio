import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    //Same as data.js
    {
      id: "1",
      title: "Socila Media App",
      icon: "#",
      img: "#",
    },
    {
      id: "2",
      title: "Hogwarts App",
      icon: "#",
      img: "#",
    },
  ];

  const handleClick = (way) => {
    if (way === "left")
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1);
    else {
      setCurrentSlide(currentSlide < data.length-1? currentSlide + 1 : 0);
    }
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Mobile.png" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="Project Here!" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="#"
        alt="Left Arrow"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="#"
        alt="Right Arrow"
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
