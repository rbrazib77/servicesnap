import React, { useState } from "react";
import Services1 from "../../../src/assets/images/project.webp";
import Web from "../../../src/assets/images/web.jpg";
import Search from "../Search";
import { createPortal } from "react-dom";
import Modals from "./../Modals/index";
import { Link } from "react-router-dom";


const  ServiceCard= [
    {
      id: 1,
      img: Services1,
      title: "Web Development",
      desc: "Full Details",
    },
    {
      id: 2,
      img: Services1,
      title: "UI/UX Design",
      desc: "Full Details",
    },
    {
      id: 3,
      img: Services1,
      title: "SEO Services",
      desc: "Full Details",
    },
    {
      id: 4,
      img: Services1,
      title: "Content Creation",
      desc: "Full Details",
    },
    {
      id: 5,
      img: Services1,
      title: "E-commerce Solutions",
      desc: "Full Details",
    },
    {
      id: 6,
      img: Services1,
      title: "Mobile Development",
      desc: "Full Details",
    },
    {
      id: 7,
      img: Services1,
      title: "Digital Marketing",
      desc: "Full Details",
    },
    {
      id: 8,
      img: Services1,
      title: "Web Hosting",
      desc: "Full Details",
    },
    {
      id: 9,
      img: Services1,
      title: "Maintenance Services",
      desc: "Full Details",
    },
  ]


const ServicesCard = () => {
  const initialShow = 8;
  const [loadmore, setLoadmore] = useState(initialShow);
  const [popup, setPopup] = useState(false);
  const slice = ServiceCard.slice(0, loadmore);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = ServiceCard.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handelLoadMore = () => {
    setLoadmore((prav) => prav + 4);
  };
  // const handelPopup = () => {
  //   console.log("hello")
  // };

  return (
    <>
      <div className="mt-20">
        {/* <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
        <h2 className="text-4xl font-rubikBold text-black">Popular Services</h2>
        <div
          className="md:flex flex-wrap gap-x-5 cursor-pointer mt-10"
          onClick={() => setPopup(true)}
        >
          {filteredServices.slice(0, loadmore).map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-3xl  border-primary border-2  overflow-hidden text-center  mb-8"
              >
                <img src={item.img} alt={item.title} className="w-full" />
                <h3 className="p-2">{item.title}</h3>
                <h5>{item.desc}</h5>
                <Link to={`/services/${item.id}`}>View Details</Link>
              </div>
            );
          })}
        </div>
        <div className="m-auto text-center">
          {loadmore <ServiceCard.length && (
            <button
              className="bg-[linear-gradient(to_right,#ff3951,#ff7b72)] px-4 py-2 font-rubikMedium text-lg text-center text-white rounded-md inline-block "
              onClick={handelLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {popup && createPortal(<Modals setPopup={setPopup} />, document.body)}
    </>
  );
};

export default ServicesCard;
