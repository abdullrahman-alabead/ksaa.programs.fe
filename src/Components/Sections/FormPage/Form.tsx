// @ts-nocheck
import { FormSectionData } from "Types/FormTypes";
import TextInput from "Components/Inputs/TextInput";
import RadioInput from "Components/Inputs/RadioInput";
import MultipleChoiceInput from "Components/Inputs/MultipleChoiceInput";
import FileInput from "Components/Inputs/FIleInput";
import { ArrowOutward, InfoSharp } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRegisteredUser } from "Utils/ContentManagement";

const Form = (FormContent: FormSectionData) => {
  const { introText, formSections, submitButton, failedText, inProgressText, successText } = FormContent;

  // Sending Email Logic
  const [registrationStatus, setRegistrationStatus] = useState("");
  const sendEmail = async (e) => {
    // Show loading layout
    setRegistrationStatus("InProgress");
    // setRegistrationStatus("InProgress");
    e.preventDefault();

    // Registerer Info Object
    const registererInfo: any = {};
    const fd = new FormData();

    // Get registerer info
    const form = e.currentTarget;
    const formInputs = form.querySelectorAll("input[type='text']");

    // Non-Files Inputs Handleing
    Array.from(formInputs).forEach((input) => {
      registererInfo[input.name] = input.value;
      fd.append(input.name, input.value);
    });

    // Files Inputs Handleing
    const filesInputs = form.querySelectorAll("input[type='file']"); // Get Files

    // Loop over the files
    for (const input of Array.from(filesInputs)) {
      if (input.files) {
        for (const file of Array.from(input?.files)) {
          // const fileBuffer = await readFileToBuffer(file); // Read File as buffer
          // registererInfo[input.name] = fileBuffer; // Add to registerer info object
          fd.append(input.name, file);
        }
      }
    }
    createRegisteredUser(fd).then((res) => {
      console.log(res);
      if (res?.status > 199 && res?.status < 300) {
        setRegistrationStatus("Success");
      } else {
        setRegistrationStatus("Failed");
      }
    });
  };
  const navigate = useNavigate();
  return (
    <section className={"flex flex-col items-center bg-[#f9f9f9]"}>
      <div className="mb-16 bg-white py-10 px-[5vw] rounded-md flex items-center gap-8">
        <InfoSharp className="text-green" fontSize="large" />
        <div dangerouslySetInnerHTML={{ __html: introText }} className="text-green text-xl" />
      </div>
      <form onSubmit={sendEmail}>
        {formSections.map(({ formFields, headline }, i) => {
          return (
            <div className="w-full mb-12" key={i}>
              <h2 className="text-green text-2xl font-bold after:centerH after:w-full after:top-full after:translate-y-2 after:h-1 after:bg-green relative mb-12 w-fit mx-auto">
                {headline}
              </h2>
              {formFields.map(({ inputLabel, inputType, choices, sanityName }, i) => {
                if (inputType == "Text") return <TextInput key={i} inputLabel={inputLabel} name={sanityName} />;
                if (inputType == "File") return <FileInput key={i} inputLabel={inputLabel} name={sanityName} />;
                if (inputType == "One of many")
                  return (
                    <RadioInput
                      key={i}
                      inputLabel={inputLabel}
                      name={sanityName}
                      choices={choices?.trim()?.split(", ") || []}
                    />
                  );
                if (inputType == "Multiple Choices")
                  return (
                    <MultipleChoiceInput
                      key={i}
                      inputLabel={inputLabel}
                      name={sanityName}
                      choices={choices?.trim()?.split(", ") || []}
                    />
                  );
              })}
            </div>
          );
        })}
        <button
          type="submit"
          className="flex items-center gap-2 rounded-lg bg-green px-6 py-2 font-semibold text-white shadow-[0_4px_4px_0_#00000050] duration-100 active:scale-95"
        >
          {submitButton}
          <ArrowOutward className="-scale-x-100" />
        </button>
      </form>
      {registrationStatus == "InProgress" && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur z-[9999999] flex flex-col items-center justify-center gap-6">
          <div className="loader" />
          <p className="text-white text-2xl font-semibold">{inProgressText}</p>
        </div>
      )}
      {registrationStatus == "Success" && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur z-[9999999] flex flex-col items-center justify-center gap-6">
          <p className="text-white text-2xl font-semibold">{successText}</p>
          <button className="px-6 py-1 bg-white text-green rounded-lg" onClick={() => navigate("/")}>
            الذهاب الى الرئيسية
          </button>
        </div>
      )}
      {registrationStatus == "Failed" && (
        <div className="fixed left-1/2 animate-fadeInBottomCentered -translate-x-1/2 bottom-5 z-[9999] bg-[#4D0101] text-white text-lg px-6 py-3 rounded-md shadow-xl ">
          {failedText}
        </div>
      )}
    </section>
  );
};
export default Form;
