import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";
import { useContext, useState } from "react";
const HeaderGuided = ({ isToggle, setIsToggle }) => {
  const guidedItems = [
    { link: "/homepage", name: "#HomePage", text: "Homepage" },
    { link: "/story", name: "#story", text: "Learning Journey" },

    { link: "/skills", name: "#skill", text: "Skills" },
    {
      link: "/projects",
      name: "#projects",
      text: "Projects",
    },
  ];

  const [click, setClick] = useState("Homepage");

  const handleClick = (i) => {
    setIsToggle(false);
    setClick(i.text);
  };

  return (
    <nav className="nav relative select-none md:w-80 sm:w-40 w-30 h-full z-1">
      <div
        className={`guided-btn absolute -right-12 sm:w-10 h-10 flex items-center justify-center`}
      >
        <button
          className={`relative w-10 h-full cursor-pointer scale-125 transition duration-1000  ${
            isToggle ? "rotate-y-180" : ""
          } `}
          onClick={() => {
            setIsToggle((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24 "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[2rem] h-[2rem] absolute top-0 -right-1 feather feather-log-in "
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </button>
      </div>

      {/* NAV---- */}
      <ul className="flex flex-col justify-center items-center gap-10">
        {guidedItems &&
          guidedItems.map((i, index) => {
            return (
              <li
                key={index}
                className={`path-li ${
                  click === i.text ? "at-present" : ""
                } w-full md:max-h-20 sm:max-h-30 text-center flex flex-col items-center py-4`}
              >
                <Link
                  className={` md:text-[1.5rem] sm:text-[1.1rem] font-bold block w-full h-full cursor-pointer tracking-widest`}
                  to={i.link}
                  onClick={() => handleClick(i)}
                >
                  {i.text}
                </Link>
                <hr className="opacity-50" />
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
export default HeaderGuided;
