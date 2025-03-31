import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Palette, Rocket, MessageSquare, ChevronDown, CheckCircle, Users, Star, Quote, Instagram, Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Check, Menu, X } from 'lucide-react';
import logo from './assets/logo-sket.png'
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

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A] shadow-lg' : 'bg-transparent'}`}>
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
                <a href="#why-us" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Why Us</a>
                <a href="#about" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#services" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#portfolio" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#testimonials" className="text-xl hover:text-[#22FCC1] transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10"></div>
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://www.youtube.com/watch?v=-jokuknAtu8&pp=ygUOZGlnaXRhbCBhZ2VuY3k%3D" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="w-full text-center flex justify-center items-center flex-col">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Coming Soon              
              <span className="text-[#22FCC1] block">#SepaketWithSket</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
               Tingkatkan media sosial Lo buat hasil yang lebih nampol
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hidden">
              <button className="bg-[#22FCC1] text-black px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#1ee5ac] transition-colors">
                Hubungi Sekarang
                <ArrowRight className="ml-2" />
              </button>
              <button className="border-2 border-[#22FCC1] px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#22FCC1] hover:text-black transition-colors">
                Lihat Projek Kami
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </header>

      
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