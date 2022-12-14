import { TweenMax } from "gsap";

const hamburgerMenu = document.querySelector(".hamburger--menu");
let hamburgerState = 0;
const menu = document.querySelector(".menu");
const hamburgerMenuOpen = () => {
  if (hamburgerState === 1) {
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");
    const hamList = document.querySelectorAll(".hamList");

    TweenMax.to(hamList, 0, { x: -500, delay: 0, stagger: 0 });
    TweenMax.to(bar2, 0.3, { x: 0 });
    TweenMax.to(bar1, 0.3, { y: 0, transform: "rotate(0)" });
    TweenMax.to(bar3, 0.3, { y: 0, transform: "rotate(0)" });
    TweenMax.to(menu, 0.3, { x: 0 });
    hamburgerState = hamburgerState - 1;
    console.log(hamburgerState);
  } else if (hamburgerState === 0) {
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");
    const hamList = document.querySelectorAll(".hamList");

    TweenMax.to(hamList, 0.3, { x: 0, delay: 0.3, stagger: 0.1 });
    TweenMax.to(bar2, 0.3, { x: -150 });
    TweenMax.to(bar1, 0.3, { y: "0.9rem", transform: "rotate(45deg)" });
    TweenMax.to(bar3, 0.3, { y: "-0.9rem", transform: "rotate(-45deg)" });
    TweenMax.to(menu, 0.3, { transform: "translate(100%, 0%)" });
    hamburgerState += 1;
    console.log(hamburgerState);
  }
};

hamburgerMenu.addEventListener("click", hamburgerMenuOpen);
export default hamburgerMenuOpen;
