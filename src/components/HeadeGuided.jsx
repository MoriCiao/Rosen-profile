import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";
import { useContext } from "react";
const HeaderGuided = () => {
  const { handleScroll } = useContext(AppContext);

  const guidedItems = [
    { link: "/Rosen-profile/", name: "#HomePage", text: "首頁" },
    { link: "/Rosen-profile/story", name: "#story", text: "個人經歷" },

    { link: "/Rosen-profile/skills", name: "#skill", text: "技能專長" },
    {
      link: "/Rosen-profile/projects",
      name: "#projects",
      text: "專案展示",
    },
  ];

  return (
    <nav className="select-none w-full">
      <ul className="flex justify-between px-4">
        {guidedItems &&
          guidedItems.map((i, index) => {
            return (
              <li
                key={index}
                className="path-li w-35 h-10 text-center flex items-center"
              >
                <Link
                  className="text-[1.5rem] font-bold block w-full h-full cursor-pointer tracking-widest"
                  to={i.link}
                >
                  {i.text}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
export default HeaderGuided;
