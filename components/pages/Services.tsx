export default function Services() {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-semibold mb-10">Services</h2>
      <div className="flex justify-around">
        <div className="text-center">
          <img
            src="/images/design.png"
            alt="UIUX Design"
            className="w-40 h-40 mx-auto"
          />
          <h3 className="mt-4 text-xl font-medium">UIUX Design</h3>
        </div>
        <div className="text-center">
          <img
            src="/images/frontend.png"
            alt="Front End Development"
            className="w-40 h-40 mx-auto"
          />
          <h3 className="mt-4 text-xl font-medium">Front End Development</h3>
        </div>
      </div>
    </section>
  );
}
