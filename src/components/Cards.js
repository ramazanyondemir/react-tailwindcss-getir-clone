import React from "react";

export default function Cards() {
  return (
    <section className="w-[1232px] flex gap-x-4 mt-14 mb-16 mx-auto">
      <div className="bg-white flex flex-col justify-center items-center pt-[60px] pb-[40px] px-4 w-[400px] h-[353px] shadow-lg shadow-slate-200 rounded-lg">
        <figure className="flex justify-center items-center w-[150px] h-[150px]">
          <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" />
        </figure>
        <span className="text-center mt-6 text-lg font-semibold text-primary-brand-color">
          Her siparişinize bir kampanya
        </span>
        <span className="text-center mt-2 text-[15px] text-gray-600">
          Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
        </span>
      </div>

      <div className="bg-white flex flex-col justify-center items-center pt-[60px] pb-[40px] px-4 w-[400px] h-[353px] shadow-lg shadow-slate-200 rounded-lg">
        <figure className="flex justify-center items-center w-[150px] h-[150px]">
          <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" />
        </figure>
        <span className="text-center mt-6 text-lg font-semibold text-primary-brand-color">
          Dakikalar içinde kapınızda
        </span>
        <span className="text-center mt-2 text-[15px] text-gray-600">
          Getir’le siparişiniz dakikalar içinde kapınıza gelir.
        </span>
      </div>

      <div className="bg-white flex flex-col justify-center items-center pt-[60px] pb-[40px] px-4 w-[400px] h-[353px] shadow-lg shadow-slate-200 rounded-lg">
        <figure className="flex justify-center items-center w-[150px] h-[150px]">
          <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" />
        </figure>
        <span className="text-center mt-6 text-lg font-semibold text-primary-brand-color">
          Binlerce çeşit mutluluk
        </span>
        <span className="text-center mt-2 text-[15px] text-gray-600">
          Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
        </span>
      </div>
    </section>
  );
}
