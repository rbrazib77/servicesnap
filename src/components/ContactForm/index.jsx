import React from "react";
import Container from "../Container";
import { SiInformatica } from "react-icons/si";

const ContactForm = () => {
  return (
    <div className="bg-[#f9f9f9] py-24 md:py-36">
      <Container>
        <div className="md:w-[70%] m-auto bg-white relative p-7 rounded-md">
          <div className="">
            <div className="absolute left-[50%] translate-x-[-50%] -top-14 w-28 h-28 rounded-full bg-[linear-gradient(to_right,#8526e2,#64c2b1)] flex items-center justify-center">
              <SiInformatica className="text-white   text-5xl" />
            </div>
            <div className="contactFrom-header">
              <h2 className="text-center pt-20 text-black font-rubikBold text-4xl">
                Contact Form
              </h2>
              <p className="text-center md:w-[450px] m-auto font-rubikLight pt-6 text-[#6a7483]">
                A contact form enables users to send messages or inquiries to a
                website owner, including fields for name, email, and message,
                facilitating direct communication.
              </p>
            </div>

            <div className="mt-10">
              <div className="pt-4">
                <input
                  type="text"
                  className="w-full bg-[#f9f9f9] py-3 px-4 rounded-md shadow border focus:outline-none focus:border-2 focus:bg-[#f9f9f9] focus:border-primary"
                  placeholder="Name"
                />
              </div>
              <div className="pt-4">
                <input
                  type="text"
                  className="w-full bg-[#f9f9f9] py-3 px-4 rounded-md shadow border focus:outline-none focus:border-2 focus:bg-[#f9f9f9] focus:border-primary"
                  placeholder="E-amil"
                />
              </div>
              <div className="pt-4">
                <input
                  type="text"
                  className="w-full bg-[#f9f9f9] py-3 px-4 rounded-md shadow border focus:outline-none focus:border-2 focus:bg-[#f9f9f9] focus:border-primary"
                  placeholder="Phone"
                />
              </div>
              <div className="pt-4">
                <textarea
                  placeholder="Type your massage"
                  className="w-full mt-3  rounded-[10px] bg-[#f9f9f9] shadow border border-[#ffffff15] text-white placeholder:text-[#919090] placeholder:font-rubikRegular px-4 py-3 focus:outline-none focus:border-primary focus:border-2"
                  rows="7"
                ></textarea>
              </div>
              <button className="px-4 py-2 bg-[linear-gradient(to_right,#ff3951,#ff7b72)] rounded-md text-white font-rubikRegular mt-4 ">
                Send Messsage
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
