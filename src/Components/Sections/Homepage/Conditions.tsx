// @ts-nocheck
import { ConditionsSection } from "Types/HomepageTypes.ts";
import ConditionCard from "Components/Cards/ConditionCard";
import { ArrowOutward } from "@mui/icons-material";
import LocalizedLink from "Components/Common/LocalizedLink";
import { useInView } from "react-intersection-observer";
const Conditions = (ConditionsContent: ConditionsSection) => {
  const { conditionsHeadline, registerButtonLink, registerButtonText, conditions } = ConditionsContent;
  const [ref, inView] = useInView({ rootMargin: "-200px", fallbackInView: true });
  return (
    <section ref={ref} id="conditions" className={"flex flex-col items-center bg-black opacity-90"}>
      <h2
        className={`text-white text-2xl font-bold after:centerH after:w-full after:top-full after:translate-y-2 after:h-1 after:bg-green relative mb-12 delay-150 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        } `}
      >
        {conditionsHeadline}
      </h2>
      <div
        className={`w-full flex flex-wrap justify-center gap-y-4 mb-12 delay-300 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
      >
        {conditions.map(({ icon, text }, i) => {
          return (
            <div className="w-1/2 tab:w-full px-3" key={i}>
              <ConditionCard icon={icon} text={text} />
            </div>
          );
        })}
      </div>
      <LocalizedLink
        href={registerButtonLink}
        className={`flex items-center gap-2 rounded-lg bg-green px-6 py-2 font-semibold text-white shadow-[0_4px_4px_0_#00000050] active:scale-95 delay-500 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
      >
        {registerButtonText}
        <ArrowOutward className="-scale-x-100" />
      </LocalizedLink>
    </section>
  );
};
export default Conditions;
