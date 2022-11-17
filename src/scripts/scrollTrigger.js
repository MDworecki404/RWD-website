import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2 = document.querySelector(".section2");

const scroll = () => {
  gsap.fromTo(
    section2.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 30%",
      },
    }
  );
};
window.onload = scroll;

export default scroll;
