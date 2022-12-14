import React from "react";

export default function MobileApp() {
  return (
    <section className="md:container md:mx-auto pb-10">
      <section className="flex justify-between h-[312px] bg-primary-brand-color overflow-hidden md:rounded-lg md:bg-mobile-app">
        <div className="flex flex-col justify-center ml-5 md:ml-12">
          <div className="w-[400px] flex flex-col justify-center text-white">
            <h2 className="text-[26px] font-bold">Getir'i indirin!</h2>
            <span className="max-w-[360px] font-bold mt-3">
              İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
            </span>
          </div>
          <nav className="flex flex-col md:flex-row gap-2 pt-8">
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
        <figure className="hidden md:block min-w-[605px] !h-[288px] -mb-1 self-end">
          <img
            className="w-full h-full object-contain"
            src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          />
        </figure>
      </section>
    </section>
  );
}
