import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "campaigns-slide",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setCampaigns(Banners);
  }, []);

  return (
    <section className="container mx-auto md:py-6">
      <div className="slider-container overflow-hidden">
        <Title>Kampanyalar</Title>
        <Slider {...settings}>
          {campaigns &&
            campaigns.map((banner, id) => (
              <div key={id}>
                <picture className="inline-block px-[3px] lg:px-1">
                  <img
                    alt={banner.name}
                    src={banner.image}
                    className="w-full h-full md:rounded-md"
                  />
                </picture>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}
