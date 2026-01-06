const FeaturHeader = () => {
  return (
    <div className="flex flex-col items-center text-center mb-16 space-y-4">
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
        FEATURES
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
        Everything you need to <span className="text-brand-teal">scale</span>{" "}
        your business
      </h2>

      <p className="text-zinc-400 text-lg max-w-xl">
        Powerful tools to help you manage projects, track time, and handle
        clients without the headache.
      </p>
    </div>
  );
};

export default FeaturHeader;
