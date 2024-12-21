import React, { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import Services1 from "../../../src/assets/images/project.webp";
const cards = [
  {
    id: 1,
    img: Services1,
    title: "Web Development",
    description: "This is the first card",
  },
  {
    id: 2,
    img: Services1,
    title: "Dental care",
    description: "This is the second card",
  },
  {
    id: 3,
    img: Services1,
    title: "Emergency services:",
    description: "This is the third card",
  },
  {
    id: 4,
    img: Services1,
    title: "Service 3",
    description: "Maintenance Services",
  },
  {
    id: 5,
    img: Services1,
    title: "Service 5",
    description: "Maintenance Services",
  },
];
const PopularService = () => {
  const initialShow = 4;
  const [loadmore, setLoadmore] = useState(initialShow);
  const handelLoadMore = () => {
    setLoadmore((prav) => prav + 4);
  };
  return (
    <Container>
      <div className="">
        <h1 className=" text-b  text-4xl font-rubikSemibold pb-6">
          Popular Service
        </h1>
        <div className="grid grid-cols-2  md:grid-cols-4  gap-x-5 cursor-pointer">
          {cards.slice(0, loadmore).map((card) => (
            <Link to={`/popularservice/${card.id}`}>
              <div
                key={card.id}
                className="rounded-2xl   shadow-lg  overflow-hidden text-center  mb-8 pb-4"
              >
                <img src={card.img} alt="" />
                <h3 className="text-lg font-rubikRegular">{card.title}</h3>
                <p>{card.description}</p>
                {/* Link to the service detail page */}
                <button className="text-white px-4 py-1 bg-[linear-gradient(to_right,#ff3951,#ff7b72)] rounded-md mt-4">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="m-auto text-center">
          {loadmore < cards.length && (
            <button
              className="bg-[linear-gradient(to_right,#ff3951,#ff7b72)] px-4 py-2 font-rubikMedium text-lg text-center text-white rounded-md inline-block "
              onClick={handelLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default PopularService;
