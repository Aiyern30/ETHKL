import { Avatar, AvatarFallback, AvatarImage } from "../ui";

export default function Services() {
  return (
    <section className="border border-black p-9 text-black">
      <div className="text-left font-bold">Services</div>
      <div className="flex justify-center items-center space-x-10">
        <div className="flex flex-col items-center justify-center space-y-3">
          <Avatar className="w-36 h-36">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>UIUX Design</div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3">
          <Avatar className="w-36 h-36">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>Front End Development</div>
        </div>
      </div>
    </section>
  );
}
