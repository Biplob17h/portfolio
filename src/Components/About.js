import React from "react";
import me from "../assats/me.png";

const About = () => {
  return (
    <div
      className="flex flex-col-reverse  w-full  h-full text-white md:mt-20 md:pt-44  md:flex-row md:h-[700px]"
      id="About">
      <div className="px-2  md:w-1/2  md:px-28">
        <h1 className="pt-5 text-4xl font-serif font-bold md:pt-0">About Me</h1>
        <hr className="h-2" />
        <div className="text-[18px]">
          <p>Hello,</p>
          <p className="mt-2">
            I am Biplob Hossain and I am a <br />
            MERN Stack Devloper and Web Designer. <br />
          </p>
          <p className="mt-2">
            I have serious passion for creating Responsive feature rich websites
            with great User Experience.
          </p>
          <p className="mt-2">
            I am currently looking for an opportunity <br />
            to show my potential.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-start mt-5 md:-ml-4">
          <a
            href="https://drive.google.com/file/d/1nydd9Dp3ZT3wPbtFNZmQUdrejWm8JOFS/view?usp=sharing"
            className="cubtn3 font-semibold">
            RESUME
          </a>

          <a className="cubtn2 font-semibold" href={`#Contact`}>
            hire me
          </a>
        </div>
      </div>
      <div className="  md:w-1/2  md:pl-20 ">
        <img
          className="  bg-transparent cusBoxImg md:h-[450px] md:w-[500px]"
          src={me}
          alt="my img"
        />
      </div>
    </div>
  );
};

export default About;
