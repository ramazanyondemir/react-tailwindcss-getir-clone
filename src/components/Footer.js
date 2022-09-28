import React from "react";
import MenuLink from "./ui/MenuLink";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Collapse } from "react-collapse";

export default function Footer() {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Teknoloji Kariyerleri",
        },
        {
          title: "İletişim",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkca Sorular Sorular",
        },
        {
          title: "Kişisel Verilerin Korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım Koşulları",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu Kiralayın",
        },
        {
          title: "GetirYemek Restoranı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi Olun",
        },
        {
          title: "Zincir Restoranlar",
        },
      ],
    },
  ];
  return (
    <footer className="bg-white">
      <section className="container mx-auto flex flex-col md:flex-row gap-y-3 md:gap-x-6 pt-10">
        <div className="flex flex-col flex-[3_1_0%] gap-y-4">
          <div className="text-primary-brand-color text-lg font-normal">
            Getir'i indirin!
          </div>
          <a href="#">
            <figure>
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            </figure>
          </a>
          <a href="#">
            <figure>
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            </figure>
          </a>
          <a href="#">
            <figure>
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
            </figure>
          </a>
        </div>
        {menus.map((menu, index) => (
          <MenuLink key={index} {...menu} />
        ))}
        <div className="hidden lg:flex lg:flex-1 lg:h-full">
          <div className="bg-white rounded-lg shadow-md">
            <a href="#" className="block p-4">
              <figure className="w-[72px] h-[84px]">
                <img
                  src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
                  className="w-full h-full object-contain "
                />
              </figure>
            </a>
          </div>
        </div>
      </section>
      <article>
        <div className="container flex flex-col items-center gap-y-2 mx-auto py-6 md:flex-row">
          <span className="flex items-center text-sm">© 2022 Getir</span>
          <div className="flex items-center text-primary-brand-color text-sm md:ml-8 md:relative md:before:w-[3px] md:before:h-[3px] md:before:bg-black md:before:absolute md:before:-left-4 md:before:top-1/2 md:before:-translate-y-1/2 md:before:rounded-full">
            Bilgi Toplumu Hizmetleri
          </div>

          <div className="flex flex-1 justify-end gap-x-[10px]">
            <a
              href="#"
              className="w-8 h-8 text-gray-500 flex items-center justify-center rounded-lg transition-colors hover:bg-gray-200 hover:text-secondary-brand-color"
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 text-gray-500 flex items-center justify-center rounded-lg transition-colors hover:bg-gray-200 hover:text-secondary-brand-color"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 text-gray-500 flex items-center justify-center rounded-lg transition-colors hover:bg-gray-200 hover:text-secondary-brand-color"
            >
              <BsInstagram size={20} />
            </a>
          </div>
          <button className="flex items-center h-8 ml-3 text-gray-500 tracking-tight text-sm border border-gray-200 rounded-lg gap-x-2 px-[10px] transition-colors hover:border-transparent hover:text-primary-brand-color hover:bg-gray-200">
            <TbWorld size={18} />
            <span className="block md:hidden lg:block">Türkçe (TR)</span>
          </button>
        </div>
      </article>
    </footer>
  );
}
