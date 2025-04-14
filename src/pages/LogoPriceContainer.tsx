import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LogoPrice = () => {

    useEffect(() => {
            AOS.init();
          }, [])

    return (
        <>
            <section id="website-price" className="pt-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                <div className="bg-[#2b2b2b] max-w-[100%] lg:max-w-[85%] block mx-auto h-max rounded-2xl p-8 border border-gray-800 hover:border-[#22FCC1] transition-colors">
                    <div className="flex-col lg:flex-row flex gap-5 justify-between items-center">
                        <div className="row-price">
                            <div className="col-price">
                                <h1 className="text-4xl font-bold text-white mb-4">Butuh <span className='text-[#22FCC1]'>Logo</span> yang Profesional?</h1>
                                <p className="text-gray-400 mb-6">Yuk klik tombol selengkapnya untuk melihat detail layanannya</p>
                            </div>
                        </div>
                        <div className="col-price">
                        <a 
                        href='https://wa.me/62895365441554?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Sket%20Creative%0A%0ABisakah%20kita%20agendakan%20diskusi?' 
                        className="w-full py-4 px-8 rounded-full border-2 border-[#22FCC1] hover:bg-[#22FCC1] hover:text-black transition-colors">
                            Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LogoPrice;