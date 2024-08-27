// @ts-nocheck
import { OutputsSection } from "Types/HomepageTypes.ts";
import { useInView } from "react-intersection-observer";

const Outputs = (OutputsContent: OutputsSection) => {
  const { outputsHeadline, outputs, outputsImage } = OutputsContent;
  const [ref, inView] = useInView({ rootMargin: "-300px" });
  return (
    <section id="outputs" className={`flex flex-row items-center tab:flex-col tab:gap-8`} ref={ref}>
      <div className="w-1/3 h-[30rem] bg-green relative z-10 after:absCover after:bg-black after:opacity-80 after:-z-10 flexCenter tab:w-full tab:h-auto tab:aspect-video tab:rounded-xl">
        <h2 className={`text-3xl font-bold text-white delay-150 duration-300 ${!inView && "opacity-0 translate-y-4"}`}>
          {outputsHeadline}
        </h2>
        <img src={outputsImage} className="absCover object-cover -z-20" />
      </div>
      <div className="h-[30rem]  w-2/3 flex flex-col justify-around z-20 tab:w-full">
        {outputs.map(({ output }, i) => {
          return (
            <div
              className={`flex items-center delay${i + 2} tab:gap-5 duration-300 ${
                !inView && "opacity-0 translate-y-4"
              }`}
            >
              <span className="min-w-10 min-h-10 rounded-full bg-lightGray translate-x-1/2 tab:translate-x-0 " />
              <p className="tab:text-lg">{output}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Outputs;
