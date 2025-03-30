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
              <a href="#why-us" className="hover:text-[#22FCC1] transition-colors">Why Us</a>
              <a href="#about" className="hover:text-[#22FCC1] transition-colors">About</a>
              <a href="#services" className="hover:text-[#22FCC1] transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[#22FCC1] transition-colors">Portfolio</a>
              <a href="#testimonials" className="hover:text-[#22FCC1] transition-colors">Testimonials</a>
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
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tingkatkan Media Sosial Bisnismu
              <span className="text-[#22FCC1] block">Bersama Sket Creative</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
              Solusi tingkatkan media sosial Anda untuk hasil yang lebih nampol
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown size={32} className="text-[#22FCC1]" />
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-16 text-center">Kenapa Harus Sket Creative</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <WhyUsCard 
              title="Harga Murah"
              description="Kami menawarkan harga semurah mungkin agar mudah dijangkau seluruh UMKM"
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6">About Us</h3>
              <p className="text-gray-400 mb-6">
                We are a team of passionate digital creators, developers, and strategists dedicated to transforming businesses through innovative digital solutions. With years of experience and a commitment to excellence, we help brands stand out in the digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>200+ Projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#22FCC1] mr-2" />
                  <span>100% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-16 text-center">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Palette />}
              title="UI/UX Design"
              description="Create beautiful and intuitive interfaces that users love"
            />
            <ServiceCard 
              icon={<Code2 />}
              title="Web Development"
              description="Build powerful and scalable web applications"
            />
            <ServiceCard 
              icon={<Rocket />}
              title="Digital Marketing"
              description="Grow your brand with data-driven marketing strategies"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-16 text-center">Our Portfolio</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <WorkCard 
              image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80"
              title="Innovative App"
              category="Mobile Design"
            />
            <WorkCard 
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80"
              title="E-Commerce Platform"
              category="Web Development"
            />
            <WorkCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Marketing Campaign"
              category="Digital Marketing"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">Ready to Transform Your Digital Presence?</h3>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help your business grow in the digital world.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-[#22FCC1] text-black px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#1ee5ac] transition-colors">
                Schedule a Consultation
                <MessageSquare className="ml-2" />
              </button>
              <button className="border-2 border-[#22FCC1] px-8 py-4 rounded-full flex items-center justify-center hover:bg-[#22FCC1] hover:text-black transition-colors">
                View Our Work
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-4 text-center">Our Pricing Plans</h3>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Choose the perfect plan that suits your business needs. All plans include our core features with different levels of support and customization.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-gray-800 hover:border-[#22FCC1] transition-colors">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Basic Plan</h4>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-400 ml-2">/project</span>
                </div>
                <p className="text-gray-400">Perfect for small businesses starting their digital journey</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>5-page Website Design</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Mobile Responsive</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Basic SEO Setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Contact Form Integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>2 Rounds of Revisions</span>
                </li>
              </ul>
              
              <button className="w-full py-4 px-8 rounded-full border-2 border-[#22FCC1] hover:bg-[#22FCC1] hover:text-black transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border-2 border-[#22FCC1] relative transform hover:-translate-y-2 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#22FCC1] text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Professional Plan</h4>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-gray-400 ml-2">/project</span>
                </div>
                <p className="text-gray-400">Ideal for growing businesses needing more features</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>10-page Website Design</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Advanced UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Advanced SEO Optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Social Media Integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>E-commerce Features</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>4 Rounds of Revisions</span>
                </li>
              </ul>
              
              <button className="w-full py-4 px-8 rounded-full bg-[#22FCC1] text-black hover:bg-[#1ee5ac] transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-gray-800 hover:border-[#22FCC1] transition-colors">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Enterprise Plan</h4>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <p className="text-gray-400">For large businesses needing comprehensive solutions</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Unlimited Pages</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Custom Web Applications</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Custom Integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-[#22FCC1] mr-2" size={20} />
                  <span>Unlimited Revisions</span>
                </li>
              </ul>
              
              <button className="w-full py-4 px-8 rounded-full border-2 border-[#22FCC1] hover:bg-[#22FCC1] hover:text-black transition-colors">
                Contact Us
              </button>
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
              <h1 className="text-2xl font-bold text-[#22FCC1] mb-6">DIGITAL.CO</h1>
              <p className="text-gray-400 mb-6">
                Transforming businesses through innovative digital solutions. Your trusted partner in the digital world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#22FCC1] hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-[#22FCC1] hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-[#22FCC1] hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-[#22FCC1] hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-[#22FCC1] transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Our Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Web Development</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">UI/UX Design</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Digital Marketing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Brand Strategy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">Content Creation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22FCC1] transition-colors">SEO Optimization</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-[#22FCC1] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-400">
                    123 Digital Street, Tech Valley, Silicon City, 12345
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-[#22FCC1] flex-shrink-0" size={20} />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-[#22FCC1] flex-shrink-0" size={20} />
                  <span className="text-gray-400">contact@digital.co</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 DIGITAL.CO. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#22FCC1] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#22FCC1] text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-[#22FCC1] text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WhyUsCard({ title, description }) {
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

function ServiceCard({ icon, title, description }) {
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

function WorkCard({ image, title, category }) {
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

function TestimonialCard({ name, role, rating, text }) {
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