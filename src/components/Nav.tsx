
import { useState, useEffect } from "react";

const Nav = () => {
  // const [showDiv, setShowDiv] = useState("w-[0] p-0 transition-all  duration-500 ");
  // const [showIcon, setShowIcon] = useState(" transition-all  duration-500");
  // console.log(showIcon);
  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const windowHeight = window.innerHeight;

  //   if (scrollPosition > windowHeight * 0.8) {
  //     setShowDiv("w-[500px] pe-2 ps-4 transition-all  duration-500");
  //     setShowIcon("hidden  transition-all  duration-500");
  //   } else {
  //     setShowDiv("w-[0] transition-all  duration-500");
  //     setShowIcon("transition-all  duration-500");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className=" z-30 relative">
      <nav className="fixed overflow-hidden py-6 md:py-2 left-1/2 top-8 isolate z-20 flex w-fit -translate-x-1/2 items-center justify-between self-stretch rounded-[20px] bg-neutral-900 pe-2 ps-5 shadow-[0px_3.35px_2.21px_#0000001c,0px_8.05px_5.32px_#00000014,0px_15.15px_10.02px_#00000011,0px_27.03px_17.87px_#0000000e,0px_50.55px_33.42px_#0000000b,0px_121px_80px_#00000008] md:ps-8">
        
        <span className="text-xl py-2 whitespace-nowrap text-white font-bold  pr-7">
        SPAWN RIGHT
        </span>
        {/* <div
          className={` ${showDiv} duration-300 hidden overflow-hidden items-center gap-2 rounded-xl  bg-neutral-800 py-2   focus-within:border-white/10 hover:bg-neutral-700 md:flex`}
        >
          <input
            placeholder="Paste tweet link here..."
            className="w-32 bg-transparent py-2 text-sm text-neutral-10 focus-visible:bg-transparent focus-visible:outline-none active:bg-transparent md:w-80 lg:w-96"
            type="text"
          />
          <button className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-white/10 px-4 text-white hover:bg-white/20">
            <span className="text-sm font-medium">Paste</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
            >
              <path
                d="M4.89142 3.42871C4.0835 3.42871 3.42856 4.16552 3.42856 5.07443V12.0687C3.42856 12.9776 4.0835 13.7144 4.89142 13.7144H11.1086C11.9165 13.7144 12.5714 12.9776 12.5714 12.0687V5.07443C12.5714 4.16552 11.9165 3.42871 11.1086 3.42871"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.52382 4.57136H6.4762C6.05541 4.57136 5.71429 4.27897 5.71429 3.9183V2.93871C5.71429 2.57803 6.05541 2.28564 6.4762 2.28564H9.52382C9.94462 2.28564 10.2857 2.57803 10.2857 2.93871V3.9183C10.2857 4.27897 9.94462 4.57136 9.52382 4.57136Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.71429 8H10.2857"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.71429 10.2856H10.2857"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div> */}
      </nav>
    </div>
  );
};

export default Nav;
