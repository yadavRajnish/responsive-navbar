import { CountUp } from "countup.js";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-spring";
import "../app/(home)/SectionImage.css";

interface DashboardData {
  value: number;
  suffix?: string;
  label: string;
}

interface DashboardCountProps {
  data: DashboardData[];
}

function DashboardCount({ data }: DashboardCountProps) {
  const [ref, inView] = useInView({ once: true, amount: "all" });
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const options = {
      duration: 3,
      useGrouping: false,
    };

    if (inView) {
      countersRef.current.forEach((counter, index) => {
        if (counter) {
          const dataTo = counter.getAttribute("data-to");
          console.log(`Element ${index}:`, counter, `data-to:`, dataTo); // Debugging line
          if (dataTo) {
            const countUp = new CountUp(counter, parseFloat(dataTo), options);
            if (!countUp.error) {
              countUp.start();
            } else {
              console.error(
                `Error initializing CountUp for element ${index}:`,
                countUp.error
              );
            }
          } else {
            console.warn(`data-to attribute missing for element ${index}`);
          }
        } else {
          console.warn(`Element ${index} is null`);
        }
      });
    }
  }, [data, inView]);

  return (
    <section
      id="section-fun-facts"
      className="p-3 p-md-5"
      style={{ backgroundSize: "cover" }}
    >
      <div className="container" style={{ backgroundSize: "cover" }}>
        <div className="row text-center" style={{ backgroundSize: "cover" }}>
          {data.map((item, index) => {
            const { value, suffix = "" } = item;
            console.log({ item });

            return (
              <div
                ref={ref}
                key={index}
                className={`col-md-4 col-lg wow fadeInUp mb-sm-30 animated ${
                  index === data.length - 1 ? "col-sm-12" : "col-6"
                }`}
                data-wow-delay={`${index * 0.25}s`}
                style={{
                  backgroundSize: "cover",
                  visibility: "visible",
                  animationDelay: `${index * 0.25}s`,
                  animationName: "fadeInUp",
                }}
              >
                <div className="de_count" style={{ backgroundSize: "cover" }}>
                  <h3 className="main-color3">
                    <span
                      className="fz-40 mobile-value"
                      ref={el => {
                        countersRef.current[index] = el;
                      }}
                      data-to={value}
                    >
                      {value}
                    </span>
                    {suffix}
                    {/* {item.suffix && item.suffix} */}
                  </h3>
                  <div className="fs-7 text-golden mobile-responsive ">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DashboardCount;
