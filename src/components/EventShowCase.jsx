import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import eventSample1 from "../components/IMG/eventSample1.png";
import eventSample2 from "../components/IMG/eventSample2.png";
import calenderIcon from "../components/IMG/calendar.svg";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "../context/context.jsx";

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

import React from "react";
import galleryHero from "../components/IMG/Fabulous gallery.png";

const EventShowCase = () => {
  console.log(useContext(AppContext));

  const { eventProductsClothes, selectedCothes, setSelectedCothes } = useContext(AppContext);

  const navigate = useNavigate();

  const navigateToEventItem = () => {
    navigate("/events/eventitem");
  };

  return (
    <div>
      <div className="w-screen h-auto relative">
        <div className="topHerobg w-full h-[50vh] relative bg-cover flex justify-center items-center bg-center" style={{ backgroundImage: `url(${galleryHero})` }}>
          <div className="bgOpacity absolute inset-0 bg-black opacity-50 z-10"></div>
          <span style={{ fontFamily: "Playfair Display" }} className="text-white font-bold text-[8vh] z-20">
            Gallery
          </span>
        </div>

        {/* <div className="eventsClothes grid grid-cols-4 gap-auto bg-white p-16"> */}
        <div className="eventsClothes grid grid-cols-4 bg-white justify-between mt-10 px-16 mt-20">
          {eventProductsClothes.map((product, index) => (
            <div
              onClick={() => {
                setSelectedCothes(index);
                navigateToEventItem();
              }}
              key={index}
              className="eventProductCard shadow-lg rounded-lg w-[21vw]  px-3 mb-6">
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
    </div>
  );
};

export default EventShowCase;
