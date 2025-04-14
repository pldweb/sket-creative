import { useEffect, useState } from "react";
import WebsitePrice from "./JasaWebsite/WebsitePrice";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebsitePriceContainer = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggle = () => {
        setShowDetails(!showDetails);
    }

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <section id="website-price" className="pt-12 pb-7" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                <div className="bg-[#2b2b2b] max-w-[100%] lg:max-w-[85%] block mx-auto h-max rounded-2xl p-8 border border-gray-800 hover:border-[#22FCC1] transition-colors">
                    <div className="flex-col lg:flex-row flex gap-5 justify-between lg:items-center">
                        <div className="row-price">
                            <div className="col-price">
                                <h1 className="text-4xl font-bold text-white mb-4">Butuh Layanan <span className='text-[#22FCC1]'>Website?</span></h1>
                                <p className="text-gray-400 mb-6">Yuk klik tombol selengkapnya untuk melihat detail layanannya</p>
                            </div>
                        </div>
                        <div className="col-price">
                            <button
                                onClick={handleToggle}
                                className="w-full py-4 px-8 rounded-full border-2 border-[#22FCC1] hover:bg-[#22FCC1] hover:text-black transition-colors text-white"
                            >
                                {showDetails ? 'Tutup Detail' : 'Selengkapnya'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Munculkan komponen detail hanya jika tombol diklik */}
                {showDetails && <WebsitePrice />}
            </section>
        </>
    );
}


export default WebsitePriceContainer;