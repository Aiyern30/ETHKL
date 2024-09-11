const Projects = () => (
  <section className="py-16 border-2 border-black">
    <h2 className="text-center text-3xl font-semibold mb-10">My Projects</h2>
    <div className="flex justify-between">
      <div className="w-1/2">
        <h3 className="text-2xl font-semibold">1/6 Redesign Case Study</h3>
        <p className="mt-4 text-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <button className="mt-6 px-4 py-2 bg-black text-white">
          Take a Look
        </button>
      </div>
      <div className="w-1/3">
        <img
          src="/images/controller.png"
          alt="Project Case Study"
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
);

export default Projects;
