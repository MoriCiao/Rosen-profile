import { animate, motion, AnimatePresence } from "framer-motion";

const img = {
  homepage: ["", "/Rosen-profile/pictrue/Bg-img.jpg"],
};

const BgImg = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg fixed top-0 left-0 w-full h-screen
        z-[-1] select-none pointer-events-none bg-gradient-to-bl from-slate-900 via-slate-900 to-slate-900 "
    >
      <motion.img
        key={"homepage"}
        initial={{ opacity: 0.6, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="homepage-bg absolute sm:w-full h-full  sm:object-top sm:object-cover top-0 left-0 brightness-30"
        src={img.homepage[1]}
        alt="homepage"
        loading="lazy"
      />
      <div className="svg-content ">
        <svg>
          <circle cx="340" cy="280" r="200"></circle>
        </svg>
      </div>
    </motion.div>
  );
};

export default BgImg;
