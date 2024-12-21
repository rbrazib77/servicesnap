import React from "react";

const GoogleMap = () => {
  return (
    <div className="">
      {" "}
      {/* Apply a light blue background with padding */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.12616829773805!2d90.37721698576361!3d23.81793432296317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6d3a2419397%3A0x13646c12182a7016!2sR99H%2B52M%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1734342905555!5m2!1sen!2sbd"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-[600px] rounded-md shadow-md"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
