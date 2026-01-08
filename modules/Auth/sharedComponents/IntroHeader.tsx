type IntroHeaderProps = {
  heading: string;
  description: string;
};

function IntroHeader({ heading, description }: IntroHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold">App Logo</h1>

      <h2 className="font-bold text-4xl">{heading}</h2>

      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default IntroHeader;
