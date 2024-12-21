import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import Container from "../Container";
import photo from "../../assets/images/demo_photo.jpeg";
import { Link } from "react-router-dom";

const teamMembers = [
  { id: 1, name: "Razib Hossain", role: "Full Stack Developer", photo },
  { id: 2, name: "Sarah Johnson", role: "UI/UX Designer", photo },
  { id: 3, name: "John Doe", role: "Backend Developer", photo },
  { id: 4, name: "Emma Brown", role: "Frontend Developer", photo },
  { id: 5, name: "Liam Smith", role: "Project Manager", photo },
  { id: 6, name: "Olivia Jones", role: "QA Engineer", photo },
  { id: 7, name: "Noah Davis", role: "DevOps Engineer", photo },
  { id: 8, name: "Sophia Wilson", role: "Product Manager", photo },
  { id: 9, name: "William Lee", role: "Software Engineer", photo },
];

const Team = () => {
  return (
    <Container>
      <div className="">
        <h2 className="text-3xl font-bold ">Our Team Member</h2>
        <Swiper
          slidesPerView={1}
          grid={{ rows: 2 }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          modules={[Grid, Pagination]}
          className="flex h-[700px] py-10"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center cursor-pointer justify-center p-6 bg-primary shadow-md rounded-lg"
            >
              <Link to={`/team/${member.id}`}>
                <div className="text-center">
                  <img src={member.photo} alt={member.name} className="mb-4" />
                  <h3 className="text-white">{member.name}</h3>
                  <p className="text-white">{member.role}</p>
                  <button className="text-white px-4 py-1 bg-black rounded-md mt-2">
                    View More
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Team;
