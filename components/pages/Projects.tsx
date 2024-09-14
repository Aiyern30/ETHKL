import { Button } from "../ui";
import StripedBackground from "./StripedBackground ";
import Image from "next/image";

const Projects = () => (
  <div
    className="grid grid-cols-3 grid-rows-4  "
    style={{
      gridTemplateAreas: `
        "box1 box2 box3"
        "box4 box4 box3"
        "box4 box4 box5"
        "box4 box4 box5"
      `,
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(4, auto)",
    }}
  >
    <div
      className="flex items-center justify-center "
      style={{ gridArea: "box1" }}
    >
      <StripedBackground width="100%" height="230px" />
    </div>
    <div
      className="bg-yellow-400 flex items-center justify-center  "
      style={{ gridArea: "box2", height: "230px" }}
    ></div>
    <div
      className="flex items-center justify-center "
      style={{ gridArea: "box3" }}
    >
      <StripedBackground width="100%" height="300px" />
    </div>
    <div
      className="bg-yellow-400 border-2 border-black p-9 text-black "
      style={{ gridArea: "box4", height: "24rem" }}
    >
      <div className="font-bold">My Projects</div>
      <div className="flex justify-center items-center ">
        <div className="w-1/2 space-y-5">
          <div className="">1/6</div>
          <div className="text-xl">Redesign Case Study</div>
          <div className="text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/controller.png"
            alt="shadcn"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
      <Button>Take A Look</Button>
    </div>
    <div
      className="bg-yellow-400 flex items-center justify-center "
      style={{ gridArea: "box5", height: "20rem" }}
    ></div>
  </div>
);

export default Projects;
