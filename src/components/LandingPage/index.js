import React, { useState } from "react";
import "./style.css";
import { detail } from "./details";


const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleHover = (index) => {
    setHoveredIndex(index);
  };
  const handleNotHover = () => {
    setHoveredIndex(null);
  };

  return (
    <>
    <section id="home">

      <section className="homepage">
        <div className="healthy">
          <p>
            To ensure healthy bone growth in 
          children by identifying
            calcium deficiency to prevent rickets
          </p>
        </div>

      </section>

      <div className="details-container">
        {detail.map((item, index) => (
          <div
            className={`detail-box ${hoveredIndex === index ? "hovered" : ""}`}
            key={index}
            onMouseOver={() => handleHover(index)}
            onMouseOut={handleNotHover}
            data-testid={`detail-box-${index}`}
          >
            <div className="icon">{item.icon}</div>
            <div className="title"><p>{item.title}</p></div>
            {hoveredIndex === index && <p className="description">{item.description}</p>}
          </div>
        ))}
      </div>
      
      </section>
    </>
  );
};



export default Home;
