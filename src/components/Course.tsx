// @ts-nocheck
// eslint-disabled
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";
import Pieces from "./svgs/Pieces";
import Keyboard from "./svgs/Keyboard";
import FirstCourseCard from "./FirstCourseCard";

// import { Kaisei_Tokumin } from "next/font/google";
import AnimationsSvg from "./svgs/AnimationsSvg";

// const kaiseiFont = Kaisei_Tokumin({
//   subsets: ["latin"],
//   weight: "400"
// })

export default function Course({ insideDashboard, course }) {
  // console.log(course.style);

  const isReactCourse = course.slug === "react-from-scratch";

  const skillClassNames = [
    "text-[#007b83] bg-[#e4f7fb]",
    "text-[#a50e0e] bg-[#fef7e0]",
    "text-[#9c166b] bg-[#fde7f3]",
    "text-[#0d652d] bg-[#e6f4ea]",
  ];
  return (
    <li
      className="relative rounded-xl bg-cover border border-zinc-300 overflow-hidden bg-white text-black nth-[2]:mt-7.5 grid:nth-[2]:mt-0"
      key={course.id}
    >

      {isReactCourse ? (
   
  <div className="relative aspect-video overflow-hidden">  

        <Pieces />
  
</div>
      ) : (
          <div className="relative aspect-video">
 
              <AnimationsSvg />
          </div>
      )}

      <div className="relative p-4 pb-10">
        <h2 className="text-3xl font-bold mt-3">{course.title}</h2>
        <p className="mt-2 text-zinc-700">{course.shortDescription}</p>

        {!insideDashboard && (
          <>
            <p className="text-base max-w-2xl mt-5">{course.description}</p>
            {/* <h3 className="mt-3">Tech stack:</h3>
            <ul className="flex gap-2 mt-1">
              {course.techStack.map((tech, index) => (
                <li
                  className={`text-sm px-2 py-1 rounded-sm font-medium ${skillClassNames[index]}`}
                  key={tech}
                >
                  {tech}
                </li>
              ))}
            </ul> */}
          </>
        )}

        <div className="flex flex-wrap gap-5 mt-8 mb-5">
          <div className="flex gap-3">
            <Image
              alt="Instructor Avatar"
              className="rounded-full shrink-0 size-10.5"
              src="/avatar2.png"
              width={50}
              height={50}
            />
            <div>
              <p className="text-zinc-700 text-xs lg:text-sm">Taught by</p>
              <p className="text-sm lg:text-base">{course.taughtBy}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Clock className="hidden sm:block" size={30} />
            <div>
              <p className="text-zinc-700 text-xs lg:text-sm">Length</p>
              <p className="text-sm lg:text-base">{course.length}</p>
            </div>
          </div>
        </div>
        {insideDashboard && (
          <Link
            className="rounded-full items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-zinc-800 mt-5 block w-full max-w-sm mx-auto h-10 px-4 has-[>svg]:px-3 text-center leading-10"
            href={"/" + course.slug}
          >
            Watch now
          </Link>
        )}
      </div>
    </li>
  );
}





