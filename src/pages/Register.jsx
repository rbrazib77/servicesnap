import React from "react";
import Container from "../components/Container";

const Register = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="flex flex-wrap gap-6 lg:flex-nowrap justify-between px-6 py-8">
          {/* Left Section */}
          <div className="lg:w-2/4 w-full bg-white shadow-md p-6 rounded-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Be a Professional with Angi Services!
            </h2>
            <form className="space-y-4">
              {/* Service Category and Service */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-group w-full">
                  <label className="block text-gray-600 mb-2">
                    Service Category
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option disabled value="">
                      Choose your service category
                    </option>
                    <option value="">a</option>
                    <option value="">b</option>
                    <option value="">c</option>
                  </select>
                </div>
                <div className="form-group w-full">
                  <label className="block text-gray-600 mb-2">Service</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option disabled value="">
                      Choose your service
                    </option>
                    <option value="">x</option>
                    <option value="">y</option>
                    <option value="">z</option>
                  </select>
                </div>
              </div>

              {/* Name */}
              <div className="form-group">
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Contact */}
              <div className="form-group">
                <label className="block text-gray-600 mb-2">Contact</label>
                <input
                  type="text"
                  placeholder="Enter your contact"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="block text-gray-600 mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* About Your Service */}
              <div className="form-group">
                <label className="block text-gray-600 mb-2">
                  About Your Service
                </label>
                <textarea
                  placeholder="Short description"
                  className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              {/* Image Upload */}
              <div className="form-group">
                <label className="block text-gray-600 mb-2">Upload Image</label>
                <input
                  type="file"
                  className="block w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>

              {/* Location */}
              <div className="form-group">
                <label className="block text-gray-600 mb-2">Location</label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option disabled value="">
                    Select your location
                  </option>
                  <option value="mirpur">Mirpur</option>
                  <option value="dhanmondi">Dhanmondi</option>
                </select>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full bg-gray-50 shadow-md p-6 rounded-md mt-6 lg:mt-0 flex items-center justify-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Condition to be a Service Provider:
              </h3>
              <p className="text-gray-600">
                To display or enlist your service on our website, make a payment
                of{" "}
                <span className="font-semibold text-indigo-600">1000 taka</span>{" "}
                to the mentioned bKash number. It may take some time for the
                money to appear on the website after payment.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
