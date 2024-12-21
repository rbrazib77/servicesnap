import React from "react";
import Container from "../components/Container";
import { TbDeviceImacCode } from "react-icons/tb";

const About = () => {
  return (
    <section className="pt-14">
      <Container>
        <div className="px-6">
          <div className="pt-10">
            <h2 className="text-3xl md:text-5xl text-center md:text-left font-rubikMedium text-primary pt-4 pb-5">
              About Us
            </h2>
            <p className="text-base text-gray-500 font-rubikRegular md:w-4/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              labore nostrum quos numquam repudiandae iste, assumenda commodi
              natus ab laboriosam deleniti tempore. Repudiandae assumenda
              obcaecati, at aliquam harum animi perferendis!
            </p>
          </div>
          <div className="pt-10">
            <h2 className="text-5xl font-rubikMedium text-black pt-4 pb-5">
              Our Mission
            </h2>
            <p className="text-base text-gray-500 font-rubikRegular md:w-4/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              labore nostrum quos numquam repudiandae iste, assumenda commodi
              natus ab laboriosam deleniti tempore. Repudiandae assumenda
              obcaecati, at aliquam harum animi perferendis!
            </p>
          </div>
          <div className="pt-10">
            <h2 className="text-5xl font-rubikMedium text-black pt-4 pb-5">
              Our Vission
            </h2>
            <p className="text-base text-gray-500 font-rubikRegular md:w-4/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              labore nostrum quos numquam repudiandae iste, assumenda commodi
              natus ab laboriosam deleniti tempore. Repudiandae assumenda
              obcaecati, at aliquam harum animi perferendis!
            </p>
          </div>
          <div className="mt-20">
            <div>
              <h2 className="text-5xl font-rubikMedium text-black pb-10">
                Our Services
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-5">
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Web & Software</p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Healthcare</p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Utility Services</p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Food and Grocery</p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Transportation</p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">
                    Cleaning and Maintenance
                  </p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Financial Services</p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">
                    Childcare and Education
                  </p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Technology and IT</p>
                </div>
                <div className="text-center p-4 sm:p-8 border border-gray-300 rounded-xl cursor-pointer  box-content	">
                  <TbDeviceImacCode className="text-black text-5xl text-center inline-block pb-2" />
                  <p className="text-lg font-rubikMedium">Event Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
