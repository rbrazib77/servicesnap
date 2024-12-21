import React from "react";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import { FaMapLocation } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Container from "../Container";

const ContactInfo = () => {
  return (
    <>
      <Container>
        <div className="px-6 mt-10 py-20">
          <div className=" text-center">
            <h2 className="text-black font-rubikBold text-4xl">Contact Info</h2>
            <p className="md:w-[550px] m-auto text-base font-rubikRegular text-[#6a7483] pt-6">
              For more information Contact us!!!
            </p>
          </div>
          <div className="md:flex justify-center mt-10">
            <div className="md:w-[33%] mb-8 md:mb-0">
              <div className="w-28 h-28 bg-[linear-gradient(to_right,#ff3951,#ff7b72)] rounded-full flex items-center justify-center  m-auto ">
                <FaMapLocation className=" text-white text-5xl " />
              </div>
              <h4 className="text-base font-rubikBold text-black text-center pt-3 pb-1">
                Location
              </h4>
              <p className="text-center text-[#6a7483]">House # 220, Road # 12</p>
              <p className="text-center text-[#6a7483]">Mirpur-11, Dhaka-1216, Bangladesh</p>
              <p> </p>
            </div>
            <div className="md:w-[33%] mb-8 md:mb-0">
              <div className="w-28 h-28 bg-[linear-gradient(to_right,#ff3951,#ff7b72)] rounded-full flex items-center justify-center  m-auto ">
                <BsTelephoneFill className=" text-white text-5xl " />
              </div>
              <h4 className="text-base font-rubikBold text-black text-center pt-3 pb-1">
                Our Phones
              </h4>
              <p className="text-center text-[#6a7483]">
                <strong>Suport:</strong>+88 01977-083357
              </p>
              <p className="text-center text-[#6a7483]">
                <strong>Main Office: </strong>+88 01717-083357
              </p>
            </div>
            <div className="md:w-[33%]">
              <div className="w-28 h-28 bg-[linear-gradient(to_right,#ff3951,#ff7b72)] rounded-full flex items-center justify-center  m-auto ">
                <MdEmail className=" text-white text-5xl " />
              </div>
              <h4 className="text-base font-rubikBold text-black text-center pt-3 pb-1">
                Email
              </h4>
              <p className="text-center text-[#6a7483]">
                <strong>Suport: </strong>suport@servicesnap.net
              </p>
              <p className="text-center text-[#6a7483]">
                <strong>Technical Support: </strong>suport@servicesnap.net
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactInfo;
