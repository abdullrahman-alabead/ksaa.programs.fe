export interface LandingSection {
  landingHeadline: string;
  landingSubheadline: string;
  readyText: string;
  registerButtonUrl: string;
  registerButtonText: string;
  landingBackground: string;
}
export interface ProgramSection {
  programInfo: {
    icon: string;
    infoLabel: string;
    infoText: string;
  }[];
}
export interface TargetAudiences {
  name: string;
}
export interface TargetAudienceSection {
  targetAudienceHeadline: string;
  targetAudienceText: string;
  targetAudiences: TargetAudiences[];
}
export interface Goals {
  icon: string;
  goalText: string;
}
export interface GoalsSection {
  goalsHeadline: string;
  goals: Goals[];
}
export interface Outputs {
  output: string;
}
export interface OutputsSection {
  outputsHeadline: string;
  outputs: Outputs[];
  outputsImage: string;
}
export interface Courses {
  title: string;
}
export interface CoursesSection {
  coursesHeadline: string;
  courses: Courses[];
}
export interface JobsSection {
  jobsHeadline: string;
  jobsText: string;
  jobsImage: string;
}
export interface Conditions {
  icon: string;
  text: string;
}
export interface ConditionsSection {
  conditionsHeadline: string;
  conditions: Conditions[];
  registerButtonText: string;
  registerButtonLink: string;
}
export interface Faqs {
  question: string;
  answer: string;
}
export interface FaqSection {
  faqs: Faqs[];
  faqHeadline: string;
}
