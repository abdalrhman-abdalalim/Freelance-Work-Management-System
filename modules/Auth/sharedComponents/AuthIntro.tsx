import IntroHeader from "./IntroHeader";
import StepsContainer from "./StepsContainer";
import { Step } from "../types";

function AuthIntro({
  heading,
  description,
  steps,
}: {
  heading: string;
  description: string;
  steps: Step[];
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
      <IntroHeader heading={heading} description={description} />

      <StepsContainer steps={steps} />
    </div>
  );
}

export default AuthIntro;
