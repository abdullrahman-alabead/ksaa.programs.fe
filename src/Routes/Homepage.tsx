import { useLoaderData } from "react-router-dom";
import Landing from "Components/Sections/Homepage/Landing";
import Program from "Components/Sections/Homepage/Program";
import TargetAudience from "Components/Sections/Homepage/TargetAudience";
import Goals from "Components/Sections/Homepage/Goals";
import Outputs from "Components/Sections/Homepage/Outputs";
import Courses from "Components/Sections/Homepage/Courses";
import Jobs from "Components/Sections/Homepage/Jobs";
import Conditions from "Components/Sections/Homepage/Conditions";
import Faq from "Components/Sections/Homepage/Faq";

const Homepage = () => {
  const homepageData = useLoaderData() as any;
  return (
    <div>
      <Landing
        landingHeadline={homepageData.landingHeadline}
        landingSubheadline={homepageData.landingSubheadline}
        readyText={homepageData.readyText}
        registerButtonUrl={homepageData.registerButtonUrl}
        registerButtonText={homepageData.registerButtonText}
        landingBackground={homepageData.landingBackground}
      />
      <Program programInfo={homepageData.programInfo} />
      <TargetAudience
        targetAudienceHeadline={homepageData.targetAudienceHeadline}
        targetAudienceText={homepageData.targetAudienceText}
        targetAudiences={homepageData.targetAudiences}
      />
      <Goals goalsHeadline={homepageData.goalsHeadline} goals={homepageData.goals} />
      <Outputs
        outputsHeadline={homepageData.outputsHeadline}
        outputs={homepageData.outputs}
        outputsImage={homepageData.outputsImage}
      />
      <Courses coursesHeadline={homepageData.coursesHeadline} courses={homepageData.courses} />
      <Jobs
        jobsHeadline={homepageData.jobsHeadline}
        jobsText={homepageData.jobsText}
        jobsImage={homepageData.jobsImage}
      />
      <Conditions
        conditionsHeadline={homepageData.conditionsHeadline}
        conditions={homepageData.conditions}
        registerButtonText={homepageData.registerButtonText}
        registerButtonLink={homepageData.registerButtonUrl}
      />
      <Faq faqs={homepageData.faqs} faqHeadline={homepageData.faqHeadline} />
    </div>
  );
};

export default Homepage;
