import Image from "next/image";
import CustomUnderline from "@/components/ui/CustomUnderline";
import PersonalCard from "@/components/ui/PersonalCard";
import FloatingButton from "@/components/ui/FloatingButton";
import { Crimson_Pro } from "next/font/google";
import headerImg from "../assets/imgs/header_01.jpg";

// SVG

import typescriptSvg from "../assets/svg/icons8-typescript.svg";
import nextjsSvg from "../assets/svg/icons8-nextjs.svg";
import tailwindSvg from "../assets/svg/icons8-tailwindcss.svg";
import sassSvg from "../assets/svg/icons8-sass.svg";
import reactSvg from "../assets/svg/icons8-react.svg";
import cssSvg from "../assets/svg/icons8-css.svg";
import htmlSvg from "../assets/svg/icons8-html.svg";
import jsSvg from "../assets/svg/icons8-javascript.svg";

import nodeSvg from "../assets/svg/icons8-nodejs.svg";
import expressSvg from "../assets/svg/icons8-express-js.svg";
import postgresSvg from "../assets/svg/icons8-postgresql.svg";
import mongodbSvg from "../assets/svg/icons8-mongodb.png";
import prismaSvg from "../assets/svg/icons8-prisma-orm.svg";
import pythonSvg from "../assets/svg/icons8-python.svg";

const crimsonPro = Crimson_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-screen-xl min-h-screen py-2 px-4 m-auto">
      <section className="bg-gradient-to-t from-my-dark to-my-black shadow-md flex justify-between gap-2 px-8 pb-24 clip-path-mypolygon_b">
        <div className="">
          <div className="mt-8">
            <ul className="flex justify-evenly mb-32">
              <li>
                <a
                  href=""
                  className="group text-my-white transition duration-300 text-lg"
                >
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-my-bage"></span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="group text-my-white  transition duration-300 text-lg"
                >
                  Projects
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-my-bage"></span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="group text-my-white  transition duration-300 text-lg"
                >
                  Contact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-my-bage"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="mb-6">
              <span className="animate-hand-shake inline-block">👋🏻</span> Hi,
              I'm{" "}
              <span className=" mx-1 text-xl font-semibold">Joel Alves,</span>
            </p>
            <h1 className={`${crimsonPro.className} text-3xl mb-4`}>
              Full Stack Developer
            </h1>
            <p
              className={`${crimsonPro.className} text-5xl leading-snug mb-10`}
            >
              Creating web applications with
              <CustomUnderline text="ReactJs" />, NextJs, TypeScript and
              TailwindCSS.
            </p>
            <p className="text-xl leading-relaxed">
              I enjoy building solid and user-friendly web applications using my
              experience in interface design, TypeScript and React. If you need
              a communicative front-end developer who enjoys working as part of
              a team, I’d love to hear from you!
            </p>
          </div>
        </div>

        <div className="p-4">
          <Image
            className="rounded-full shadow-2xl"
            src={headerImg}
            alt="Picture of the author"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>
      <section className="bg-gradient-to-b from-my-dark to-my-black shadow-md px-8 py-24 clip-path-mypolygon_y">
        <p className="mb-6 uppercase text-md text-my-lighten">About my work</p>
        <h1 className={`${crimsonPro.className}  text-5xl leading-snug mb-10`}>
          <span className="font-semibold">6+ years of experience</span> in
          <CustomUnderline text="web development" />, working with the most
          modern technologies on the market.
        </h1>
        <div className="flex justify-between gap-16">
          <div>
            <h2 className="mb-6 uppercase text-2xl">Front-end</h2>
            <p className="mb-6 leading-relaxed text-xl">
              I have been working with front-end development for over 6 years,
              using technologies such as HTML, CSS & JavaScript (ES6), ReactJs,
              NextJs, TypeScript, Tailwind CSS, Sass, Styled Components, among
              others.
            </p>
            <div className="w-2/3">
              <ul className="flex justify-between gap-2 [&>*]:transition-all duration-300 delay-75 [&>*:hover]:rotate-12">
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
            </div>
          </div>
          <div>
            <h2 className="mb-6 uppercase text-2xl">Back-end</h2>
            <p className="mb-6 leading-relaxed text-xl">
              I have been working with back-end development for over 6 years,
              using technologies such as Python, NodeJs, ExpressJs, PostgreSQL,
              MongoDB, Prisma, among others.
            </p>
            <div className="w-2/3">
              <ul className="flex justify-between gap-2 [&>*]:transition-all duration-300 delay-75 [&>*:hover]:rotate-12">
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
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-my-dark to-my-black px-8 py-20 clip-path-mypolygon_y">
        <h1 className="text-4xl text-my-lighten text-center py-20">
          My Projects
        </h1>
        <div className="flex justify-between gap-16 px-8">
          <div className="w-1/2 ">
            <h2 className="text-2xl mb-6">Project 1</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptate, voluptatum, quod, quibusdam doloremque iusto
              exercitationem dolorem accusantium voluptas quia quae? Quisquam
              voluptates, voluptate quas, quos, quia voluptatem nesciunt
              doloremque quibusdam quod fugit autem. Quos voluptate, voluptatum,
              quod, quibusdam doloremque iusto exercitationem dolorem
              accusantium voluptas quia quae? Quisquam voluptates, voluptate
              quas, quos, quia voluptatem nesciunt doloremque quibusdam quod
              fugit autem.
            </p>
            <div className="flex justify-between gap-2">
              <div className="w-1/3">
                <ul className="flex justify-between gap-2">
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
              </div>
              <div className="w-1/3">
                <ul className="flex justify-between gap-2">
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
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl mb-6">Project 2</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptate, voluptatum, quod, quibusdam doloremque iusto
              exercitationem dolorem accusantium voluptas quia quae? Quisquam
              voluptates, voluptate quas, quos, quia voluptatem nesciunt
              doloremque quibusdam quod fugit autem. Quos voluptate, voluptatum,
              quod, quibusdam doloremque iusto exercitationem dolorem
              accusantium voluptas quia quae? Quisquam voluptates, voluptate
              quas, quos, quia voluptatem nesciunt doloremque quibusdam quod
              fugit autem.
            </p>
            <div className="flex justify-between gap-2">
              <div className="w-1/3">
                <ul className="flex justify-between gap-2">
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
              </div>
              <div className="w-1/3">
                <ul className="flex justify-between gap-2">
                  <li>
                    <Image src={pythonSvg} alt="js" />
                  </li>
                  <li>
                    <Image src={nodeSvg} alt="typescript" />
                  </li>
                  <li>
                    <Image src={expressSvg} alt="next js" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-my-black to-my-dark flex flex-col justify-center items-center gap-16 px-8 py-20 mb-10 clip-path-mypolygon_t">
        <h1 className="text-4xl text-my-lighten text-center uppercase py-12">
          Contact me
        </h1>
        <p className=" w-2/3 text-center text-2xl">
          Feel free to <CustomUnderline text="contact me" /> if you're looking
          for a communicative web developer who is passionate about creating
          great user experiences or just want to have a chat.
        </p>
        <PersonalCard />
      </section>
      <FloatingButton />
    </div>
  );
}
