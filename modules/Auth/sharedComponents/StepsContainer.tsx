import { Step } from "@/modules/Auth/types";
import StepCard from "./StepCard";

function StepsContainer({ steps }: { steps: Step[] }) {
  return (
    <ul className="flex flex-col items-center gap-4 w-3/5">
      {steps.map((step) => (
        <li key={step.id} className="w-full">
          <StepCard step={step} />
        </li>
      ))}
    </ul>
  );
}

export default StepsContainer;
