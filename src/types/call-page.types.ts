export type CallInline =
  | string
  | { link: string; text: string }
  | { strong: string };

export type CallParagraph = CallInline[];

export interface CallSubmissionPhase {
  title?: string;
  paragraphs?: CallParagraph[];
  rules?: CallParagraph[];
}

export type CallPageData = {
  hero: {
    kicker: string;
    title: string;
    submit: string;
    about: string;
  };
  introTitle: string;
  intro: CallParagraph[];
  targetAudienceTitle?: string;
  targetAudience?: CallParagraph[];
  topicsTitle: string;
  topics: string[];
  topicsNote?: string;
  datesTitle: string;
  dates: [date: string, label: string, description?: string][];
  submissionTitle: string;
  submission: {
    paragraphs: CallParagraph[];
    rulesIntro?: CallParagraph;
    phases?: CallSubmissionPhase[];
    rules?: CallParagraph[];
    openScience?: CallParagraph;
    diversity?: CallParagraph;
  };
  importantInfoTitle?: string;
  importantInfoSubtitle?: CallParagraph[];
  importantInfoParagraphs?: CallParagraph[];
  formatTitle?: string;
  format?: {
    phase1Title: string;
    phase1Rules: string[];
    phase2Title: string;
    phase2Rules: string[];
  };
  reviewTitle: string;
  review: {
    paragraphs: CallParagraph[];
    criteria: CallParagraph[];
    publication?: CallParagraph[];
  };
  publicationTitle?: string;
  publication?: {
    paragraphs: CallParagraph[];
    requirements: string[];
    closing: string;
  };
  coordinationTitle: string;
  coordinationKicker: string;
  coordinators: {name: string; institution: string}[];
  tpcTitle?: string;
  tpcStatus?: string;
  tpcMembers?: string[];
  sideLinks: {
    cesi: string;
    sbc: string;
    jems: string;
  };
  tocTitle?: string;
  toc?: {id: string, title: string}[];
};