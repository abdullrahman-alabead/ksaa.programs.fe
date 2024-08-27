// @ts-nocheck
import { FaqSection } from "Types/HomepageTypes.ts";
import { faqs } from "StaticContent/Content.json";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Faq = (FaqContent: FaqSection) => {
  const { faqs, faqHeadline } = FaqContent;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  const [ref, inView] = useInView();
  return (
    <section className={"flex flex-col items-center"} ref={ref}>
      <h2
        className={`text-green text-2xl font-bold after:centerH after:w-full after:top-full after:translate-y-2 after:h-1 after:bg-green relative mb-16 delay-150 duration-300 ${
          !inView && "opacity-0 translate-y-4"
        }`}
        ref={ref}
      >
        {faqHeadline}
      </h2>
      {faqs.map(({ answer, question }, i) => {
        return (
          <div
            className={`w-full mb-6 duration-500 overflow-hidden ${
              activeQuestionIndex == i ? "max-h-[20rem]" : "max-h-10"
            }`}
          >
            <div
              onClick={() => setActiveQuestionIndex(i)}
              className="h-10 w-full border-b-2 border-b-gray border-opacity-30 flex items-center justify-between font-semibold cursor-pointer mb-3"
            >
              <div dangerouslySetInnerHTML={{ __html: question }} />
              <KeyboardArrowDown className="text-green" fontSize="small" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: answer }} className="ps-4 text-sm"></div>
          </div>
        );
      })}
    </section>
  );
};
export default Faq;
