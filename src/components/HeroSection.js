import { useWindowWidth } from "@react-hook/window-size";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const windowWidth = useWindowWidth();

  const customLabels = {
    TR: { primary: "+90" },
    US: { primary: "+1" },
  };

  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="md:overflow-hidden md:relative md:h-[500px] md:before:bg-gradient-to-r md:before:from-primary-brand-color md:before:to-transparent md:before:absolute md:before:w-full md:before:h-full md:before:z-10">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div className="focus:outline-none">
            <img
              className="w-full h-[500px] object-cover"
              alt="Hero section"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            />
          </div>
          <div className="focus:outline-none">
            <img
              className="w-full h-[500px] object-cover"
              alt="Hero section"
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            />
          </div>
        </Slider>
      )}

      <div className="container mx-auto h-full flex items-center justify-between md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:z-20">
        {/* left */}
        <div className="hidden md:block md:ml-2 lg:ml-0">
          <figure className="w-[180px] h-[180px]">
            <img
              className="w-full h-full"
              alt="getir"
              src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            ></img>
          </figure>
          <div>
            <h1 className="w-auto lg:w-[350px] text-4xl mt-10 text-white font-semibold">
              Dakikalar içinde kapınızda
            </h1>
          </div>
        </div>

        {/* right */}
        <div className="w-full bg-brand-white-color flex flex-col flex-shrink-0 py-6 px-4 rounded-lg md:mr-2 md:w-[400px] lg:mr-0 lg:px-[18px] xl:p-6">
          <h5 className="text-brand-color text-center font-semibold mb-[15px]">
            Giriş yap veya kayıt ol
          </h5>
          <form>
            <div className="flex gap-x-2 mb-3">
              <div className="w-[109px] h-14">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  customLabels={customLabels}
                  countries={["TR", "US"]}
                  className="menu-flag"
                  selectButtonClassName="menu-flags-button"
                />
              </div>
              <div className="relative h-14 flex flex-1 flex-col">
                <input
                  required
                  maxLength={10}
                  className="w-full min-h-full border-2 border-gray-300 pt-2.5 px-3.5 text-sm transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none rounded peer"
                />
                <label className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium select-none pointer-events-none transition-all peer-focus:text-brand-color peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-valid:text-brand-color peer-valid:top-1 peer-valid:translate-y-0 peer-valid:text-xs">
                  Telefon Numarası
                </label>
              </div>
            </div>
            <button className="w-full h-12 bg-brand-yellow-color text-primary-brand-color px-4 py-3.5 text-sm font-semibold rounded-lg transition-colors hover:bg-primary-brand-color hover:text-brand-yellow-color">
              Telefon numarası ile devam et
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
