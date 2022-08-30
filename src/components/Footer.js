import React from "react";

export default function Footer() {
  return (
    <footer>
      <nav className="pb-5">
        <div className="w-[1232px] flex-1 mx-auto flex gap-x-6 pt-10">
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

          <div className="flex flex-col gap-y-4 flex-[3_1_0%]">
            <div className="text-primary-brand-color text-lg leading-[26px] font-normal">
              Getir'i keşfedin
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Hakkımızda
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Kariyer
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Teknoloji Kariyerleri
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                İletişim
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Sosyal Sorumluluk Projeleri
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 flex-[3_1_0%]">
            <div className="text-primary-brand-color text-lg leading-[26px] font-normal">
              Yardıma mı ihtiyacınız var?
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Sıkça Sorulan Sorular
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Kişisel Verilerin Korunması
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Gizlilik Politikası
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Kullanım Koşulları
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Çerez Politikası
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 flex-[3_1_0%]">
            <div className="text-primary-brand-color text-lg leading-[26px] font-normal">
              İş Ortağımız Olun
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Bayimiz Olun
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Deponuzu Kiralayın
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                GetirYemek Restoranı Olun
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                GetirÇarşı İşletmesi Olun
              </a>
            </div>
            <div className="leading-[18px]">
              <a href="#" className="text-sm text-gray-900">
                Zincir Restoranlar
              </a>
            </div>
          </div>

          <div className="flex flex-1 h-full">
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
        </div>
      </nav>
      <article>
        <div className="w-[1232px] flex mx-auto gap-x-8 py-6">
          <span className="text-sm">© 2022 Getir</span>
          <div className="text-primary-brand-color text-sm relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
            Bilgi Toplumu Hizmetleri
          </div>
          <div className="flex flex-1 justify-end">sosyal medya</div>
        </div>
      </article>
    </footer>
  );
}
