import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: "campaigns-slide",
  };

  useEffect(() => {
    setCampaigns(Banners);
  }, []);

  return (
    <section className="py-6">
      <section className="w-[1232px] mx-auto overflow-hidden">
        <Title>Kampanyalar</Title>
        <div className="w-[1248px] -ml-4">
          <Slider {...settings}>
            {campaigns &&
              campaigns.map((banner, id) => (
                <div key={id}>
                  <picture className="">
                    <img
                      alt={banner.name}
                      src={banner.image}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </picture>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </section>
  );
}
