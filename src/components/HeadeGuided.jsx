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
    <nav className="nav relative z-1 h-full w-30 select-none sm:w-40 md:w-80">
      <div
        className={`guided-btn absolute -right-12 flex h-10 items-center justify-center sm:w-10`}
      >
        <button
          className={`relative h-full w-10 scale-125 cursor-pointer transition duration-1000 ${
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
            className="feather feather-log-in absolute top-0 -right-1 h-[2rem] w-[2rem]"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </button>
      </div>

      {/* NAV---- */}
      <ul className="flex flex-col items-center justify-center gap-10">
        {guidedItems &&
          guidedItems.map((i, index) => {
            return (
              <li
                key={index}
                className={`path-li ${
                  click === i.text ? "at-present" : ""
                } flex w-full flex-col items-center py-4 text-center sm:max-h-30 md:max-h-20`}
              >
                <Link
                  className={`block h-full w-full cursor-pointer font-bold tracking-widest sm:text-[1.1rem] md:text-[1.5rem]`}
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
