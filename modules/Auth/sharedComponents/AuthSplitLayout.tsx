type AuthScreenWrapperProps = {
  intro: React.ReactNode;
  form: React.ReactNode;
  reverse?: boolean;
};

function AuthSplitLayout({
  intro,
  form,
  reverse = false,
}: AuthScreenWrapperProps) {
  const gradient_bg =
    "bg-brand-dark bg-linear-to-b from-brand-navy from-0% via-brand-navy via-2% to-black to-100%";

  return (
    <div className="grid grid-cols-12 h-dvh pt-3 px-3">
      {/* Intro Section */}
      <div
        className={`hidden lg:block col-span-6 w-full h-full ${gradient_bg} rounded-t-4xl overflow-hidden
        ${reverse ? "order-2" : "order-1"}`}
      >
        {intro}
      </div>

      {/* Form Section */}
      <div
        className={`col-span-12 lg:col-span-6 flex items-center justify-center
        ${reverse ? "order-1" : "order-2"}`}
      >
        {form}
      </div>
    </div>
  );
}

export default AuthSplitLayout;
