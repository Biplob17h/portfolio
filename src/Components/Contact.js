import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_atxicih",
        "template_nw7rxwm",
        form.current,
        "EcU50gpe_2wKn__oJ"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("email send successfully");
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("something went wrong");
        }
      );
    form.current.reset();
  };
  return (
    <div className="w-full pt-20" id="Contact">
      <h1 className="text-center text-4xl font-bold">Contract me</h1>
      <hr className="w-48 mx-auto mt-3 font-bold h-2" />
      <div className="flex flex-col md:flex-row pt-20">
        <div className="w-5/12 pl-20 md:h-[330px]">
          <div>
            <h1 className="text-2xl font-bold">Phone</h1>
            <p>01736223432</p>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-bold">Email</h1>
            <p>biplob17h@gmail.com</p>
          </div>
        </div>
        <div className="w-full text-black md:pr-10 md:w-7/12">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col mt-7 w-full md:flex-row md:mt-0">
              <input
                className="input input-ghost w-full mr-2 font-semibold"
                type="text"
                name="user_name"
                placeholder="name"
              />

              <input
                className="input input-ghost w-full mt-4  font-semibold md:ml-3 md:mt-0"
                type="email"
                name="user_email"
                placeholder="email"
              />
            </div>
            <div>
              <textarea
                className="input input-ghost w-full h-[200px] mt-5 font-semibold"
                name="message"
                placeholder="message"
              />
            </div>
            <input
              className="cubtn3 cursor-pointer"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
