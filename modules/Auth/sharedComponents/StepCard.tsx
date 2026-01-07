import { Step } from "../types";

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-black/50 hover:bg-brand-dark border border-white/20 rounded-xl duration-300">
      <h3 className="text-lg font-semibold">{step.title}</h3>

      <p className="text-sm text-gray-400">{step.description}</p>
    </div>
  );
}

export default StepCard;
