import React from "react";
import PopularServices from "../components/PopularServices";
import Container from "../components/Container";
import Category from "../components/Category";
import CardList from "../components/CardList";
import PopularService from "../components/PopularService";
import Team from "../components/Team";

const Home = () => {
  return (
    <Container>
      <div className="px-6">
        <Category/>
        {/* <PopularService/> */}
        {/* <Team/> */}
      </div>
    </Container>
  );
};

export default Home;