// {isReactCourse ? (
//   <>
//     {/* <div className="w-sm aspect-video bg-white rounded-lg border relative overflow-hidden">
//       {Array(27)
//         .fill(0)
//         .map((_, index) => (
//           <div
//             key={index + "d"}
//             className={`block h-full w-[1.5px] bg-zinc-100   absolute`}
//             style={{ left: 15 * (index + 1) + "px" }}
//           ></div>
//         ))}
//       {Array(27)
//         .fill(0)
//         .map((_, index) => (
//           <div
//             key={index + "d"}
//             className={`block w-full h-[1.5px] bg-zinc-100   absolute`}
//             style={{ top: 15 * (index + 1) + "px" }}
//           ></div>
//         ))}
//     </div> */}
//     <div className="w-full aspect-video rounded-sm p-3 relative overflow-hidden bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 @container">
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 250 150"
//         
//         // style={{ opacity: 1 }}
//         style={{
//           fill: "hsl(388, 50%, 50%)",
//           stroke: "hsl(388, 50%, 30%)",
//         }}
//       >
//         <g
//           id="cube7"
//           className="block2"
//           
//           data-svg-origin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,50,78)"
//           style={{
//             "-webkit-translate": "none",
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             "-webkit-transform-origin": "0px 0px",
//             "-ms-transform-origin": "0px 0px",
//             "transform-origin": "0px 0px",
//           }}
//         >
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(30)"
//             
//           />
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(-30) translate(21 24.3)"
//             
//           />
//           <rect
//             width={21}
//             height={21}
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//             
//           />
//         </g>
//         <g
//           id="cube8"
//           className="block2"
//           
//           data-svg-origin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,50,54)"
//           style={{
//             "-webkit-translate": "none",
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             "-webkit-transform-origin": "0px 0px",
//             "-ms-transform-origin": "0px 0px",
//             "transform-origin": "0px 0px",
//             opacity: "0",
//           }}
//         >
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(30)"
//             
//           />
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(-30) translate(21 24.3)"
//             
//           />
//           <rect
//             width={21}
//             height={21}
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//             
//           />
//         </g>
//         <g
//           id="cube9"
//           className="block2"
//           
//           data-svg-origin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,71,90)"
//           style={{
//             "-webkit-translate": "none",
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             "-webkit-transform-origin": "0px 0px",
//             "-ms-transform-origin": "0px 0px",
//             "transform-origin": "0px 0px",
//             opacity: "1",
//           }}
//         >
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(30)"
//             
//           />
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(-30) translate(21 24.3)"
//             
//           />
//           <rect
//             width={21}
//             height={21}
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//             
//           />
//         </g>
//         <g
//           id="cube10"
//           className="block2"
//           
//           data-svg-origin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,29,90)"
//           style={{
//             "-webkit-translate": "none",
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             "-webkit-transform-origin": "0px 0px",
//             "-ms-transform-origin": "0px 0px",
//             "transform-origin": "0px 0px",
//             opacity: "1",
//           }}
//         >
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(30)"
//             
//           />
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(-30) translate(21 24.3)"
//             
//           />
//           <rect
//             width={21}
//             height={21}
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//             
//           />
//         </g>
//       </svg>
//       {/* <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 250 150"
//         
//         style={{
//           fill: "hsl(388, 50%, 50%)",
//           stroke: "hsl(388, 50%, 30%)",
//         }}
//       >
//         <g
//           id="cube5"
//           className="block1"
//           
//           data-svg-origin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,129,66)"
//           style={{
//             "-webkit-translate": "none",
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             "-webkit-transform-origin": "0px 0px",
//             "-ms-transform-origin": "0px 0px",
//             "transform-origin": "0px 0px",
//             opacity: "1",
//           }}
//         >
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(30)"
//             
//           />
//           <rect
//             width={21}
//             height={24}
//             transform="skewY(-30) translate(21 24.3)"
//             
//           />
//           <rect
//             width={21}
//             height={21}
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//             
//           />
//         </g>
   
