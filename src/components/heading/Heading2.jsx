import React, { useEffect, useRef, useState } from "react";
import "./Heading2.css";

const Heading2 = ({ text }) => {

  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef(null);

  useEffect(()=>{
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isInView)
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return()=>{
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);
  
  return (
    <div className="text-container section-padding" ref={textRef}>
      <span className={`text-with-underline ${isVisible ? "active" : ""}`}>{text}</span>
    </div>
  );
};

export default Heading2;
