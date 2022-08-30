import React from "react";

export default function MobileApp() {
  return (
    <section className="w-[1232px] h-[312px] flex bg-primary-brand-color bg-mobile-app mx-auto rounded-lg overflow-hidden">
      <div className="w-[400px] h-full flex flex-col justify-center text-white ml-12">
        <h2 className="text-[26px] font-bold">Getir'i indirin!</h2>
        <span className="max-w-[360px] font-bold mt-3">
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </span>
        <nav className="w-[496px] flex gap-x-2 pt-8">
          <a href="#" className="w-40 h-13">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a href="#" className="w-40 h-13">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a href="#" className="w-40 h-13">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </nav>
      </div>
      <figure className="relative w-[605px] h-72 -bottom-1 mt-auto ml-auto">
        <img
          className="absolute w-full h-full object-contain"
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
        />
      </figure>
    </section>
  );
}
