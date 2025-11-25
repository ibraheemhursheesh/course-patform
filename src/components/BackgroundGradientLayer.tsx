// @ts-nocheck

export default function BackgroundGradientLayer() {
  const backgroundHeight = 675;
  const top = String(backgroundHeight - 120);
  return (
    // <div id="layer" className="h-full w-full absolute">
    //   <div id="left">
    //     <div className="hidden md:block h-full w-[1.5px] bg-[#1f2638] absolute left-3.5 xl:left-45"></div>
    //     <div className="hidden md:block h-full w-[1.5px] bg-[#1f2638] absolute left-[calc(30%-15px)] xl:left-[calc(37%-15px)]"></div>
    //     <div className="hidden md:block h-full w-[1.5px] bg-[#1f2638] absolute left-[30%] xl:left-[37%]"></div>
    //   </div>
    //   <div id="right">
    //     <div className="hidden md:block h-full w-[1.5px] bg-[#1f2638] absolute right-3.5 xl:right-45"></div>
    //     <div className="hidden md:block h-full w-[1.5px] bg-[#1f2638] absolute right-[calc(30%-15px)] xl:right-[calc(37%-15px)]"></div>
    //     <div className="hidden md:block h-full w-[1.5px] bg-[#1f2638] absolute right-[30%] xl:right-[37%]"></div>
    //   </div>
    // </div>
    <div id="layer" className={"h-[675px] w-full absolute"}>
      <div
        className={`max-w-[1241px] h-full overflow-hidden mx-auto relative `}
        style={{
          mask: "linear-gradient(90deg, transparent 0%, white 56%, transparent)",
        }}
      >
        {/* <div
          className="absolute w-full h-full"
          style={{ mask: "linear-gradient(90deg, transparent 0%, white)" }}
        ></div> */}
        <div id="vertical" className="w-full h-full">
          {Array(16)
            .fill(0)
            .map((_, index) => (
              <div
                key={index + "d"}
                className={`block h-full w-[1.5px] bg-[#e9e9e9] absolute`}
                style={{ left: 95 * (index + 1) + "px" }}
              ></div>
            ))}
        </div>
        <div id="horizontal">
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <div
                key={index + "d"}
                className={`block h-[1.5px] w-full bg-[#e9e9e9] absolute`}
                style={{ top: 95 * (index + 1) + "px" }}
              ></div>
            ))}
        </div>
      </div>
      <div
        className={`absolute w-full h-30 top-[555px]`}
        style={{ background: "linear-gradient(0deg, white 50%, transparent)" }}
      ></div>
    </div>
  );
}
