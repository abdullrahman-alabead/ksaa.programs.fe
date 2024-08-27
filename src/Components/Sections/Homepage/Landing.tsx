// @ts-nocheck
import { ArrowOutward } from "@mui/icons-material";
import LocalizedLink from "Components/Common/LocalizedLink";
import { useInView } from "react-intersection-observer";
import { LandingSection } from "Types/HomepageTypes.ts";

const Landing = (LandingContent: LandingSection) => {
  const { landingHeadline, landingSubheadline, readyText, registerButtonText, registerButtonUrl, landingBackground } =
    LandingContent;
  const [ref, inView] = useInView();
  return (
    <section
      className={
        "flex flex-col items-center relative justify-center h-[80vh] after:absCover after:-z-10 after:bg-green after:opacity-90 after:mix-blend-multiply"
      }
      ref={ref}
    >
      <h1 className={`text-3xl font-bold mb-4 text-white duration-300 ${!inView && "opacity-0 translate-y-4"}`}>
        {landingHeadline}
      </h1>
      <h2
        className={`text-2xl font-bold mb-8 text-white duration-300 delay-150 ${!inView && "opacity-0 translate-y-4"}`}
      >
        {landingSubheadline}
      </h2>

      <div
        className={`flex justify-center items-center gap-4 delay-300 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-sm text-white">{readyText}</p>
        <LocalizedLink
          href={registerButtonUrl}
          className="flex items-center gap-2 rounded-lg bg-black px-6 py-2 font-semibold text-white shadow-[0_4px_4px_0_#00000050] duration-100 active:scale-95"
        >
          {registerButtonText}
          <ArrowOutward className="-scale-x-100" />
        </LocalizedLink>
      </div>
      <img src={landingBackground} className="absCover object-cover -z-20" />
    </section>
  );
};
export default Landing;
