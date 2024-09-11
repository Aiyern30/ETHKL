import Navigation from "./Navigation";

export default function Header() {
  return (
    <section className="relative flex justify-between py-10 border-2 border-white">
      {/* Left part: Logo */}
      <div>
        <div className="text-2xl font-bold absolute top-5 -left-10">
          <span className="block">LOGO</span>
          <span className="block">HERE</span>
          <span className="block">HERE</span>
        </div>

        {/* Center content (Main text) */}
        <div className="flex-1 flex justify-center items-center p-10">
          <div>
            <h1 className="text-4xl font-semibold text-center">
              I'm Milids,{" "}
              <span className="font-bold">A Self-taught UIUX Designer</span>{" "}
              based in Cheras, Malaysia.
            </h1>
            <p className="mt-4 text-lg text-center">
              I'm passionate about improving the lives of others through design
              and I am constantly looking to learn new things everyday.
            </p>
          </div>
        </div>
      </div>

      {/* Right part: Navigation */}
      <div className="relative ">
        <Navigation />
      </div>
    </section>
  );
}
