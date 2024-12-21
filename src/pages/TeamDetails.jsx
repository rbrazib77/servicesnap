import React from 'react'
import photo from "../../src/assets/images/demo_photo.jpeg";
import { useParams } from 'react-router-dom';
import Container from '../components/Container';

const teamMembers = [
    { id:1, name: "Razib Hossain", role: "Full Stack Developer", photo },
    { id:2, name: "Sarah Johnson", role: "UI/UX Designer", photo },
    { id:3, name: "John Doe", role: "Backend Developer", photo },
    { id:4, name: "Emma Brown", role: "Frontend Developer", photo },
    { id:5, name: "Liam Smith", role: "Project Manager", photo },
    { id:6, name: "Olivia Jones", role: "QA Engineer", photo },
    { id:7, name: "Noah Davis", role: "DevOps Engineer", photo },
    { id:8, name: "Sophia Wilson", role: "Product Manager", photo },
    { id:9, name: "William Lee", role: "Software Engineer", photo },
];
const TeamDetails = () => {
    const { id } = useParams();
    const card = teamMembers.find((card) => card.id === parseInt(id));
  
    if (!card) return <h2>Card not found</h2>;
  return (
    <Container>
        <div>
         <div className="pt-20 text-center text-black font-rubikMedium text-4xl">
          ServiceDetails
        </div>
        <div className="bg-red-800 rounded-md p-4 text-white font-rubikRegular">
          <img src={card.img} className="w-full" alt="" />
          <h2 className="text-center text-white text-4xl pt-4">{card.name}</h2>
          <p className="text-center text-white">{card.role}</p>
          <img src={card.photo} alt="" />

          <p className="text-center text-white">ID: {card.id}</p>
        </div>
    </div>
    </Container>
  )
}

export default TeamDetails