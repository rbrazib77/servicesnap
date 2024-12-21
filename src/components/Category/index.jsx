import React, { useState } from "react";
import Services1 from "../../../src/assets/images/project.webp";
import Web from "../../../src/assets/images/web.jpg";
import UiUx from "../../../src/assets/images/uiux.jpg";
import SEO from "../../../src/assets/images/seo.jpg";
import Pharmacy from "../../../src/assets/images/Pharmacy.jpeg";
import Deltan from "../../../src/assets/images/deltan.jpeg";
import Mental from "../../../src/assets/images/mental.jpeg";

import { CiSearch } from "react-icons/ci";
import { createPortal } from "react-dom";
import Modals from "../Modals";

const Category = () => {
  const [popup, setPopup] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState(null); // Set to null initially

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Popular Services",
      subcategories: [
        {
          name: "Web Development",
          image: Web,
          address: "Mirpur,Dhaka ,Bangladsh",
          desc: "Web development involves creating, designing, and maintaining websites, combining frontend (user interface) and backend (server-side) development to deliver functional, responsive, and visually appealing online platforms.",
          contact:"+08801712345678",
        },
        {
          name: "Dental care",
          image: Deltan,
          address: "Mirpur,Dhaka ,Bangladsh",
          desc: "Dental care focuses on maintaining oral health through regular check-ups, cleanings, and treatments. It includes preventing cavities, gum disease, and ensuring overall dental hygiene for a healthy smile and well-being.",
          contact:"+08801712345678",
        },
        {
          name: "Mental health",
          desc: "For regular check-ups, minor ailments, and health advice.",
          image: Mental,
          address: "Mirpur,Dhaka ,Bangladsh",
          contact:"+08801712345678",
        },
        {
          name: "Emergency",
          desc: "Ambulances and hospital emergency rooms for urgent health needs.",
          image: Mental,
          address: "Mirpur,Dhaka ,Bangladsh",
          contact:"+08801712345678",
        },
      ],
    },
    {
      id: 2,
      name: "Healthcare Services",
      subcategories: [
        {
          name: "Pharmacy ",
          image: Pharmacy,
          desc: "Our pharmacy services provide essential support for your health and wellness needs. We offer a full range of medications, over-the-counter products, and health supplements. Our trained pharmacists are available for consultations to ensure you understand your prescriptions, potential side effects, and the best ways to manage your medications. Additionally, we provide guidance on wellness products, health screenings, vaccinations, and lifestyle choices to support your overall well-being. With a commitment to patient safety and personalized care, our pharmacy services are here to help you stay healthy and informed.",
           contact:"+08801712345678",
           address: "Mirpur,Dhaka ,Bangladsh",
        },
        {
          name: "Dental care",
          image: Deltan,
          desc: "Our dental care services focus on maintaining your oral health and ensuring a bright, healthy smile. We provide comprehensive treatments, including routine cleanings, check-ups, and X-rays to prevent and address dental issues early. Our skilled dental professionals also offer specialized services, such as fillings, crowns, root canals, and cosmetic procedures to restore and enhance your teeth’s appearance. Patient comfort and safety are our priorities, and we work to create a relaxed environment while educating you on best practices for at-home oral care. Let us help you achieve optimal dental health for a lifetime of confident smiles.",
          address: "Mirpur,Dhaka ,Bangladsh",
           contact:"+08801712345678"
        },
        {
          name: "Mental health",
          desc: "For regular check-ups, minor ailments, and health advice.",
          image: Mental,
          address: "Mirpur,Dhaka ,Bangladsh",
           contact:"+08801712345678"
        },
        {
          name: "Emergency:",
          desc: "Ambulances and hospital emergency rooms for urgent health needs.",
          image: Mental,
          address: "Mirpur,Dhaka ,Bangladsh",
          contact:"+08801712345678"
        },
      ],
    },
    {
      id: 3,
      name: "Utility Services",
      subcategories: [
        {
          name: "Water supply",
          image: Services1,
          desc: "Pharmacy description",
          address: "Mirpur,Dhaka ,Bangladsh",
        },
        { name: "Electricity", image: Services1, desc: "Dental description" },
        {
          name: "Gas services",
          desc: "Natural gas for heating, cooking, and hot water.",
          image: Services1,
          address: "Mirpur,Dhaka ,Bangladsh",
        },
        {
          name: "Telecommunications",
          desc: "Internet, mobile, and landline services for communication",
          image: Services1,
        },
      ],
    },

    {
      id: 4,
      name: " Food and Grocery Services",
      subcategories: [
        {
          name: "Pharmacy services",
          image: Services1,
          desc: "Pharmacy description",
        },
        { name: "Dental care", image: Services1, desc: "Dental description" },
        {
          name: "Mental health services",
          desc: "For regular check-ups, minor ailments, and health advice.",
          image: Services1,
        },
      ],
    },

    {
      id: 5,
      name: "Transportation Services",
      subcategories: [
        {
          name: "Pharmacy services",
          image: Services1,
          desc: "Pharmacy description",
        },
        { name: "Dental care", image: Services1, desc: "Dental description" },
        {
          name: "Mental health services",
          desc: "For regular check-ups, minor ailments, and health advice.",
          image: Services1,
        },
      ],
    },

    {
      id: 6,
      name: "Cleaning and Maintenance Services",
      subcategories: [
        {
          name: "Pharmacy services",
          image: Services1,
          desc: "Pharmacy description",
        },
        { name: "Dental care", image: Services1, desc: "Dental description" },
        {
          name: "Mental health services",
          desc: "For regular check-ups, minor ailments, and health advice.",
          image: Services1,
        },
      ],
    },

    {
      id: 7,
      name: "  Financial Services",
      subcategories: [
        {
          name: "Pharmacy services",
          image: Services1,
          desc: "Pharmacy description",
        },
        { name: "Dental care", image: Services1, desc: "Dental description" },
        {
          name: "Mental health services",
          desc: "For regular check-ups, minor ailments, and health advice.",
          image: Services1,
        },
      ],
    },

    {
      id: 8,
      name: " Childcare and Education Services",
      subcategories: [
        {
          name: "Pharmacy services",
          image: Services1,
          desc: "Pharmacy description",
        },
        { name: "Dental care", image: Services1, desc: "Dental description" },
        {
          name: "Mental health services",
          desc: "For regular check-ups, minor ailments, and health advice.",
          image: Services1,
        },
      ],
    },

    {
      id: 9,
      name: "Technology and IT Services",
      subcategories: [
        {
          name: "Web Development",
          image: Services1,
          desc: "Web connectivity for homes, personal and businesses",
        },
        {
          name: "Technical support",
          image: Services1,
          desc: "Help with troubleshooting computers, smartphones, or other devices",
        },
        {
          name: "Cybersecurity services",
          desc: "Protection from viruses, malware, and identity theft.",
          image: Services1,
        },
      ],
    },

    {
      id: 10,
      name: " Fitness and Wellness Services",
      subcategories: [
        {
          name: "Web Development",
          image: Services1,
          desc: "Web connectivity for homes, personal and businesses",
        },
        {
          name: "Technical support",
          image: Services1,
          desc: "Help with troubleshooting computers, smartphones, or other devices",
        },
        {
          name: "Cybersecurity services",
          desc: "Protection from viruses, malware, and identity theft.",
          image: Services1,
        },
      ],
    },

    {
      id: 11,
      name: "Event Management and Entertainment Services",
      subcategories: [
        {
          name: "Web Development",
          image: Services1,
          desc: "Web connectivity for homes, personal and businesses",
        },
        {
          name: "Technical support",
          image: Services1,
          desc: "Help with troubleshooting computers, smartphones, or other devices",
        },
        {
          name: "Cybersecurity services",
          desc: "Protection from viruses, malware, and identity theft.",
          image: Services1,
        },
      ],
    },
    {
      id: 12,
      name: "Decoration Service",
      subcategories: [
        {
          name: "Interior-Exterior decoration",
          image: Services1,
          desc: "All Home and Office/Commercial Interior-Exterior decoration.",
        },
        {
          name: "Event Decoration",
          image: Services1,
          desc: " Comprehensive design services for weddings, Birthday party including floral arrangements, table settings, lighting, and venue styling.",
        },
      ],
    },

    // Additional categories...
  ]);

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(category.subcategories[0]);
    setSearchTerm(""); // Reset search term when switching categories
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
    setPopup(true); // Open popup when subcategory is clicked
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = searchTerm
    ? categories
        .map((category) => ({
          ...category,
          subcategories: category.subcategories.filter((subcategory) =>
            subcategory.name.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.subcategories.length > 0)
    : [{ ...activeCategory }];

  return (
    <div className="mt-20">
      {/* Categories Row */}
      <div className="flex justify-between gap-2 mt-4 pb-3 overflow-x-auto whitespace-nowrap !cursor-pointer category">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className={`px-2 py-2 rounded-md inline-block ${
              activeCategory.id === category.id
                ? "bg-[linear-gradient(to_right,#ff3951,#ff7b72)] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mt-6 relative text-center">
        <input
          type="text"
          placeholder="What do you need of with?"
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4  px-10 py-3 w-full md:w-1/2 border-2 border-primary rounded-[30px] md:rounded-l-[30px] placeholder:text-xl placeholder:text-gray-400 placeholder:font-rubikRegular focus:border-primary outline-none"
        />
        <button className="bg-[linear-gradient(to_right,#ff3951,#ff7b72)] hidden md:block w-10 md:w-16 h-[52px] absolute top-0 right-4  md:right-72 rounded-r-[30px]">
          <CiSearch className="text-white text-3xl m-auto" />
        </button>
      </div>

      {/* Subcategories Row */}
      <div className="!cursor-pointer">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.id} className="mb-4 ">
              <h2 className=" text-3xl md:text-4xl font-rubikMedium">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4  gap-x-3 !cursor-pointer  mt-6 ">
                {category.subcategories.map((subcategory, index) => (
                  <div
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className="rounded-2xl relative shadow-inner	 overflow-hidden px-4 pt-4  mb-8 category-bar"
                  >
                    <h3 className="font-rubikRegular  md:text-xl text-[13px] pt-2 px-1 pb-4">
                      {subcategory.name}
                    </h3>
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-full h-44 md:h-56 rounded-md"
                    />
                    <button className="text-sm flex justify-center m-auto bg-[linear-gradient(to_right,#ff3951,#ff7b72)] rounded-md px-2  text-white py-1 mt-2 mb-1">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-primary font-poppinsBold text-center">
            No matching Service found
          </p>
        )}
      </div>

      {/* Render Modal */}
      {popup &&
        createPortal(
          <Modals
            subcategory={activeSubcategory}
            category={categories}
            setPopup={setPopup}
          />,
          document.body
        )}
    </div>
  );
};

export default Category;