//       </svg> */}
//       {/* <svg
//         width="80%"
//         height="auto"
//         viewBox="0 0 250 150"
//         className=" absolute -bottom-[20%] -right-[32%] opacity-50 rotate-14"
//         style={{
//           fill: "hsl(388, 50%, 50%)",
//           stroke: "hsl(388, 50%, 30%)",
//         }}
//       >
//         <g
//           id="cube7"
//           dataSvgOrigin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,50,78)"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transformOrigin: "0px 0px",
//           }}
//         >
//           <rect width="21" height="24" transform="skewY(30)"></rect>
//           <rect
//             width="21"
//             height="24"
//             transform="skewY(-30) translate(21 24.3)"
//           ></rect>
//           <rect
//             width="21"
//             height="21"
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//           ></rect>
//         </g>
//         <g
//           id="cube8"
//           dataSvgOrigin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,50,54)"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transformOrigin: "0px 0px",
//           }}
//         >
//           <rect width="21" height="24" transform="skewY(30)"></rect>
//           <rect
//             width="21"
//             height="24"
//             transform="skewY(-30) translate(21 24.3)"
//           ></rect>
//           <rect
//             width="21"
//             height="21"
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//           ></rect>
//         </g>
//         <g
//           id="cube9"
//           dataSvgOrigin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,71,90)"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transformOrigin: "0px 0px",
//           }}
//         >
//           <rect width="21" height="24" transform="skewY(30)"></rect>
//           <rect
//             width="21"
//             height="24"
//             transform="skewY(-30) translate(21 24.3)"
//           ></rect>
//           <rect
//             width="21"
//             height="21"
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//           ></rect>
//         </g>
//         <g
//           id="cube10"
//           dataSvgOrigin="0 -12.027886390686035"
//           transform="matrix(1,0,0,1,29,90)"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transformOrigin: "0px 0px",
//           }}
//         >
//           <rect width="21" height="24" transform="skewY(30)"></rect>
//           <rect
//             width="21"
//             height="24"
//             transform="skewY(-30) translate(21 24.3)"
//           ></rect>
//           <rect
//             width="21"
//             height="21"
//             transform="scale(1.41,.81) rotate(45) translate(0 -21)"
//           ></rect>
//         </g>
//       </svg> */}
//       {/* <div className="absolute -top-2 -right-15 overflow-hidden">
//         <svg
//           className="size-120"
//           viewBox="0 0 32 32"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           
//         >
//           <g
//             id="SVGRepo_bgCarrier"
//             stroke-width="0"
//             
//           ></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             
//           ></g>
//           <g id="SVGRepo_iconCarrier" >
//             {" "}
//             <path
//               d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
//               fill="#53C1DE"
//               
//             ></path>{" "}
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
//               fill="#53C1DE"
//               
//             ></path>{" "}
//           </g>
//         </svg>
//       </div>
//       <div className="relative">
//         <p className="text-6xl font-semibold"> The Joy of React</p>
//         <p className="text-xl w-sm">
//           Learn how to build amazing stuff with React in this new
//           interactive online course.
//         </p>
//       </div> */}
//     </div>
//   </>
// ) : (
//   // <img
//   //   src="/react2.webp"
//   //   alt="200"
//   //   className="block object-cover aspect-video"
//   // />
//   // <div className="w-full aspect-video bg-zinc-100 relative">
//   //   <svg
//   //     viewBox="0 0 32 32"
//   //     className="size-12.5"
//   //     fill="none"
//   //     xmlns="http://www.w3.org/2000/svg"
//   //     
//   //   >
//   //     <g
//   //       id="SVGRepo_bgCarrier"
//   //       stroke-width="0"
//   //       
//   //     ></g>
//   //     <g
//   //       id="SVGRepo_tracerCarrier"
//   //       stroke-linecap="round"
//   //       stroke-linejoin="round"
//   //       
//   //     ></g>
//   //     <g id="SVGRepo_iconCarrier" >
//   //       {" "}
//   //       <path
//   //         d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
//   //         fill="#ddd"
//   //         
//   //       ></path>{" "}
//   //       <path
//   //         fill-rule="evenodd"
//   //         clip-rule="evenodd"
//   //         d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
//   //         fill="#53C1DE"
//   //         
//   //       ></path>{" "}
//   //     </g>
//   //   </svg>

