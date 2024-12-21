import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex gap-x-5 mt-4">
      <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right,#ff3951,#ff7b72)] flex items-center justify-center">
        <Link target="_blank" to="https://www.facebook.com/mzu.mamun">
          <FaFacebookF className="text-white text-2xl" />
        </Link>
      </div>
      <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right,#ff3951,#ff7b72)] flex items-center justify-center">
        <Link target="_blank" to="">
          <IoLogoWhatsapp className="text-white text-2xl" />
        </Link>
      </div>
      <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right,#ff3951,#ff7b72)] flex items-center justify-center">
        <Link target="_blank" to="https://www.linkedin.com/in/md-almamun-69749186/">
          <FaLinkedinIn className="text-white text-2xl" />
        </Link>
      </div>
      <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right,#ff3951,#ff7b72)] flex items-center justify-center">
        <Link target="_blank" to="https://www.youtube.com/">
          <FaYoutube className="text-white text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLink;
