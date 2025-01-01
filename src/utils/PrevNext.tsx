import React from "react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

const PrevNext = ({ prevRef, nextRef }) => {
  console.log("first", prevRef, "second", nextRef);
  return (
    <div className="button-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          ref={prevRef}
          className="award-swiper-button-prev"
          style={{
            cursor: "pointer",
            marginRight: "20px",
            bottom: "0",
            width: "fit-content",
            height: "fit-content",
            color: "black",
            fontWeight: "bold",
            padding: "10px 40px",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #d4af5f",
            backgroundColor: "white",
            fontSize: "18px",
          }}
        >
          <BsCaretLeft />
        </div>
        <div
          ref={nextRef}
          className="award-swiper-button-next"
          style={{
            cursor: "pointer",
            marginRight: "20px",
            bottom: "0",
            width: "fit-content",
            height: "fit-content",
            color: "black",
            fontWeight: "bold",
            padding: "10px 40px",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #d4af5f",
            backgroundColor: "white",
            fontSize: "18px",
          }}
        >
          <BsCaretRight />
        </div>
      </div>
    </div>
  );
};

export default PrevNext;