//   //   <div className="absolute left-6 bottom-6">
//   //     <p className="text-4xl max-w-lg font-extrabold">Framer Motion is</p>
//   //     <p className="text-4xl max-w-lg font-extrabold">now independant.</p>
//   //     <p className="text-4xl max-w-lg font-extrabold">
//   //       Introduction Motion.
//   //     </p>
//   //   </div>
//   // </div>
//   <>
//     {/* <FirstCourseCard />
//     <Image
//       quality={100}
//       priority={true}
//       src="/chat.png"
//       alt="well"
//       width={200}
//       height={100}
//       className="block w-full aspect-video"
//     /> */}
//     {/* <img
//       src="/react2.webp"
//       alt="200"
//       className="block object-cover aspect-video"
//     /> */}
//     {/* <img
//       src="/framer.png"
//       alt="200"
//       className="block object-cover w-full aspect-video"
//     /> */}
//     <div className="relative aspect-video">
//       <svg
//         className="card__bg"
//         aria-hidden="true"
//         
//         style={{
//           color: "currentColor",
//           display: "block",
//           position: "absolute",
//           inset: "0",
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         <g
//           fill="none"
//           stroke="#ddd"
//           strokeLinecap="round"
//           strokeWidth="13"
//         >
//           <path d="M 38.058 7.993 C 28.089 11.316 0.838 21.446 -9.778 21.446" />
//           <path d="M 54.502 25.931 C 36.784 32.374 9.564 33.659 -9.031 34.9" />
//           <path d="M 40.3 44.617 C 32.596 47.185 20.108 49.102 12.645 49.102 C 11.724 49.102 -11.273 49.849 -11.273 49.849" />
//           <path d="M 70.197 55.828 C 44.513 59.371 10.302 63.302 -15.01 63.302" />
//           <path d="M 38.805 78.251 C 29.458 78.251 19.421 80.494 10.403 80.494 C 9.638 80.494 -11.273 81.241 -11.273 81.241" />
//           <path d="M 146.436 76.009 C 98.755 87.302 33.852 89.444 -15.011 93.2" />
//           <path d="M 92.62 96.191 C 64.188 99.928 19.045 106.654 -12.021 106.654" />
//           <path d="M 127.002 110.623 C 86.185 118.524 29.402 125.223 -11.273 121.835" />
//           <path d="M 123.265 126.33 C 81.9 132.793 33.25 138.54 -9.031 141.279" />
//           <path d="M 129.245 137.299 C 105.14 140.135 80.943 144.406 56.743 146.268 C 35.936 147.869 15.883 150.753 -5.294 150.753" />
//           <path d="M 144.193 148.51 C 104.716 148.51 68.301 160.469 28.341 160.469 C 18.874 160.469 8.423 162.712 -0.062 162.712 C -0.691 162.712 -9.031 162.712 -9.031 162.712" />
//           <path d="M 138.214 168.691 C 86.225 174.993 43.197 175.802 -9.03 179.156" />
//           <path d="M 138.961 185.135 C 108.316 187.377 77.638 189.2 47.027 191.862 C 27.053 193.599 12.579 197.094 -7.535 197.094" />
//           <path d="M 192.029 200.083 C 138.506 205.436 85.211 206.11 31.331 206.81 C 14.889 207.024 5.881 207.212 -10.526 208.305" />
//           <path d="M 148.678 215.032 C 110.861 217.395 72.943 217.687 35.068 218.769 C 17.607 219.268 6.926 222.506 -10.526 222.506" />
//           <path d="M 187.545 234.465 C 164.527 234.465 142.438 237.455 120.275 237.455 C 75.157 237.455 32.388 235.96 -11.273 235.96" />
//           <path d="M 195.766 254.646 C 142.507 254.646 90.644 258.383 35.815 258.383 C 23.34 258.383 -12.021 257.636 -12.021 257.636" />
//           <path d="M 180.818 274.079 C 141.514 274.079 99.399 278.564 61.228 278.564 C 36.924 278.564 14.485 276.322 -7.536 276.322" />
//           <path d="M 210.715 289.028 C 204.148 289.875 157.957 296.233 142.698 297.25 C 90.954 300.699 39.787 298.087 -10.525 298.745" />
//           <path d="M 229.401 295.755 C 188.963 295.755 159.401 307.714 104.579 308.461 C 64.791 309.003 28.292 309.956 -11.273 309.956" />
//           <path d="M 218.189 311.202 C 210.762 311.202 181.915 317.374 162.132 321.666 C 148.352 324.656 113.549 327.646 113.549 327.646" />
//         </g>
//       </svg>
//     </div>
//   </>
// )}