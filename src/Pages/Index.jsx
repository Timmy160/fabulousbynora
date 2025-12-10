import React from "react";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import ProductSection from "../components/ProductSection";
import CategoryBanner from "../components/CategoryBanner";

// Images
import newArrival1 from "../components/IMG/newarrival1.jpg";
import newArrival2 from "../components/IMG/newarrival2.jpg";
import newArrival3 from "../components/IMG/newarrival3.jpg";
import newArrival4 from "../components/IMG/newarrival4.jpg";
import KidsBgImg from "../components/IMG/kidsbgImg.jpg";
import Jewelry1 from "../components/IMG/jewelry1.jpg";
import Jewelry2 from "../components/IMG/jewelry2.jpg";
import Jewelry3 from "../components/IMG/jewelry3.jpg";
import Jewelry4 from "../components/IMG/jewelry4.jpg";
import MenCategory from "../components/IMG/mencategory.jpg";
import WomenCategory from "../components/IMG/womencategory.jpg";

const Index = () => {
  const newArrivals = [
    { id: 1, image: newArrival1, title: "Ankara Fabric For Ladies", price: 300 },
    { id: 2, image: newArrival2, title: "Ankara Fabric For Ladies", price: 100 },
    { id: 3, image: newArrival3, title: "Ankara Fabric For Ladies", price: 100 },
    { id: 4, image: newArrival4, title: "Ankara Fabric For Ladies", price: 100 },
  ];

  const queensCollection = [
    { id: 5, image: newArrival3, title: "Ankara Fabric For Ladies", price: 300 },
    { id: 6, image: newArrival1, title: "Ankara Fabric For Ladies", price: 100 },
    { id: 7, image: newArrival4, title: "Ankara Fabric For Ladies", price: 100 },
    { id: 8, image: newArrival2, title: "Ankara Fabric For Ladies", price: 100 },
  ];

  const accessories = [
    { id: 9,  image: Jewelry1, title: "Gold Necklace Set", price: 180 },
    { id: 10, image: Jewelry2, title: "Pearl Earrings", price: 120 },
    { id: 11, image: Jewelry3, title: "Diamond Ring", price: 850 },
    { id: 12, image: Jewelry4, title: "Silver Bracelet", price: 95 },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="w-full">
        <Hero />
      </div>

      <main className="w-full">
        {/* New Arrivals */}
        <section className="pt-8 pb-12">
          <ProductSection title="New Arrivals" products={newArrivals} />
        </section>

        {/* Men & Women Category */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            <CategoryBanner
              title={
                <span className="text-1xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Men
                </span>
              }
              image={MenCategory}
            />
            <CategoryBanner
              title={
                <span className="text-1xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Women
                </span>
              }
              image={WomenCategory}
            />
          </div>
        </section>

        {/* Queens Collection */}
        <section className="pb-12">
          <ProductSection title="The Queens Collection" products={queensCollection} />
        </section>

        {/* Kids Banner */}
        <section className="w-full">
          <HeroBanner title="Kids" image={KidsBgImg} />
        </section>

        {/* Accessories */}
        <section className="pt-12 pb-16">
          <ProductSection title="Complete Your Look" products={accessories} />
        </section>
      </main>
    </div>
  );
};

export default Index;