import React from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import Services1 from "../assets/images/project.webp";
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
    title: "Emergency services",
    description: "This is the third card",
  },
  {
    id: 4,
    img: Services1,
    title: "Service 4",
    description: "Maintenance Services",
  },
  {
    id: 5,
    img: Services1,
    title: "Service 5",
    description: "Maintenance Services",
  },
];
const ServiceDetails = () => {
  const { id } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));

  if (!card) return <h2>Card not found</h2>;
  return (
    <>
      <Container>
        <div className="pt-20 text-center text-black font-rubikMedium text-4xl">
          ServiceDetails
        </div>
        <div className="bg-red-800 rounded-md p-4 text-white font-rubikRegular">
          <img src={card.img} className="w-full" alt="" />
          <h2 className="text-center text-white text-4xl pt-4">{card.title}</h2>
          <p className="text-center text-white">{card.description}</p>

          <p className="text-center text-white">ID: {card.id}</p>
        </div>
      </Container>
    </>
  );
};

export default ServiceDetails;
