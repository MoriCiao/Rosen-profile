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
        <div className="beginPage absolute inset-0 z-100 w-full h-[100vh] bg-black overflow-hidden">
          <Fade cascade triggerOnce={true} damping={0.5}>
            <div className="roundabout primary absolute lg:w-[50rem] lg:h-[50rem] w-[30rem] h-[30rem] rounded-full lg:-top-[25rem] -top-[15rem] lg:-right-[25rem] -right-[15rem]"></div>

            <div className="roundabout secondary absolute lg:w-[50rem] lg:h-[50rem] w-[15rem] h-[15rem] rounded-full lg:-bottom-[25rem]  lg:-left-[25rem] -bottom-[7.5rem] -left-[7.5rem] "></div>

            <div className="roundabout third absolute w-[30rem] h-[30rem] rounded-full -bottom-[25rem] left-1/2"></div>

            <div className="roundabout fourth absolute lg:w-[10rem] lg:h-[10rem] w-[5rem] h-[5rem] rounded-full lg:-top-[5rem] top-[10rem] lg:left-1/4 -left-[2.5rem]"></div>
            <Hello />
            <Hello_II />
            {/* Button */}
            <button
              className="enterBtn absolute md:bottom-30 bottom-15 left-1/2 -translate-x-1/2 md:w-50 w-30 md:h-15 py-2 md:text-4xl text-2xl tracking-widest border rounded"
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
