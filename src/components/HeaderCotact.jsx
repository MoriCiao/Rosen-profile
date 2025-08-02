import { useScroll } from "framer-motion";
import React, { useState } from "react";

const HeaderContact = () => {
  const [email, setEmail] = useState("");

  const handleEmail = () => {
    setEmail(prev);
  };

  return (
    <div className="HeaderCotact flex  w-fullitems-center justify-end relative bottom-0 ">
      {/* <div className="flex gap-8 w-full justify-end"> */}
      <div className="flex items-center overflow-hidden">
        <p
          className={`email-text ${
            email ? "e-active " : ""
          } items-center text-xl font-bold tracking-wide`}
        >
          Rosen.moriciao@gmail.com
        </p>
      </div>

      <button
        type="button"
        className="emailBtn flex items-center jsutify-center cursor-pointer w-15 h-15"
        onClick={() => setEmail((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24 "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-mail"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </button>

      <button type="button" className="flex items-center jsutify-center">
        <a
          href="https://github.com/MoriCiao"
          target="_blank"
          rel="noopener noreferrer"
          className="w-15 h-15 block flex items-center jsutify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24 "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-github "
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </button>
      {/* </div> */}
    </div>
  );
};

export default HeaderContact;
