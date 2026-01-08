export type Step = {
  id: number;
  title: string;
  description: string;
};

export type AuthStep = {
  id: number;
  title: string;
  description: string;
};

export type AuthIntroContent = {
  heading: string;
  description: string;
};

export type AuthPageContent = {
  intro: AuthIntroContent;
  steps: AuthStep[];
};
