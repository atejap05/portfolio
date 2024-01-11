"use client";
import { useRef } from "react";

import Image from "next/image";
import typescriptSvg from "../../../assets/svg/icons8-typescript.svg";
import nextjsSvg from "../../../assets/svg/icons8-nextjs.svg";
import tailwindSvg from "../../../assets/svg/icons8-tailwindcss.svg";
import sassSvg from "../../../assets/svg/icons8-sass.svg";
import reactSvg from "../../../assets/svg/icons8-react.svg";
import cssSvg from "../../../assets/svg/icons8-css.svg";
import htmlSvg from "../../../assets/svg/icons8-html.svg";
import jsSvg from "../../../assets/svg/icons8-javascript.svg";

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "@/utils/effectHook";

const FrontEndSkillList = () => {
  const skillFrontRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(skillFrontRef.current, {
      x: 0,

      scrollTrigger: {
        trigger: ".skill-front",
        markers: true,
        start: "top 700px",
        end: "bottom 650px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".skill-front");
    };
  }, []);

  return (
    <>
      <ul
        ref={skillFrontRef}
        className=" skill-front -translate-x-[500px] flex justify-between gap-2 [&>*]:transition-all duration-300 delay-75 [&>*:hover]:rotate-12"
      >
        <li>
          <Image src={jsSvg} alt="js" />
        </li>
        <li>
          <Image src={typescriptSvg} alt="typescript" />
        </li>
        <li>
          <Image src={nextjsSvg} alt="nextjs" />
        </li>
        <li>
          <Image src={tailwindSvg} alt="tailwind" />
        </li>
        <li>
          <Image src={sassSvg} alt="sass" />
        </li>
        <li>
          <Image src={reactSvg} alt="react" />
        </li>
        <li>
          <Image src={cssSvg} alt="css" />
        </li>
        <li>
          <Image src={htmlSvg} alt="html" />
        </li>
      </ul>
    </>
  );
};

export default FrontEndSkillList;
