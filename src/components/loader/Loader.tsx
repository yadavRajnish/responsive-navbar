import gsap from "gsap";
import { useEffect } from "react";
import Image from "next/image";

function Loader() {
  useEffect(() => {
    requestAnimationFrame(() => {
      const svg = document.getElementById("svg");
      if (!svg) {
        console.error("SVG element n ot found.");
        return;
      }

      const tl = gsap.timeline();
      const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
      });
      tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, { duration: 0.5, attr: { d: flat }, ease: "power2.easeOut" });
      tl.to(".loader-wrap", { y: -1500 });
      tl.to(".loader-wrap", { zIndex: -1, display: "none" });
    });
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <span>
          <h2 className="load-text">
            <span>
              <Image
                src="/rdb_logo-small.webp"
                style={{ width: "185px" }}
                alt="logo"
                width={800}
                height={500}
                priority
              />
            </span>
          </h2>
        </span>
      </div>
    </div>
  );
}

export default Loader;
