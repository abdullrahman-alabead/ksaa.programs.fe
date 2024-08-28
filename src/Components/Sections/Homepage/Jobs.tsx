// @ts-nocheck
import { useInView } from "react-intersection-observer";
import { JobsSection } from "Types/HomepageTypes.ts";

const Jobs = (JobsContent: JobsSection) => {
  const { jobsHeadline, jobsImage, jobsText } = JobsContent;
  const [ref, inView] = useInView({ rootMargin: "-100px", fallbackInView: true });
  return (
    <section id="jobs" className={"flex flex-row items-center gap-7 tab:flex-col"} ref={ref}>
      <div className="w-4/10 tab:w-full relative z-10 after:absCover after:bg-green after:opacity-80 after:-z-10 flexCenter aspect-video rounded-lg overflow-hidden">
        <h2 className={`text-3xl font-bold text-white delay-150 duration-300 ${!inView && "opacity-0 translate-y-4"}`}>
          {jobsHeadline}
        </h2>
        <img src={jobsImage} className="absCover object-cover -z-20" />
      </div>
      <p
        className={`w-6/10 flex flex-col justify-around z-20 delay-300 duration-300 tab:w-full tab:text-xl ${
          !inView && "opacity-0 translate-y-4"
        }`}
        dangerouslySetInnerHTML={{ __html: jobsText }}
      />
    </section>
  );
};
export default Jobs;
