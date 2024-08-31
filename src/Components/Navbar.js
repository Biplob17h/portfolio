/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import navlinks from "../Json/Navlinks";
import logo from "../assats/logo_nobraground.png";
import menu from "../assats/menu.svg";
import close from "../assats/close.svg";

const Navbar = () => {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Home");
  const [nav, setNav] = useState(0);

  const scroll = () => {
    console.log(window.scrollY);
    if (window.scrollY < 200) {
      setTop(true);
    } else {
      setTop(false);
    }
    if (window.scrollY < 550) {
      setSelected("Home");
    } else if (window.scrollY > 550 && window.scrollY < 1270) {
      setSelected("About");
    } else if (window.scrollY > 1270 && window.scrollY < 2000) {
      setSelected("Skills");
    } else if (window.scrollY > 2000 && window.scrollY < 3000) {
      setSelected("Projects");
    } else if (window.scrollY > 3000) {
      setSelected("Contact");
    }
    setNav(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [nav]);
  return (
    <div>
      {/* for bog div */}
      <div className="relative hidden max-w-7xl md:block">
        <div
          className={`fixed w-full max-w-7xl top-0 pr-10  h-12  bg-[#7d37da] text-white font-semibold md:pr-0  ${
            top ? "opacity-80" : "cuNavbar"
          }`}>
          <div className="pt-[10px] hidden md:flex md:justify-between md:pr-10">
            <img
              className="w-16 -mt-2 cursor-pointer select-none ml-10"
              src={logo}
              alt=""
            />
            <div>
              {navlinks.map((link) => {
                return (
                  <a
                    href={`#${link.name}`}
                    className={`${
                      selected === link.name ? "text-primary" : ""
                    } text-[18px] font-bold mx-2   cursor-pointer hover:text-primary`}
                    key={link.id}
                    onClick={() => {
                      setSelected(link.name);
                    }}>
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* for small div */}
      <div className="max-w-[400px] md:hidden">
        <div
          className={`fixed w-full max-w-7xl top-0 pr-10  h-12  bg-[#7d37da] text-white font-semibold md:pr-0  ${open ? "opacity-75" : "opacity-30"}`}>
          <div className="flex justify-between">
            <img src={logo} alt="logo" className="w-16" />
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="fixed right-3 top-4 ">
              <img src={open ? close : menu} alt="" />
            </div>
            <div className={` ${open ? "fixed flex flex-col top-12 right-5 z-20" : "hidden"}`}>
                {navlinks.map((link) => {
                  return (
                    <a
                      href={`#${link.name}`}
                      className={`${
                        selected === link.name ? "text-primary" : ""
                      } `}
                      key={link.id}
                      onClick={() => {
                        setSelected(link.name);
                      }}>
                      {link.name}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
