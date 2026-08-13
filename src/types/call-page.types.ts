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
    dates: string;
    location: string;
    format: string;
    submit: string;
  };
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
    phases?: CallSubmissionPhase[];
    rules?: CallParagraph[];
    openScience?: CallParagraph;
    diversity?: CallParagraph;
  };
  formatTitle?: string;
  format?: {
    phase1Title: string;
    phase1Rules: string[];
    phase2Title: string;
    phase2Rules: string[];
  };
  importantInfoTitle?: string;
  importantInfo?: string[];
  reviewTitle: string;
  review: {
    paragraphs: CallParagraph[];
    criteria: CallParagraph[];
  };
  publicationTitle: string;
  publication: {
    paragraphs: CallParagraph[];
    requirements: string[];
    closing: string;
  };
  coordinationTitle: string;
  coordinationKicker: string;
  coordinators: string[];
  tpcTitle?: string;
  tpcStatus?: string;
  tpcMembers?: string[];
  sideLinks: {
    cesi: string;
    sbc: string;
    jems: string;
  };
};