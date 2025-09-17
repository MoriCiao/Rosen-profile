import { animate, motion, AnimatePresence } from "framer-motion";

const img = {
  homepage: ["", "/Rosen-profile/pictrue/Bg-img.webp"],
};

const BgImg = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg pointer-events-none fixed top-0 left-0 z-[-1] h-screen w-full bg-gradient-to-bl from-slate-900 via-slate-900 to-slate-900 select-none"
    >
      <motion.img
        key={"homepage"}
        initial={{ opacity: 0.6, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="homepage-bg absolute top-0 left-0 h-full brightness-30 sm:w-full sm:object-cover sm:object-top"
        src={img.homepage[1]}
        alt="homepage"
        loading="eager"
      />
    </motion.div>
  );
};

export default BgImg;
