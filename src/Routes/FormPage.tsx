import { useLoaderData } from "react-router-dom";
import Landing from "Components/Sections/FormPage/Landing";
import Form from "Components/Sections/FormPage/Form";

const FormPage = () => {
  const formPageData = useLoaderData() as any;
  return (
    <div>
      <Landing
        landingSubheadline={formPageData.landingSubheadline}
        landingHeadline={formPageData.landingHeadline}
        landingCoverImage={formPageData.landingCoverImage}
      />
      <Form
        submitButton={formPageData.submitButton}
        formSections={formPageData.formSections}
        introText={formPageData.introText}
        failedText={formPageData.failedText}
        inProgressText={formPageData.inProgressText}
        successText={formPageData.successText}
      />
    </div>
  );
};

export default FormPage;
