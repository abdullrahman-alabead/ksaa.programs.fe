// @ts-nocheck
import { useInView } from "react-intersection-observer";
import { LandingSection } from "Types/FormTypes";

const Landing = (LandingContent: LandingSection) => {
  const { landingCoverImage, landingHeadline, landingSubheadline } = LandingContent;
  const [ref, inView] = useInView();
  return (
    <section
      className={
        "flex flex-col items-center relative justify-center h-[80vh] pt-[8rem] after:absCover after:-z-10 after:bg-green after:opacity-90 after:mix-blend-multiply"
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

      <img src={landingCoverImage} className="absCover object-cover -z-20" />
    </section>
  );
};
export default Landing;
