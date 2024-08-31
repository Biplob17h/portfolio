import React from "react";

const Skills = () => {
  return (
    <div
      className="flex items-end w-full  text-white md:h-[600px] md:mt-[100px]"
      id="Skills"
    >
      <div className=" w-full  grid  grid-cols-1 md:gap-10 md:pb-20 md:mx-20 md:grid-cols-3">
        <div className="w-full border rounded cuBgCard1 text-center h-[400px]">
          <h1 className="text-3xl pt-5 font-bold">Technical Skills</h1>
          <div className=" md:text-[20px] md:pt-5">
            <p>Html 5</p>
            <p>Css 3</p>
            <p>JavaScript</p>
            <p>React JS</p>
            <p>Redux JS</p>
            <p>Node JS</p>
            <p>Express JS</p>
          </div>
        </div>
        <div className="w-full border rounded cuBgCard2 text-center h-[400px]">
          <h1 className="text-3xl pt-5 font-bold">Others Skills</h1>
          <div className="pt-5 text-[20px]">
            <p>Material UI</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>Mongo DB</p>
            <p>MySQL</p>
            <p>FireBase</p>
            <p>Typescript</p>
          </div>
        </div>
        <div className="w-full border rounded cuBgCard3 text-center h-[400px]">
          <h1 className="text-3xl pt-5 font-bold">Tools</h1>
          <div className="pt-5 text-[20px]">
            <p>Vs Code</p>
            <p>Git</p>
            <p>Git Bash</p>
            <p>Figma</p>
            <p>Docker</p>
            <p>Prisma.io</p>
            <p>Socket.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
