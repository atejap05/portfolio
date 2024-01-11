"use client";
import { useRef } from "react";

import Image from "next/image";
import pythonSvg from "../../../assets/svg/icons8-python.svg";
import nodeSvg from "../../../assets/svg/icons8-nodejs.svg";
import expressSvg from "../../../assets/svg/icons8-express-js.svg";
import postgresSvg from "../../../assets/svg/icons8-postgresql.svg";
import mongodbSvg from "../../../assets/svg/icons8-mongodb.png";
import prismaSvg from "../../../assets/svg/icons8-prisma-orm.svg";

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "@/utils/effectHook";

const FrontEndSkillList = () => {
  const skillBackRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(skillBackRef.current, {
      x: 0,

      scrollTrigger: {
        trigger: ".skill-back",
        // markers: true,
        start: "top 700px",
        end: "bottom 650px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".skill-back");
    };
  }, []);

  return (
    <>
      <ul
        ref={skillBackRef}
        className="skill-back translate-x-[500px] flex justify-between gap-2 [&>*]:transition-all duration-300 delay-75 [&>*:hover]:rotate-12"
      >
        <li>
          <Image src={pythonSvg} alt="js" />
        </li>
        <li>
          <Image src={nodeSvg} alt="typescript" />
        </li>
        <li>
          <Image src={expressSvg} alt="nextjs" />
        </li>
        <li>
          <Image src={postgresSvg} alt="tailwind" />
        </li>
        <li>
          <Image src={mongodbSvg} alt="sass" />
        </li>
        <li>
          <Image src={prismaSvg} alt="react" />
        </li>
      </ul>
    </>
  );
};

export default FrontEndSkillList;
