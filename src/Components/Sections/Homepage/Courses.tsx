// @ts-nocheck
import { CoursesSection } from "Types/HomepageTypes.ts";
import CourseCard from "Components/Cards/CourseCard";
import { useInView } from "react-intersection-observer";

const Courses = (CoursesContent: CoursesSection) => {
  const { coursesHeadline, courses } = CoursesContent;
  const [ref, inView] = useInView({ rootMargin: "-200px", fallbackInView: true });
  return (
    <section id="courses" className={"flex flex-col items-center"} ref={ref}>
      <h2
        className={`text-green text-2xl font-bold after:centerH after:w-full after:top-full after:translate-y-2 after:h-1 after:bg-green relative mb-16 delay-150 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
        ref={ref}
      >
        {coursesHeadline}
      </h2>
      <div
        className={`w-full flex flex-wrap justify-center gap-y-8 delay-300 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
      >
        {courses.map(({ title }, i) => {
          return (
            <div className="w-1/4 desc:w-1/3 tab:w-1/2 px-3" key={i}>
              <CourseCard index={i + 1} title={title} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Courses;
