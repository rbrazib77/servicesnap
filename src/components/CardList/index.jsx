import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
const cards = [
  { id: 1, title: "Card 1", description: "This is the first card" },
  { id: 2, title: "Card 2", description: "This is the second card" },
  { id: 3, title: "Card 3", description: "This is the third card" },
];
const CardList = () => {
  return (
    <Container>
      <div className="pt-20">
        <h1 className="text-center text-b  text-4xl font-rubikSemibold pb-10">
          Card List
        </h1>
        <div className="card-list flex justify-between">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card bg-red-800 p-4 text-white font-rubikRegular rounded-md"
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {/* Link to the card detail page */}
              <Link to={`/card/${card.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CardList;
