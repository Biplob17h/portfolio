import React from "react";
import { AiFillGithub } from "react-icons/ai";
import facebook from "../assats/Facebook.png";
import linkedin from "../assats/linkedin.png";

const Footer = () => {
  return (
    <div className="mt-10 text-center  pb-10">
      <hr />
      <h1 className="text-3xl font-bold pt-5">Biplob Hossain</h1>
      <div className="flex justify-center mt-5">
        <a href="https://github.com/Biplob17h" className="text-[32px] mr-5">
          <AiFillGithub></AiFillGithub>
        </a>
        <a
          href="https://www.facebook.com/mdbiplubhossen.joy"
          className="text-3xl mr-5">
          <img
            className="w-8 bg-white rounded-full"
            src={facebook}
            alt="facebook logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/biplob-hossain-42439a27b/"
          className="text-3xl mr-5">
          <img className="w-8" src={linkedin} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
