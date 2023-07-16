import React from "react";
import Navbar from "./Navbar";
import LetterSpan from "./LetterSpan";

const TopBannar = () => {
  const sentence1 = "HI".split("");
  const sentence2A = "I'm".split("");
  const sentence2B = "Biplob,".split("");
  const sentence3A = "Web".split("");
  const sentence3B = "Developer".split("");
  return (
    <div id="Home" className="relative  h-screen text-white  cusimg">
      <Navbar></Navbar>
      <div className=" pt-[35vh] md:mx-40 ">
        <div>
          {sentence1.map((letter, index) => {
            return <LetterSpan key={index}>{letter}</LetterSpan>;
          })}
        </div>
        <div className="flex mt-5">
          <div>
            {sentence2A.map((letter, index) => {
              return <LetterSpan key={index}>{letter}</LetterSpan>;
            })}
          </div>
          <div className="ml-2">
            {sentence2B.map((letter, index) => {
              return <LetterSpan key={index}>{letter}</LetterSpan>;
            })}
          </div>
        </div>
        <div className=" mt-5 md:flex">
          <div>
            {sentence3A.map((letter, index) => {
              return <LetterSpan key={index}>{letter}</LetterSpan>;
            })}
          </div>
          <div className="md:ml-2">
            {sentence3B.map((letter, index) => {
              return <LetterSpan key={index}>{letter}</LetterSpan>;
            })}
          </div>
        </div>
        <div className="mt-7">
          <a className="cubtn1 w-[220px] font-bold" href={`#Contact`}>
            Contract me
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBannar;
