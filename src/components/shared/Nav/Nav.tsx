import { scroller } from "react-scroll";

const Nav = () => {
  // Scroll to a specific element
  const scrollTo = (id: string) => {
    // Scroll to sections by id "about", "projects", "contact
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="flex justify-evenly mb-32">
        <button
          onClick={() => scrollTo("about")}
          className="group text-my-white transition duration-300 text-lg"
        >
          About
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-my-bage"></span>
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="group text-my-white transition duration-300 text-lg"
        >
          Projects
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-my-bage"></span>
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="group text-my-white transition duration-300 text-lg"
        >
          Contact
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-my-bage"></span>
        </button>
      </div>
    </>
  );
};

export default Nav;
