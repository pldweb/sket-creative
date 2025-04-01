import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Palette, Rocket, MessageSquare, ChevronDown, CheckCircle, Star, Quote, Instagram, Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Check, Menu, X } from 'lucide-react';
import logo from './assets/logo-sket.png'
import patternSket from './assets/sket-pattern.svg'
import heroSvg from './assets/hero.svg'
import aboutSvg from './assets/about.svg'
import bgPattern from './assets/bg-pattern.svg'


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stylePattern = {
    backgroundImage: `url(${patternSket})`,
        position: "absolute",
        top: "0",
        right: "0",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
        opacity: 0.19,
    } as React.CSSProperties;

    const bgSket = {
      backgroundImage: `url(${bgPattern})`,
    }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-1 border-slate-300 ${isScrolled ? 'bg-[#0A0A0A] shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <img src={logo} alt="" className='max-h-10' />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-[#22FCC1] transition-colors">Beranda</a>
              <a href="#about" className="hover:text-[#22FCC1] transition-colors">Tentang</a>
              <a href="#services" className="hover:text-[#22FCC1] transition-colors">Layanan</a>
              <a href="#portfolio" className="hover:text-[#22FCC1] transition-colors">Portfolio</a>
              <a href="#testimonials" className="hover:text-[#22FCC1] transition-colors">Testimonial</a>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-[#0A0A0A] z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#why-us" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Beranda</a>
                <a href="#about" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Tentang</a>
                <a href="#services" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Layanan</a>
                <a href="#portfolio" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#testimonials" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonial</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section  className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A]">
        <div style={stylePattern}></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-[50%]">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tingkatin Branding Bisnismu
              <span className="text-[#22FCC1] block">Bersama Sket Creative</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
              Solusi tingkatin branding bisnis lo buat hasil yang bikin nampol
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='https://wa.me/62895365441554?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Sket%20Creative%0A%0ABisakah%20kita%20agendakan%20diskusi?' className="bg-[#22FCC1] text-black px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#1ee5ac] transition-colors">
                Hubungi Sekarang
                <ArrowRight className="ml-2" />
              </a>
              {/* <a href='' className="border-2 border-[#22FCC1] px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#22FCC1] hover:text-black transition-colors">
                Lihat Projek Kami
                <ArrowRight className="ml-2" />
              </a> */}
            </div>
          </div>
          <div className="hidden lg:w-[50%] lg:block">
            <img src={heroSvg} alt="" className='w-full'/>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown size={32} className="text-[#22FCC1]" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-16 text-center">Kenapa Harus <span className='text-[#22FCC1]'>Sket Creative</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            <WhyUsCard 
              title="Harga Terbaik"
              description="Kami menawarkan harga yang terbaik agar mudah dijangkau seluruh UMKM"
            />
            <WhyUsCard 
              title="Konversi Jadi Client"
              description="Mengubah leads menjadi client hanya dengan digitalisasi bisnis"
            />
            <WhyUsCard 
              title="Pelayanan Terbaik"
              description="Kami aktif dengan pelayanan yang memuaskan customer agar terjadi repeat order"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutSvg}
                alt="Our Team"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6">Tentang <span className='text-[#22FCC1]'>Sket Creative</span></h3>
              <p className="text-gray-400 mb-6">
              Kami hadir dengan visi membantu UMKM di seluruh Indonesia meraih kesuksesan di dunia digital. Lewat layanan kami, UMKM bisa Go Digital dengan lebih mudah, tak hanya melalui konten kreatif di media sosial, tetapi juga dengan website yang menarik, profesional, dan mampu meningkatkan interaksi serta konversi pelanggan
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>Tim Berpengalaman</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>20+ Projek Dikerjakan</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>100% On-Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-16 text-center">Layanan Yang Kami <span className='text-[#22FCC1]'>Sediakan</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Palette />}
              title="Jasa Kelola Sosmed IG"
              description="Memberikan strategi konten untuk meningkatkan konversi penjualan Anda melalui media sosial bisnis Anda
"
            />
            <ServiceCard 
              icon={<Code2 />}
              title="Jasa Pembuatan Website Profesional"
              description="Memberikan layanan pembuatan website untuk menampilkan bisnis Anda agar lebih profesional"
            />
            <ServiceCard 
              icon={<Rocket />}
              title="Jasa Digital Marketing"
              description="Memberikan layanan digital marketing untuk membantu bisnis Anda menjangkau lebih banyak calon customer"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-16 text-center">Portfolio <span className='text-[#22FCC1]'>Sket Creative</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            <WorkCard 
              image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80"
              title="Kelola Instagram Bisnismu"
              category="Social Media Management"
            />
            <WorkCard 
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80"
              title="Digitalisasi Website"
              category="Web Development"
            />
            <WorkCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Marketing Campaign"
              category="Digital Marketing"
            />
            <WorkCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Marketing Campaign"
              category="Digital Marketing"
            />
            <WorkCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Marketing Campaign"
              category="Digital Marketing"
            />
            <WorkCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Marketing Campaign"
              category="Digital Marketing"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-4 text-center">Paket Layanan Kami</h3>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Sesuaikan kebutuhan bisnis Anda dengan paket yang beragam. Adapun untuk diluar komponen yang ada dapat konsultasi terlebih dahulu
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-[#0A0A0A] h-max rounded-2xl p-8 border border-gray-800 hover:border-[#22FCC1] transition-colors">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Growth</h4>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">Rp 1.499.000</span>
                  <span className="text-gray-400 ml-2">/project</span>
                </div>
                <p className="text-gray-400">Cocok untuk yang baru memulai digital</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>15 Feed Instagram Post</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>10 Instastory</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Brief dari client</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Include Konsep Sosmed</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Research Hastags</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Copywritting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Highlight Cover</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Ebook Sales & Digital Marketing</span>
                </li>
              </ul>
              
              <a href='https://wa.me/62895365441554?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Sket%20Creative%0A%0ABisakah%20kita%20agendakan%20diskusi?' className="w-full py-4 px-8 rounded-full border-2 border-[#22FCC1] hover:bg-[#22FCC1] hover:text-black transition-colors">
                Mulai Sekarang
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border-2 border-[#22FCC1] relative transform hover:-translate-y-2 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#22FCC1] text-black px-4 py-1 rounded-full text-sm font-bold">
                  Pilihan Terbaik
                </span>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Prestige</h4>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">Rp 2.999.000</span>
                </div>
                <p className="text-gray-400">Cocok untuk bisnis besar yang ingin membangun brand</p>
              </div>
              
              <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>30 Feed Instagram Post</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>15 Instastory</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Refinement Logo</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Brief dari client (opsional)</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Include Konsep Sosmed</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Research Hastags</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>6 Video Content</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Social Media Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Account Manager</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Editorial Planner</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Social Media Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>5 Instastory</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Copywritting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Highlight Cover</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Ebook Sales & Digital Marketing</span>
                </li>
              </ul>
              
              <a href='https://wa.me/62895365441554?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Sket%20Creative%0A%0ABisakah%20kita%20agendakan%20diskusi?' className="w-full py-4 px-8 rounded-full bg-[#22FCC1] text-black hover:bg-[#1ee5ac] transition-colors">
                Mulai Sekarang
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#0A0A0A] h-max rounded-2xl p-8 border border-gray-800 hover:border-[#22FCC1] transition-colors">
            <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Scale Up</h4>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">Rp 2.499.000</span>
                  <span className="text-gray-400 ml-2">/project</span>
                </div>
                <p className="text-gray-400">Cocok untuk yang ingin bisnisnya aktif lewat konten</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>20 Feed Instagram Post</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>10 Instastory</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Brief dari client (opsional)</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Include Konsep Sosmed</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Research Hastags</span>
                </li>
                <li className="flex items-center">
                <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>4 Video Content</span>
                </li>
                <li className="flex items-center">
                <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>5 Instastory</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Copywritting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Highlight Cover</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#22FCC1] mr-2">Free</span>
                  <span>Ebook Sales & Digital Marketing</span>
                </li>
              </ul>
              
              <a href='https://wa.me/62895365441554?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Sket%20Creative%0A%0ABisakah%20kita%20agendakan%20diskusi?' className="w-full py-4 px-8 rounded-full border-2 border-[#22FCC1] hover:bg-[#22FCC1] hover:text-black transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 relative">
        <div style={bgSket} className='w-full bg-cover h-full block absolute left-0 top-0 bg-no-repeat opacity-[0.04]'></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h3 className="text-4xl font-bold mb-16 text-center">Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="John Smith"
              role="CEO, Tech Corp"
              rating={5}
              text="Working with Digital.co was a game-changer for our business. Their expertise and dedication are unmatched."
            />
            <TestimonialCard 
              name="Sarah Johnson"
              role="Marketing Director"
              rating={5}
              text="The team's creativity and technical skills helped us achieve our digital transformation goals ahead of schedule."
            />
            <TestimonialCard 
              name="Mike Brown"
              role="Startup Founder"
              rating={5}
              text="Exceptional service and results. They truly understand what it takes to succeed in the digital space."
            />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">Siap untuk menjadi pengusaha naik kelas?</h3>
            <p className="text-xl text-gray-400 mb-8">
              Diskusikan sekarang biar bisnismu go digital
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href='https://wa.me/62895365441554?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Sket%20Creative%0A%0ABisakah%20kita%20agendakan%20diskusi?' className="bg-[#22FCC1] text-black px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#1ee5ac] transition-colors">
                Jadwalkan Konsultasi
                <MessageSquare className="ml-2" />
              </a>
              <a href='https://wa.me/62895365441554?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sket%0A%0ABisakah%20jelaskan%20lebih%20detail%20lagi?' className="border-2 border-[#22FCC1] px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#22FCC1] hover:text-black transition-colors">
                Hubungi Kami
                <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-[#111111] pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <img src={logo} className='max-h-10 mb-6' alt="" />

              <p className="text-gray-400 mb-6">
                #sepaketwithsket
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#22FCC1] hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-[#22FCC1] hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Informasi Cepat</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Tentang</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Layanan</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Testimonial</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Layanan Disediakan</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Jasa Pembuatan Website</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Jasa Digital Marketing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Brand Strategy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Jasa Kelola Sosmed</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">SEO Optimization</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-[#22FCC1] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-400">
                    Jl. Condet Raya, Kel. Balekambang, Kec. Kramat Jati Jakarta Timur, 14350
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-[#22FCC1] flex-shrink-0" size={20} />
                  <span className="text-gray-400">+62 8953-6544-1554</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-[#22FCC1] flex-shrink-0" size={20} />
                  <span className="text-gray-400">support@sketcreative.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Sket Creative All rights reserved
              </p>
              <div className="flex space-x-6">                
                <a href="#" className="text-gray-400 hover:text-[#22FCC1] text-sm transition-colors">
                  Kebijakan Privasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WhyUsCard({ title, description }: {title: string, description: string}) {
  return (
    <div className="p-8 bg-[#111111] rounded-2xl hover:bg-[#151515] transition-colors border border-[#22FCC1]/10">
      <div className="text-[#22FCC1] mb-4">
        <CheckCircle size={48} />
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ServiceCard({ icon, title, description }: {icon: any, title: any, description: any}) {
  return (
    <div className="p-8 bg-[#111111] rounded-2xl hover:bg-[#151515] transition-colors">
      <div className="text-[#22FCC1] mb-4 w-12 h-12">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function WorkCard({ image, title, category }: {image: any, title: any, category: any}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img 
        src={image} 
        alt={title}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
        <div>
          <h4 className="text-2xl font-bold mb-2">{title}</h4>
          <p className="text-[#22FCC1]">{category}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, rating, text }: {name: string, role: string, rating: number, text: string}) {
  return (
    <div className="p-8 bg-[#111111] rounded-2xl hover:bg-[#151515] transition-colors">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="text-[#22FCC1] fill-[#22FCC1]" />
        ))}
      </div>
      <Quote className="text-[#22FCC1] mb-4" size={32} />
      <p className="text-gray-400 mb-6">{text}</p>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-[#22FCC1] text-sm">{role}</p>
      </div>
    </div>
  );
}

export default App;