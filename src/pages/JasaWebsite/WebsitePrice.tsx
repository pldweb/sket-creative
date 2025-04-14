import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
Swiper.use([Navigation]);

const WebsitePrice = () => {

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth <= 991 && typeof Swiper !== "undefined") {
            const nextBtn = document.querySelector("#navBtnRight");
            const prevBtn = document.querySelector("#navBtnLeft");
            const slider = document.querySelector("#pricingTableSlider");

            console.log("Slider:", slider, "Next:", nextBtn, "Prev:", prevBtn);


          new Swiper("#pricingTableSlider", {
            slidesPerView: "auto",
            spaceBetween: 5,
            grabCursor: true,
            keyboard: true,
            autoHeight: false,
            navigation: {
              nextEl: "#navBtnRight",
              prevEl: "#navBtnLeft",
            },
          });
        }
        
      }, []);

      
    const packages = [
        {
          name: "Sket Basic",
          features: [true, true, false, false, false, false, false, false, true, true, true, true, "2 - 4 Hari", "+250rb"],
          price: "Rp799rb",
          url: "https://wa.me/6281212375467?text=Halo%2C%20saya%20ingin%20aktivasi%20sistem%20AK%20Starter.%20Bagaimana%20caranya%3F",
        },
        {
          name: "Sket Medium",
          features: [true, true, true, true, false, true, false, false, true, true, true, true, "2 - 6 Hari", "+250rb"],
          price: "Rp989rb",
          url: "https://wa.me/6281212375467?text=Halo%2C%20saya%20ingin%20aktivasi%20sistem%20AK%20Medium.%20Bagaimana%20caranya%3F",
        },
        {
          name: "Sket Hard",
          features: [true, true, true, true, true, true, true, true, true, true, true, true, "2 - 8 Hari", "+250rb"],
          price: "Rp1.2jt",
          url: "https://wa.me/6281212375467?text=Halo%2C%20saya%20ingin%20aktivasi%20sistem%20AK%20Advanced.%20Bagaimana%20caranya%3F",
          recommend: true,
        },
      ];
    
      const featuresList = [
        "Desain UI/UX Responsif	",
        "Request Tampilan Website",
        "Sistem Keranjang & Checkout",
        "Integrasi Payment Gateway",
        "Integrasi Ongkir Otomatis",
        "Dashboard Admin",
        "Manajemen Diskon",
        "Aplikasi Android",
        "SEO & Optimasi Kecepatan",
        "Domain .COM & Hosting 1 tahun",
        "Web Mobile Friendly",
        "Support Teknis",
        "Estimasi Waktu Pengerjaan",
        "Request Fitur Tambahan",
        "Harga"
      ];
      
      
    return(
        <section className="container w-full" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
            <div className="wrapper relative max-w-[100%] vertical-align-top">
                <div className="inner">
                    <div className="flex justify-center items-center">
                        <div className="pricing-table flex m-[30px] bg-[#2b2b2b] align-middle text-white w-full lg:max-w-[85%] rounded-2xl mx-auto border border-gray-800 hover:border-[#22FCC1] transition-colors">
                        <div className="pt-title lg:max-w-[25%] max-w-[50%] flex-1">
                            <div className="pt-title-wrap mt-5 relative align-start md:p-6 p-3  md:text-[18px] text-[15px] text-center">
                                {featuresList.map((feature, i) => (
                                    <div className="first:mt-[72px] first:min-h-[70px] mt-0 py-2 flex flex-col border-b-2 border-[#ffffff1a] justify-center text-left min-h-[72px] lg:pl-7 pl-0 pr[4px]" key={i}>{feature}</div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-option max-w-[50%] lg:max-w-[100%] lg:w-full relative flex-1 text-black md:p-5 p-3">
                            <div className="pt-option-mobile-nav absolute lg:top-0 bottom-auto left-0 right-auto lg:hidden lg:w-full flex justify-between items-center top-[40px] w-[110%] ml-[-5%]">
                                <a id="navBtnLeft" href="#" className="mobile-nav-btn flex justify-center items-center w-[40px] h-[40px] bg-[#22FCC1] z-10 rounded-full">←</a>
                                <a id="navBtnRight" href="#" className="mobile-nav-btn flex justify-center items-center w-[40px] h-[40px] bg-[#22FCC1] z-10 rounded-full">→</a>
                            </div>
                            <div className="pt-option-slider swiper bg-[#0a0a0a] rounded-[25px] " id="pricingTableSlider">
                            <div className="swiper-wrapper">
                                {packages.map((pkg, i) => (
                                <div className="swiper-slide pt-option-item lg:flex-1 flex-none lg:w-auto max-w-[100%] w-full lg:max-w-[33.333%] mr-0 " key={i}>
                                    <div className={`pt-item relative flex flex-column justify-start mb-0 overflow-hidden rounded-[24px] ${pkg.recommend ? "recommend" : ""}`}>
                                    <div className="pt-item-wrap flex-1 align-middle items-center flex flex-col justify-center text-center lg:px-[24px] lg:py-[24px] px-[8px] py-[24px] ">
                                        <div className="pt-row text-black bg-[#22FCC1] w-[80%] mx-auto my-0 rounded-lg flex flex-col justify-center min-h-[62.8px] px-[16px] md:text-[20px] text-[16px] border-b-2 border-[#49484a1a] font-semibold">{pkg.name}</div>
                                        {pkg.features.map((item, j) => (
                                            <div
                                                className="pt-row flex flex-col justify-center min-h-[72.8px] px-[16px] text-[20px] border-b-2 border-[#e2e2e217] font-semibold"
                                                key={j}
                                            >
                                                {item === true ? (
                                                <FaCheck className="text-[#22FCC1]" />
                                                ) : item === false ? (
                                                <FaXmark className="text-[#fc2222] text-[24px]" />
                                                ) : (
                                                <span className='text-white'>{item}</span>
                                                )}
                                            </div>
                                        ))}

                                        <div className="pt-row price text-white text-[33px] font-bold mt-2">
                                            <p>{pkg.price}</p>
                                        </div>
                                        <div className="pt-row last bg-[#22FCC1] text-black px-8 py-2 rounded-lg mt-2">
                                        <a href={pkg.url} className='font-bold'>Pesan</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default WebsitePrice;