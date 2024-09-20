import ContactUs from "@/components/pages/ContactUs";
import Header from "@/components/pages/Header";
import Pricing from "@/components/pages/Pricing";
import Projects from "@/components/pages/Projects";
import Services from "@/components/pages/Services";

export default function Home() {
  return (
    <div className="bg-yellow-400 min-h-screen m-10  ">
      <Header />
      <Services />
      <Projects />
      <Pricing />
      {/* <Testing /> */}
      <ContactUs />
    </div>
  );
}
