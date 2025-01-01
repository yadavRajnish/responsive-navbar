import { useEffect, useRef, useState } from "react";

const StickySocialMedia = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const socialmediaBodyScroll = window.scrollY;
      if (socialmediaBodyScroll > 50) {
        setIsVisible(true); // Hide component when scroll is more than 45px
      } else {
        setIsVisible(false); // Show component otherwise
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null; // Return null when the component is hidden
  }

  function handleScroll() {
    const socialmediaBodyScroll = window.scrollY;
    console.log("🚀 ~ socialmediaBodyScroll", socialmediaBodyScroll);
    const navbar = navRef.current;

    // if (!navbar) return;
    if (socialmediaBodyScroll > 45) navbar?.classList.add("socialmedia-show");
    else navbar?.classList.remove("socialmedia-show");
  }
  return (
    <>
      <div
        ref={navRef}
        style={{
          position: "fixed",
          right: "3px",
          top: "120px",
          zIndex: "5",
        }}
        className="cursor-pointer"
        // onClick={}
      >
        <div
          className="p-2"
          style={{
            background: "var(--navy)",
            width: "100%",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href="https://www.facebook.com/RDBROTHERSPROPERTIES?mibextid=LQQJ4d">
              <i
                className="fa-brands fa-facebook-f py-2"
                style={{
                  fontSize: "18px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="https://www.linkedin.com/company/rd-brothers-property-consultant-llp">
              <i
                className="fa-brands fa-linkedin py-2"
                style={{
                  fontSize: "18px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="https://www.instagram.com/rdbrothersproperty?igsh=MTRpbHowcHdlazlkMA">
              <i
                className="fa-brands fa-instagram py-2"
                style={{
                  fontSize: "18px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="https://youtube.com/@r.d.brothersproperties?feature=shared">
              <i
                className="fa-brands fa-youtube py-2"
                style={{
                  fontSize: "18px",
                  color: "var(--golden)",
                  margin: "8px",
                }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-brands fa-whatsapp py-2"
                style={{
                  fontSize: "18px",
                  color: "var(--golden)",

                  margin: "8px",
                }}
              ></i>
            </a>
          </div>
          {/* <div style={{ marginLeft: "auto" }}>
            <a href="#" style={{ marginRight: "18px", color: "#fff" }}>
              Privacy policy
            </a>
            <a href="#" style={{ marginRight: "18px", color: "#fff" }}>
              FAQ
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default StickySocialMedia;
