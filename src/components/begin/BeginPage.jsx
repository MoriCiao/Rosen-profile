import { useContext } from "react";
import "./_BeginPage.scss";
import { AppContext } from "../AppProvider";
import Hello from "./Hello";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Hello_II from "./Hello_II";
const BeginPage = () => {
  const { closeView, setCloseView } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      {!closeView && (
        <div className="beginPage absolute inset-0 z-100 h-[100vh] w-full overflow-hidden bg-black">
          <Fade cascade triggerOnce={true} damping={0.5}>
            <div className="roundabout primary absolute -top-[15rem] -right-[15rem] h-[30rem] w-[30rem] rounded-full lg:-top-[25rem] lg:-right-[25rem] lg:h-[50rem] lg:w-[50rem]"></div>

            <div className="roundabout secondary absolute -bottom-[7.5rem] -left-[7.5rem] h-[15rem] w-[15rem] rounded-full lg:-bottom-[25rem] lg:-left-[25rem] lg:h-[50rem] lg:w-[50rem]"></div>

            <div className="roundabout third absolute -bottom-[25rem] left-1/2 h-[30rem] w-[30rem] rounded-full"></div>

            <div className="roundabout fourth absolute top-[10rem] -left-[2.5rem] h-[5rem] w-[5rem] rounded-full lg:-top-[5rem] lg:left-1/4 lg:h-[10rem] lg:w-[10rem]"></div>
            <Hello />
            <Hello_II />
            {/* Button */}
            <button
              className="enterBtn absolute bottom-15 left-1/2 w-30 -translate-x-1/2 rounded border py-2 text-2xl tracking-widest md:bottom-30 md:h-15 md:w-50 md:text-4xl"
              onClick={() => {
                setCloseView(true);
                navigate("/homepage");
              }}
            >
              ENTER
            </button>
          </Fade>
        </div>
      )}
    </>
  );
};

export default BeginPage;
