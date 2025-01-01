import React, { useEffect, useRef, useState } from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
  isSpace?: boolean;
  color?: string;
  isMargin?: string;
  textAlign?: "center" | "left" | "right";
}

const Heading: React.FC<HeadingProps> = ({
  headTitle,
  isSpace,
  color = "var(--navy)",
  isMargin = "mt-60",
  textAlign = "center",
  fontSize,
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [borderWidth, setBorderWidth] = useState<string>("0px");

  useEffect(() => {
    if (spanRef.current) {
      const textWidth = spanRef.current.offsetWidth;
      setBorderWidth(`${textWidth * 0.75}px`);
    }
  }, [headTitle]);

  return (
    <div
      style={{
        width: "fit-content",
        margin: textAlign === "center" ? "0 auto" : "0",
      }}
      className="position-relative"
    >
      <h2
        className={`${isMargin} ${isSpace && "mb-80"} mb-30 fs-2`}
        style={{ fontSize: `${fontSize} !important` }}
      >
        <span style={{ color }} ref={spanRef}>
          {headTitle}
        </span>
      </h2>
      <div
        className="border-line position-absolute "
        style={{
          // width: borderWidth,
          top: "100%",
          left: textAlign === "center" ? "12.5%" : "0",
          right: textAlign === "center" ? "12.5%" : "70%",
        }}
      ></div>
    </div>
  );
};

export default Heading;
