import React, { useEffect } from "react";
import { useState } from "react";
import eventSample1 from "../components/IMG/eventSample1.png";
import eventSample2 from "../components/IMG/eventSample2.png";
import galleryHero from "../components/IMG/Fabulous gallery.png";
import calenderIcon from "../components/IMG/calendar.svg";
import { Outlet } from "react-router-dom";
import EventShowCase from "../components/EventShowCase";
import EventItem from "../components/EventItemShowCase";

const Events = () => {
  const [isEventActive, setIsEventActive] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Events;
