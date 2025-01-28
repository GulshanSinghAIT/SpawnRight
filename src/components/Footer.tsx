
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";

import { TbDeviceGamepad2 } from "react-icons/tb";
const Footer = () => {
  return (
    <footer className=" w-full rounded-tl-4xl rounded-tr-4xl bg-[#AB38F3] overflow-hidden bg-cover bg-center">
      <div className="relative">
        <div className="noise-background pointer-events-none absolute inset-0 z-0 opacity-5 bg-blend-soft-light"></div>
        <div className="mx-auto mt-2 w-full max-w-6xl flex-col px-2 pt-10 sm:px-12 md:pb-24 xl:pe-4 xl:ps-0">
          <div className="flex gap-2 py-4 justify-start items-center">
            <TbDeviceGamepad2 color="white" size={30} />
            <span className="text-xl text-white font-bold pl-1 pr-7">Spawn Right</span>
          </div>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="flex-shrink-0">
              <p className="mb-2 text-lg font-bold text-white/60 md:text-[22px]">
              Stay informed about the latest esports news and stats!{" "}
              </p>
              <p className="w-fit max-w-md text-xs font-normal leading-[18px] text-white/60 md:text-balance md:text-md">
              Stay updated with the latest stats of your favorite esports players and teams. Our platform offers comprehensive profiles and performance metrics to enhance your gaming experience.
              </p>
            </div>
            <div className="flex md:min-w-72 flex-shrink-0 flex-col gap-4 text-md capitalize text-white/70 md:gap-3">
            <h3 className="-mb-2 font-bold text-white md:mb-2">Company</h3>
              <a href="/legal/privacy">Privacy policy</a>
              <a href="/legal/terms">Terms and conditions</a>
              <a href="/legal/refund">Refund policy</a>
            </div>
            <div className="flex md:min-w-72 flex-shrink-0 flex-col gap-6 text-md capitalize text-white/70 md:gap-2">
              
              <h3 className="-mb-2 font-bold text-white md:mb-2">Contact us</h3>

              <span className="inline-flex items-center  gap-2 sm:justify-start">
                <IoMailOpenOutline />
                <span className="rounded-xl bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white/80">
                  spawnright@gmail.com
                </span>
              </span>
              <span className="inline-flex items-center gap-2 sm:justify-start">
                <FiPhone />
                <span className="rounded-xl bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white/80">
                  +91 956 344 890
                </span>
              </span>
              <span className="inline-flex items-center  gap-2 sm:justify-start">
                <IoLocationOutline />
                <span className="rounded-xl max-w-[15em] bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white/80">
                  Hello guys , i'm under the water, here too much raining, Mumbai 357074
                </span>
              </span>
            </div>
          </div>
          <div className="my-9 h-0.5 w-full bg-black/5"></div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:flex sm:flex-wrap">
              <a
                className="flex  items-center gap-3 rounded-lg bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40"
                target="_blank"
                href="https://www.linkedin.com/in/gulshansingh20/"
              >
                <svg
                  className="size-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM17.6108 6L13.1428 11.0818L18 18H14.4264L11.1544 13.3403L7.0584 18H6L10.6852 12.6716L6 6H9.5736L12.6712 10.4115L16.5524 6H17.6108ZM9.0664 6.78095H7.4404L14.9252 17.2574H16.5516L9.0664 6.78095Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>
                  <div className="line-clamp-1 block text-xs font-semibold text-white/50">
                    Follow us on
                  </div>
                  <span className="block text-sm font-medium text-white">
                    X / Twitter
                  </span>
                </div>
              </a>
              <a
                className="flex min-w-32 items-center gap-3 rounded-lg bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40"
                target="_blank"
                href="https://www.linkedin.com/in/gulshansingh20/"
              >
                <svg
                  className="size-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3253 22.7344C13.7846 23.0885 10.2174 23.0885 6.67669 22.7344C3.81561 22.4483 1.55264 20.1854 1.26653 17.3243C0.912459 13.7836 0.912459 10.2164 1.26653 6.67571C1.55264 3.81463 3.81561 1.55166 6.67669 1.26555C10.2174 0.911483 13.7846 0.911483 17.3253 1.26555C20.1863 1.55166 22.4493 3.81463 22.7354 6.67572C23.0895 10.2164 23.0895 13.7836 22.7354 17.3243C22.4493 20.1854 20.1863 22.4483 17.3253 22.7344ZM12 18C10.8133 18 9.65327 17.6481 8.66658 16.9888C7.67988 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59648 7.75736 7.75736C8.59648 6.91825 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45673C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C17.9982 13.5907 17.3655 15.1158 16.2407 16.2407C15.1158 17.3655 13.5907 17.9982 12 18ZM12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11992 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61216 9.73098 9.17157 9.17157C9.73098 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C15.9988 13.0605 15.577 14.0772 14.8271 14.8271C14.0772 15.577 13.0605 15.9988 12 16ZM18.5 7C18.2033 7 17.9133 6.91203 17.6666 6.7472C17.42 6.58238 17.2277 6.34811 17.1142 6.07403C17.0007 5.79994 16.9709 5.49834 17.0288 5.20736C17.0867 4.91639 17.2296 4.64912 17.4393 4.43934C17.6491 4.22956 17.9164 4.0867 18.2074 4.02882C18.4983 3.97094 18.7999 4.00065 19.074 4.11418C19.3481 4.22771 19.5824 4.41997 19.7472 4.66665C19.912 4.91332 20 5.20333 20 5.5C20 5.89783 19.842 6.27936 19.5607 6.56066C19.2794 6.84197 18.8978 7 18.5 7Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>
                  <div className="line-clamp-1 block text-xs font-semibold text-white/50">
                    Follow us on
                  </div>
                  <span className="block text-sm font-medium text-white">
                    Instagram
                  </span>
                </div>
              </a>

              <a
                className="flex min-w-32 items-center gap-3 rounded-lg bg-black/20 p-2.5 transition-colors hover:bg-black/30 sm:min-w-40"
                target="_blank"
                href="https://www.linkedin.com/in/gulshansingh20/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  fill="white"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>

                <div>
                  <div className="line-clamp-1 block text-xs font-semibold text-white/50">
                    Follow us on
                  </div>
                  <span className="block text-sm font-medium text-white">
                    Linkedin
                  </span>
                </div>
              </a>
            </div>
            <span className="mb-3 inline-block h-fit w-fit flex-shrink-0 text-xs text-white/50 lg:mb-0 lg:ms-auto lg:self-auto lg:text-right">
              Copyright 2025 Gulshan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
