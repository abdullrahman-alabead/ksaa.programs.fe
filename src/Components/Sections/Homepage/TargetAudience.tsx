// @ts-nocheck
import { TargetAudienceSection } from "Types/HomepageTypes.ts";
import { useInView } from "react-intersection-observer";

const TargetAudience = (TargetAudienceContent: TargetAudienceSection) => {
  const { targetAudienceHeadline, targetAudienceText, targetAudiences } = TargetAudienceContent;
  const [ref, inView] = useInView({ rootMargin: "-300px" });
  return (
    <section id="audience" className={"flex flex-col items-center"} ref={ref}>
      <h2
        className={`text-green text-2xl font-bold after:centerH after:w-full after:top-full after:translate-y-2 after:h-1 after:bg-green relative mb-12 delay-150 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
      >
        {targetAudienceHeadline}
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: targetAudienceText }}
        className={` w-full text-justify mb-10 delay-300 duration-300 ${!inView && "opacity-0 translate-y-4"}`}
      />
      <div
        className={`w-full flex flex-wrap justify-center gap-y-4 delay-500 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
      >
        {targetAudiences.map(({ name }, i) => {
          return (
            <div className="w-1/5 desc:w-1/4 tab:w-1/2 px-2" key={i}>
              <div className="w-full aspect-square text-center flexCenter text-white bg-green rounded-md px-4 tab:text-xl">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TargetAudience;
