import { createContext } from "react";
import { useState } from "react";
import eventSample1 from "../components/IMG/eventSample1.png";
import eventSample2 from "../components/IMG/eventSample2.png";
import sample3 from "../components/IMG/sample3.png";
import sample4 from "../components/IMG/sample4.png";
import sample5 from "../components/IMG/sample5.png";
import sample6 from "../components/IMG/sample6.png";
import sample7 from "../components/IMG/sample7.png";
import sample8 from "../components/IMG/sample8.png";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [selectedCothes, setSelectedCothes] = useState(0);
  const eventProductsClothes = [
    { name: "StreetOuk", image: eventSample1, no_ofImages: 16, date: "12-04-2026" },
    { name: "Balancing", image: eventSample2, no_ofImages: 16, date: "12-04-2026" },
    { name: "StreetOuk", image: sample4, no_ofImages: 16, date: "12-04-2026" },
    { name: "Korede", image: sample3, no_ofImages: 16, date: "12-04-2026" },
    { name: "StreetOuk", image: sample4, no_ofImages: 16, date: "12-04-2026" },
    { name: "Balancing", image: sample5, no_ofImages: 16, date: "12-04-2026" },
    { name: "Optimuz", image: sample7, no_ofImages: 16, date: "12-04-2026" },
    { name: "StreetOuk", image: sample6, no_ofImages: 16, date: "12-04-2026" },
    { name: "StreetOuk", image: sample4, no_ofImages: 16, date: "12-04-2026" },
    { name: "StreetOuk", image: sample8, no_ofImages: 16, date: "12-04-2026" },
  ];

  return <AppContext.Provider value={{ eventProductsClothes, selectedCothes, setSelectedCothes }}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };

export default AppProvider;
