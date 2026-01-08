import { AuthPageContent } from "./types";

export const loginPageContent: AuthPageContent = {
  intro: {
    heading: "Get started with us",
    description: "Complete all these easy steps to register your account",
  },
  steps: [
    {
      id: 1,
      title: "Enter your credentials",
      description: "Use your email and password to sign in to your account.",
    },
    {
      id: 2,
      title: "Secure authentication",
      description:
        "Your information is protected with industry-standard security.",
    },
    {
      id: 3,
      title: "Access your dashboard",
      description:
        "Get started with managing your freelance projects and tasks.",
    },
  ],
};

export const signupPageContent: AuthPageContent = {
  intro: {
    heading: "Create your account",
    description: "Join us and start managing your freelance work.",
  },
  steps: [
    {
      id: 1,
      title: "Fill your details",
      description: "Provide your personal information.",
    },
    {
      id: 2,
      title: "Verify your email",
      description: "Confirm your email address.",
    },
    {
      id: 3,
      title: "Get started",
      description: "Access your dashboard immediately.",
    },
  ],
};
