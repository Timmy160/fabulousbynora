import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";
import calenderIcon from "../components/IMG/calendar.svg";
import cancelButton from "../components/IMG/cancelIcon.svg";

const EventItemShowCase = () => {
  const { eventProductsClothes, selectedCothes } = useContext(AppContext);
  const [showImage, setShowImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  console.log(useContext(AppContext));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewImage = (image) => {
    setShowImage(true);
    setSelectedImage(image);
  };

  return (
    <>
      {showImage && (
        <div className="seeImage h-screen w-screen fixed top-0 left-0 z-50 bg-[#000000CC] flex justify-center items-center">
          <img src={selectedImage} alt={""} className="max-w-full max-h-full object-contain" />
          {/* <div className="imageContainer w-[80vw] h-[80vh] bg-white rounded-lg flex justify-center items-center">
        </div> */}
          <div className="cancelButton absolute top-[2rem] right-[2rem] cursor-pointer" onClick={() => setShowImage(false)}>
            <img src={cancelButton} className="w-5 h-5" alt="Cancel" />
          </div>
        </div>
      )}
      <div className="px-16 my-8">
        <div className="title ">
          <span className="text-[#00000066]">Gallery</span> / {eventProductsClothes[selectedCothes]?.name}
        </div>
        <div className="eventsClothes grid grid-cols-4 bg-white justify-between mt-10 ">
          {eventProductsClothes
            .filter((product, index) => product.name === eventProductsClothes[selectedCothes].name)
            .map((product, index) => (
              <div onClick={() => handleViewImage(product.image)} key={index} className="eventProductCard shadow-lg rounded-lg w-[21vw] px-3 mb-6">
                <img src={product.image} alt={product.name} className="eventProductImage w-full h-[40vh]" />
                <div className="flex justify-between p-5">
                  <div className="" style={{ fontFamily: "Playfair Display" }}>
                    {product.name}
                  </div>
                  <div style={{ fontFamily: "Manrope" }} className="">
                    {product.no_ofImages} Images
                  </div>
                </div>
                <div className="flex pb-5 px-5 items-center">
                  <img src={calenderIcon} alt="Calendar Icon" className="w-5 h-5" />
                  <div className="ml-2 text-[#00000080]" style={{ fontFamily: "Manrope" }}>
                    {product.date}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EventItemShowCase;
