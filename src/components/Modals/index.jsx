import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Modals = ({ subcategory, setPopup }) => {
  if (!subcategory) return null; // Return null if subcategory data is missing

  // Prevent background scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e) => {
    // Close the modal when clicking the overlay
    if (e.target === e.currentTarget) {
      setPopup(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick} // Handle clicks on the overlay
    >
      <div
        className="bg-[#f6eafd] p-8 md:p-14 rounded-lg w-[95%] md:w-[60%] max-h-[calc(100%-2rem)] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6 items-center">
          <div className="md:w-3/5">
            <h2 className="text-3xl font-rubikMedium mb-6">
              {subcategory.name}
            </h2>
            <p className="text-gray-600 font-rubikLight mb-4">
              {subcategory.desc || "No description available"}
            </p>
            <p className="text-xl md:text-2xl mb-6">
              <strong className="pr-1 font-rubikMedium">Address:</strong>
              <span className="text-gray-600 text-lg md:text-2xl font-rubikLight">
                {subcategory.address}
              </span>
            </p>
            <p className="text-xl md:text-2xl font-rubikMedium">
              <strong className="pr-1">Contact: </strong> <span className="text-gray-600 text-lg md:text-2xl font-rubikLight">{subcategory.contact}</span>
            </p>
            <button className="text-white px-4 py-1 bg-[linear-gradient(to_right,#ff3951,#ff7b72)] rounded-md mt-4">
                 Get this service
                </button>
          </div>
          <div className="w-full md:w-2/5">
            {subcategory.image && (
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className="w-full h-48 md:h-[400px] rounded-md"
              />
            )}
          </div>
        </div>
        <RxCross2
          onClick={() => setPopup(false)}
          className="absolute text-2xl md:text-4xl top-2 right-2 text-primary cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Modals;
