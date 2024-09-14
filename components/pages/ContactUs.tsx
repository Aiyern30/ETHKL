import { Button, Input, Label, Textarea } from "../ui";

export default function ContactUs() {
  return (
    <section className="border border-black p-9 text-black flex flex-col md:flex-row gap-8">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          I will be more than happy to answer any of your questions or talk with
          you.
        </p>
        <p className="mb-2 font-semibold">Email:</p>
        <p className="mb-4">loremipsum@gmail.com</p>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <p className="mb-4">
          I am always looking for great collaborators. Let's message me and make
          something together!
        </p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
            <div className="grid w-full sm:w-1/2 gap-1.5">
              <Label htmlFor="Name">Your Name (required)</Label>
              <Input type="text" id="Name" placeholder="Your Name" />
            </div>
            <div className="grid w-full sm:w-1/2 gap-1.5">
              <Label htmlFor="Email">Your Email (required)</Label>
              <Input type="email" id="Email" placeholder="Your Email" />
            </div>
          </div>
          <div className="grid w-full gap-1.5 mb-4">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="max-h-24"
            />
          </div>
          <Button className="w-full sm:w-auto">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
