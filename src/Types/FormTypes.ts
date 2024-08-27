export interface LandingSection {
  landingHeadline: string;
  landingCoverImage: string;
  landingSubheadline: string;
}
export interface FormFields {
  inputLabel: string;
  inputType: string;
  sanityName: string;
}
export interface FormSection {
  headline: string;
  formFields: FormFields[];
}

export interface FormSectionData {
  formSections: FormSection[];
  introText: string;
  submitButton: string;
  inProgressText: string;
  successText: string;
  failedText: string;
}
