import { useWindowWidth } from "@react-hook/window-size";
import { TiLocation } from "react-icons/ti";
import { HiChevronRight } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const windowWidth = useWindowWidth();

  const settings = {
    arrows: false,

    autoplaySpeed: 3000,
    autoplay: true,
    Infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    veriableWidth: true,
    className: "campaigns-slide",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
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
    <section className="w-full md:container mx-auto md:py-6">
      <div className="md:px-0 overflow-hidden">
        <div className="hidden md:block">
          <Title>Kampanyalar</Title>
        </div>
        {windowWidth <= 767 && (
          <div className="flex-1 px-1">
            <button className="w-full h-10 flex items-center">
              <div className="w-6 h-6 flex justify-center items-center">
                <TiLocation size={17} className="text-primary-brand-color" />
              </div>
              <div className="flex-1 font-semibold text-left text-sm text-gray-700">
                Teslimat Adresi Belirle
              </div>
              <div className="w-6 h-6 flex justify-center items-center">
                <HiChevronRight size={17} />
              </div>
            </button>
          </div>
        )}
        <Slider {...settings}>
          {campaigns &&
            campaigns.map((banner, id) => (
              <div key={id}>
                <picture className="block md:px-1">
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
