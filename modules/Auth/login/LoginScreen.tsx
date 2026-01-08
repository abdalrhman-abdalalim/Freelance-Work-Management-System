import AuthIntro from "../sharedComponents/AuthIntro";
import LoginForm from "./features/login-form/LoginForm";
import { loginPageContent } from "../data";
import AuthSplitLayout from "../sharedComponents/AuthSplitLayout";

function LoginScreen() {
  return (
    <AuthSplitLayout
      intro={
        <AuthIntro
          heading="Welcome back!"
          description="Sign in to access your account and continue your work"
          steps={loginPageContent.steps}
        />
      }
      form={<LoginForm />}
    />
  );
}

export default LoginScreen;
