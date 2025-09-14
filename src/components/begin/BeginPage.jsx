import { delay, motion } from "framer-motion";
import { useContext } from "react";
import "./_BeginPage.scss";
import { AppContext } from "../AppProvider";
import Hello from "./Hello";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import Hello_II from "./Hello_II";
const BeginPage = () => {
  const { closeView, setCloseView } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      {!closeView && (
        <div className="beginPage absolute inset-0 z-100 w-full h-[100vh] bg-black overflow-hidden">
          <Fade cascade damping={0.5}>
            <div className="roundabout primary absolute w-[50rem] h-[50rem] rounded-full -top-[25rem] -right-[25rem] "></div>

            <div className="roundabout secondary absolute lg:w-[50rem] lg:h-[50rem] w-[15rem] h-[15rem] rounded-full lg:-bottom-[25rem]  lg:-left-[25rem] -bottom-[7.5rem] -left-[7.5rem] "></div>

            <div className="roundabout third absolute w-[30rem] h-[30rem] rounded-full -bottom-[25rem] left-1/2"></div>

            <div className="roundabout fourth hidden md:block absolute w-[10rem] h-[10rem] rounded-full -top-[5rem] left-1/4"></div>
            <Hello />
            <Hello_II />
            {/* Button */}
            <motion.button
              className="enterBtn absolute md:bottom-30 bottom-15 left-1/2 -translate-x-1/2 md:w-50 w-30 md:h-15 py-2 md:text-4xl text-2xl tracking-widest border rounded"
              onClick={() => {
                setCloseView(true);
                navigate("/homepage");
              }}
            >
              ENTER
            </motion.button>
          </Fade>
        </div>
      )}
    </>
  );
};

export default BeginPage;
