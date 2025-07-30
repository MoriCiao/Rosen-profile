import React from "react";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";

const HeaderFormLabel = ({ htmlFor, labeltext }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="w-full flex items-center justify-end tracking-widest col-start-1 col-span-2"
    >
      {labeltext}
    </label>
  );
};

const HeaderFormInput = (
  { id, name, type, placeholder, onChange, className },
  ref
) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      ref={ref}
      required
    />
  );
};

const itemStyle = "grid grid-cols-6 gap-4 pr-4 w-full";

const HeaderContact = () => {
  return (
    <div className="HeaderCotact flex flex-col items-center justify-center w-auto py-8  px-12 relative bottom-0">
      <form
        action="https://formsubmit.co/rosen.moriciao@gmail.com"
        method="POST"
        className="h-auto px-8 pt-4 pb-8 backdrop-blur-md text-white flex flex-col gap-4 items-center justify-center"
      >
        <h3 className="text-[2rem] text-center tracking-wide">Contact me</h3>
        <div className={`${itemStyle}`}>
          <HeaderFormLabel htmlFor={null} labeltext="My Email：" />
          <strong>rosen.moriciao@gmail.com</strong>
        </div>
        <div className={`${itemStyle}`}>
          <HeaderFormLabel htmlFor="name" labeltext="Your Name：" />
          <HeaderFormInput
            id="name"
            name="name"
            type="text"
            placeholder="Your name or Business units"
            //   onChange={HandleChangeName}
            className="indent-[2.5%] rounded-md bg-black/20 col-start-3 col-span-4 w-80 h-[2rem] tracking-wide"
            //   ref={inputElement}
          />
        </div>
        <div className={`${itemStyle}`}>
          <HeaderFormLabel htmlFor="email" labeltext="Your Email：" />
          <HeaderFormInput
            id="email"
            name="Email"
            type="email"
            placeholder="Email Address"
            className="indent-[2.5%] rounded-md bg-black/20 col-start-3 col-span-4 w-80 h-[2rem] tracking-wide"
          />
        </div>
        <div className={`${itemStyle}`}>
          <HeaderFormLabel htmlFor="message" labeltext="Message：" />

          <textarea
            className="indent-[2.5%] resize-none rounded-md bg-black/20 col-start-3 col-span-4 w-80 h-[4rem] tracking-wide"
            name="message"
            id="message"
            placeholder="Your Message ..."
            required
          ></textarea>
        </div>

        <div className="">
          <motion.button
            whileTap={{
              backgroundColor: "rgb(255, 177, 27)",
            }}
            className="bg-sky-900 px-2 py-1 rounded-md uppercase tracking-widest"
            type="submit"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default HeaderContact;
