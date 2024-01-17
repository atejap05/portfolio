import { animateScroll as scroll } from "react-scroll";
import { useIsomorphicLayoutEffect } from "@/utils/effectHook";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FloatingButton = () => {
  // floating button back to top

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".floating-btn", {
      display: "block",

      scrollTrigger: {
        trigger: "#projects",
        start: "top 800px",
        end: "bottom 650px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".floating-btn");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="floating-btn hidden fixed bottom-14 right-12 sm:right-32 shadow-2xl">
      <button
        onClick={scrollToTop}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default FloatingButton;
