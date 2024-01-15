import Image from "next/image";
import cardImage from "@/assets/imgs/card-image.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const PersonalCard = () => {
  return (
    <div className=" bg-gradient-to-b from-my-black to-my-darken flex justify-evenly items-center gap-12 px-12 py-8 rounded-md shadow-lg">
      <div className="flex-1 hidden sm:block">
        <Image
          className="rounded-full shadow-lg border-4 border-my-lighten object-contain hover:scale-105 transform transition-all"
          src={cardImage}
          alt="Personal Card"
          width={150}
          height={150}
        />
      </div>
      <div className="flex-1">
        <div className="mb-6">
          <h3 className=" text-my-lighten font-semibold text-2xl">
            Joel Alves
          </h3>
          <p>Full Stack Developer</p>
        </div>
        <div>
          <ul className="flex flex-col justify-between gap-1">
            <li>
              <a
                className="flex gap-4 justify-start items-center hover:scale-105 transform transition-all "
                href="https://www.linkedin.com/in/atejap05"
                target="_blank"
              >
                <FaLinkedin />
                <i className="fab fa-linkedin">Linkedin</i>
              </a>
            </li>
            <li>
              <a
                className="flex gap-4 justify-start items-center hover:scale-105 transform transition-all"
                href="https://github.com/atejap05"
                target="_blank"
              >
                <FaGithub />
                <i className="fab fa-linkedin">Github</i>
              </a>
            </li>
            <li>
              <a
                className="flex gap-4 justify-start items-center hover:scale-105 transform transition-all"
                href="mailto:atejap@gmail.com"
                target="_blank"
              >
                <IoIosMail />
                <i className="fab fa-linkedin">atejap@gmail.com</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
