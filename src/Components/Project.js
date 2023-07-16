import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Project = ({ project }) => {
  const { img, name, details, pdf, live, git } = project;
  return (
    <div className=" mx-1 mt-7 rounded-md  h-[450px] md:mx-auto md:p-2 md:shadow-slate-300 cursor-pointer md:border">
      <img
        src={img}
        className="w-full h-[280px] rounded-md"
        alt="website img"
      />
      <div className="text-center pt-5">
        <h1 className="text-3xl font-bold font-serif text-primary">{name}</h1>
        <p>{details}</p>
      </div>
      <div className="flex ml-5  text-center justify-center pt-[37px] md:mx-auto">
        <a href={live} className="cubtn4 h-9 w-20 font-bold mr-5 pt-1">
          <span className="flex mx-auto w-[80px] md:w-full">
            <AiOutlineEye className="pt-[5px] ml-3 text-xl md:mr-1" />
            Live
          </span>
        </a>
        <a href={git} className="cubtn4 h-9 w-28 font-bold mr-5 pt-1 md:w-20">
          <span className="flex mx-auto w-full">
            <AiFillGithub className="pt-1 ml-1 text-xl md:mr-1 md:ml-3" />
            Code
          </span>
        </a>
        <a href={pdf} className="cubtn4 h-9 w-20 font-bold mr-5 pt-[5px] px-2">
          <span className="flex mx-auto">
            <AiFillFilePdf className="pt-1   text-xl md:mr-1 md:ml-3" />
            Pdf
          </span>
        </a>
      </div>
    </div>
  );
};

export default Project;
