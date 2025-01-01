import { useState, useEffect, CSSProperties } from "react";
import Image from "next/image";
import Heading from "@/components/heading/Heading";
import Parallax from "parallax-js";
import "./VisionMission2.css";

const VisionMission: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("about");
  const [imageSrc, setImageSrc] = useState<string>(
    "/assets/images/home/news1.webp"
  );
  const [displayText, setDisplayText] = useState<string>(
    "With a team of over 40 dedicated professionals, averaging more than 7 years of experience each, we add a touch of Professionalism to everything we do."
  );

  const tabStyle = (isSelected: boolean): CSSProperties => ({
    backgroundColor: isSelected ? "#d4af5f" : "transparent",
    color: isSelected ? "white" : "grey",
    fontWeight: "600",
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "6px",
    fontSize: "16px",
    margin: "5px",
  });

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    switch (tab) {
      case "vision":
        setImageSrc("/assets/images/home/our-vision.webp");
        setDisplayText(
          "Making Real Estate simple and effective through the use of defined processes and technology."
        );
        break;
      case "mission":
        setImageSrc("/assets/images/home/our-mission.webp");
        setDisplayText(
          "To deliver professionalism and add a touch of Indian warmth to the way property is managed across India and overseas."
        );
        break;
      default:
        setImageSrc("/assets/images/home/news1.webp");
        setDisplayText(
          "With a team of over 40 dedicated professionals, averaging more than 7 years of experience each, we add a touch of Professionalism to everything we do."
        );
        break;
    }
  };

  useEffect(() => {
    // Initialize the parallax effect
    if (
      typeof window !== "undefined" &&
      document.querySelector(".parallaxie")
    ) {
      const parallaxInstance = new Parallax(
        document.querySelector(".parallaxie")!
      );
      return () => parallaxInstance.destroy();
    }
  }, [selectedTab]);

  return (
    <section className="vision-mission-section">
      <div className="row m-0 h-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-section">
          <div className="mb-4">
            <Heading headTitle="Overview" />
          </div>
          <div className="mb-4 d-flex flex-wrap justify-content-center">
            <button
              style={tabStyle(selectedTab === "about")}
              onClick={() => handleTabClick("about")}
              className="me-2 mb-2"
            >
              About Us
            </button>
            <button
              style={tabStyle(selectedTab === "mission")}
              onClick={() => handleTabClick("mission")}
              className="me-2 mb-2"
            >
              Our Mission
            </button>
            <button
              style={tabStyle(selectedTab === "vision")}
              onClick={() => handleTabClick("vision")}
              className="mb-2"
            >
              Our Vision
            </button>
          </div>
          <div className="tab-content p-0 text-center">
            <p>{displayText}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center image-section">
          <div className="parallax-container w-100 h-100">
            <div
              className="ratio ratio-4x3 parallaxie"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
              }}
            >
              <Image
                src={imageSrc}
                alt={selectedTab}
                layout="fill"
                objectFit="cover"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
