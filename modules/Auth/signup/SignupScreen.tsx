import AuthIntro from "../sharedComponents/AuthIntro";
import SignupForm from "./features/signup-form/SignupForm";
import { signupPageContent } from "../data";
import AuthSplitLayout from "../sharedComponents/AuthSplitLayout";

function SignupScreen() {
  return (
    <AuthSplitLayout
      intro={
        <AuthIntro
          heading="Create an account"
          description="Join us and start your journey"
          steps={signupPageContent.steps}
        />
      }
      form={<SignupForm />}
      reverse
    />
  );
}

export default SignupScreen;
