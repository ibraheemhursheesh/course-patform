// @ts-nocheck

export default function BackgroundGradientLayer({ login }) {
  const backgroundHeight = 675;
  const top = String(backgroundHeight - 120);
  return (
    <div
      id="layer"
      className={"h-[675px] w-full absolute top-[50%] translate-y-[-50%]"}
    >
      {login && (
        <div
          className={`absolute w-full h-30 top-[-15px] z-1`}
          style={{
            background: "linear-gradient(180deg, white 50%, transparent)",
          }}
        ></div>
      )}

      <div
        className={`max-w-[1241px] h-full overflow-hidden mx-auto relative `}
        style={{
          mask: "linear-gradient(90deg, transparent 0%, white 56%, transparent)",
        }}
      >
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
