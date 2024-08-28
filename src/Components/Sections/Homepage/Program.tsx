// @ts-nocheck
import { ProgramSection } from "Types/HomepageTypes.ts";
import { useInView } from "react-intersection-observer";

const Program = (ProgramContent: ProgramSection) => {
  const { programInfo } = ProgramContent;
  const [ref, inView] = useInView({ rootMargin: "-300px", fallbackInView: true });
  return (
    <section className={"flex flex-col items-center"} ref={ref}>
      {programInfo.map(({ icon, infoLabel, infoText }, i) => {
        return (
          <div
            className={`flex items-center gap-5 w-full border-[1px] border-green rounded-lg mb-4 px-4 py-2 duration-300 delay${
              i + 1
            } ${!inView && "opacity-0 translate-y-4"}
            tab:flex-col tab:items-center tab:w-full tab:gap-0 tab:py-4`}
          >
            <div
              className="flex items-center gap-4 w-4/10 tab:w-full relative after:centerV after:end-0 after:h-9/10 after:w-0.5 after:opacity-10 after:bg-gray tab:after:centerH tab:after:bottom-0 tab:after:w-full tab:after:h-1 tab:after:top-auto tab:mb-8 tab:after:translate-y-4
            tab:text-center tab:justify-center tab:flex-col"
            >
              <img src={icon} className="w-4 h-4 object-contain" />
              <h3 className="text-green ">{infoLabel}</h3>
            </div>
            <p className="text-justify">{infoText}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Program;
