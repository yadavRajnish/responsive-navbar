"use client";
export default function parallaxie(selector, speed = 0.8, startPosition) {
  let elementBg = document.querySelector(selector);
  let image = elementBg.getAttribute("data-background");
  if (!image) {
    image = window.getComputedStyle(elementBg).backgroundImage;
  }
  let position = elementBg.getBoundingClientRect().top * speed;
  let positionLeft = elementBg.getBoundingClientRect().left;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = `calc(100% - ${positionLeft}px) 100%`;
  elementBg.style.backgroundRepeat = "no-repeat";
  elementBg.style.backgroundAttachment = "fixed";
  elementBg.style.backgroundPosition = `${positionLeft}px ${
    startPosition !== undefined ? startPosition : position
  }px`;

  window.addEventListener("scroll", () => {
    position = elementBg.getBoundingClientRect().top * speed;
    elementBg.style.backgroundPosition = `${positionLeft}px ${position}px`;
  });
}
