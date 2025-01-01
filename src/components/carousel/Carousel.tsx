import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import PrevNext from "@/utils/PrevNext";

const swiperOptions = {
  modules: [Navigation, Pagination],
  speed: 1000,
  spaceBetween: 80,
  loop: true,
  centeredSlides: true,
  mousewheel: true,
  slidesPerView: 2,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".work-carsouel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".work-carsouel .swiper-button-next",
    prevEl: ".work-carsouel .swiper-button-prev",
  },
};

function Carousel({
  data,
  component,
}: {
  data: unknown[];
  component: (item: any) => React.JSX.Element;
}) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  const nextVideoGalleryRef = useRef(null);
  const prevVideoGalleryRef = useRef(null);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className={`work-carsouel valign light`}>
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12">
            <div
              className="work-crus work-crus2"
              style={{ marginBottom: "120px" }}
            >
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-w"
                  className="swiper-container"
                >
                  {data.map((item, i) => (
                    <SwiperSlide key={i}>{component(item)}</SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
