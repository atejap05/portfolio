import underlineSVG from "../../assets/svg/underlineYellow.svg";

import Image from "next/image";

type CustomUnderlineProps = {
  text: string;
};

const CustomUnderline = ({ text }: CustomUnderlineProps) => {
  return (
    <span className="relative ml-2">
      <Image
        className="absolute -bottom-2 left-2"
        src={underlineSVG}
        alt="Picture of the author"
        width={300}
        height={30}
      />
      <span>{text}</span>
    </span>
  );
};

export default CustomUnderline;
