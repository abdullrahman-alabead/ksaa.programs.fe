// @ts-nocheck
import { GoalsSection } from "Types/HomepageTypes.ts";
import GoalCard from "Components/Cards/GoalCard";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Goals = (GoalsContent: GoalsSection) => {
  const { goals, goalsHeadline } = GoalsContent;
  const [ref, inView] = useInView({ rootMargin: "-200px" });

  return (
    <section
      id="goals"
      className={`flex flex-col items-center bg-green  ${window.innerWidth < 768 && "px-0"}`}
      ref={ref}
      style={{ direction: "ltr" }}
    >
      <h2
        className={`text-white text-2xl font-bold after:centerH after:w-full after:top-full after:translate-y-2 after:h-1 after:bg-green relative mb-12 delay-150 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
      >
        {goalsHeadline}
      </h2>
      {window.innerWidth > 768 ? (
        <div
          className={`w-full flex flex-wrap justify-center gap-y-4 mb-8 delay-300 duration-300 ${
            !inView && "opacity-0 translate-y-4"
          }`}
        >
          {goals.map(({ icon, goalText }, i) => {
            return (
              <div className="w-1/3 desc:w-1/2 px-3" key={i}>
                <GoalCard icon={icon} text={goalText} />
              </div>
            );
          })}
        </div>
      ) : (
        <Swiper loop slidesPerView={2} centeredSlides spaceBetween={40} className="w-screen">
          {goals.map(({ icon, goalText }, i) => {
            return (
              <SwiperSlide key={i}>
                <GoalCard icon={icon} text={goalText} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};
export default Goals;
