'use client';
import Link from 'next/link';
import { useState } from "react";

const SecondaryBtn = ({ href, children, type = "button", formReset }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  const handleClick = (e) => {
    if (type === "reset" && formReset) {
      formReset();
    }
  };

  if (href) {
    return (
      <Link href={href} className="group relative">
        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          className={`
            relative z-10
            text-sm
            px-4 py-1.5
            bg-none text-secondary-blue font-outfit rounded-full
            border border-secondary-blue
            transition-all desktop:duration-300 mobile:duration-75 tablet:duration-75 ease-in-out
            ${isClicked ? "scale-95" : ""}
            hover:bg-white hover:shadow-sm hover:text-secondary-blue hover:-translate-y-1
            mobile:text-xs mobile:px-6 mobile:py-2
            tablet:text-xs tablet:px-6 tablet:py-2
            desktop:text-sm desktop:px-6 desktop:py-2
          `}
        >
          {children}
        </button>

        {/* Hover Effect Layers (from DefaultBtn) */}
        <div className="absolute inset-0 bg-secondary-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity 
        desktop:duration-300 tablet:duration-75 mobile:duration-75 z-0"></div>
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        className={`
          relative z-10
          text-sm
          px-4 py-1.5
          bg-none text-secondary-blue font-outfit rounded-full
          border border-secondary-blue
          transition-all desktop:duration-300 mobile:duration-75 tablet:duration-75 ease-in-out
          ${isClicked ? "scale-95" : ""}
          hover:bg-white hover:shadow-sm hover:text-secondary-blue hover:-translate-y-1
          mobile:text-xs mobile:px-6 mobile:py-2
          tablet:text-xs tablet:px-6 tablet:py-2
          desktop:text-sm desktop:px-6 desktop:py-2
        `}
      >
        {children}
      </button>
    );
  }
};

export default SecondaryBtn;