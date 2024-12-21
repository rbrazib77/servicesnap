import React from "react";
import Container from "../Container";
import SocialLink from "../SocialLink";
import ListItem from "../ListItem";
import ItemName from "../ItemName";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="px-6 mt-20">
        <div className="md:flex justify-between">
          <div className="">
            <Link to="/">
              <h3 className="text-primary  text-3xl font-rubikBold mb-2  md:mt-0 mt-2 uppercase cursor-pointer">
                Servicesnap
              </h3>
            </Link>
            <p className="text-gray-500 w-[300px] text-lg font-rubikRegular mb-10 ">
              Feel free to contact us for any questions or assistance. Our
              support team is here to help you.
            </p>
            <SocialLink />
          </div>
          <div>
            <h3 className="text-black text-2xl font-rubikBold mb-2 md:mt-0 mt-2">
              Quick Link
            </h3>
            <ListItem>
              <ItemName
                className="text-lg font-rubikRegular text-gray-500 pb-2"
                itemName="Home"
                href="/"
              />

              <ItemName
                className="text-lg font-rubikRegular text-gray-500 pb-2"
                itemName="About"
                href="/about"
              />
              <ItemName
                className="text-lg font-rubikRegular text-gray-500"
                itemName="Contact"
                href="/contact"
              />
            </ListItem>
          </div>
          <div>
            <h3 className="text-black text-2xl font-rubikBold mb-2 md:mt-0 mt-2">
              Quick Link
            </h3>
            <ListItem>
              <ItemName
                className="text-lg font-rubikRegular text-gray-500 pb-2"
                itemName="FAQ's"
                href="/"
              />

              <ItemName
                className="text-lg font-rubikRegular text-gray-500 pb-2"
                itemName="প্রাইভেসি পলিসি"
                href="/privacy"
              />
              <ItemName
                className="text-lg font-rubikRegular text-gray-500"
                itemName="Term & Conditions"
                href="/contact"
              />
            </ListItem>
          </div>
          <div>
            <h3 className="text-black text-2xl font-rubikBold mb-2 md:mt-0 mt-2">
              Contact Us
            </h3>

            <div className="flex items-center gap-2 text-lg font-rubikRegular pb-2">
              <IoCallSharp className="text-[#6a7483]" />
              <span className="text-[#6a7483]">+88 01977-083357</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-rubikRegular pb-2">
              <MdOutlineEmail />
              <span className="text-[#6a7483]">suport@servicesnap.net</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-rubikRegular">
              <FaLocationDot />
              <span className="text-[#6a7483]">House # 220, Road # 12 </span>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <p className="text-center font-rubikRegular text-lg md:text-xl pb-10 text-gray-500">
          Copyright © 2024{" "}
          <span className="text-primary font-rubikMedium uppercase px-1">
            Servicesnap
          </span>
          .All right reserved
        </p>
      </div>
    </Container>
  );
};

export default Footer;
