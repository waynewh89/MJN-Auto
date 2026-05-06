import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  Gauge, 
  Disc, 
  Search, 
  Calendar, 
  Phone, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Clock, 
  MapPin, 
  Menu,
  Facebook,
  Instagram,
  X,
  MessageSquare,
  Thermometer,
  Zap,
  Hammer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  const address = "Unit 5, 44-46 Enterprise Avenue, South Nowra NSW 2541";
  const phone = "0432 027 064";
  const email = "service@mjnauto.com.au";

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white">
              <span className="font-display font-bold text-xl italic">M</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase whitespace-nowrap">
              MJN <span className="text-secondary italic">Automotive</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-text-dim hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${phone}`}
              className="bg-primary hover:scale-105 text-white px-5 py-2.5 rounded shadow-lg shadow-primary/20 transition-all active:scale-95 font-bold text-sm"
            >
              Book Service
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href={`tel:${phone}`}
                  className="bg-primary text-white py-4 rounded font-bold text-center"
                >
                  Book Service
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Mechanic Nowra Drivers Trust</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Reliable Mechanical <br />
              <span className="text-secondary italic">Repairs & Servicing</span>
            </h1>
            <p className="text-lg text-text-dim max-w-xl leading-relaxed">
              Professional automotive repairs and servicing in South Nowra. 
              We offer honest advice, quality workmanship, and fast turnaround 
              using state-of-the-art diagnostic equipment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact"
                className="flex items-center gap-2 bg-primary px-8 py-4 rounded font-bold hover:brightness-110 transition-all text-white"
              >
                <Calendar size={20} />
                Request Booking
              </a>
              <a 
                href={`tel:${phone}`}
                className="flex items-center gap-2 border border-outline px-8 py-4 rounded font-bold hover:bg-white/5 transition-all text-white"
              >
                <Phone size={20} />
                Call specialist
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full" />
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhz9t_9fGQTyzPlhPysQJd25K0hm0DT0yiCBQjBfmnbT41NKQIawRS7OG3wnYtMSNWyfwUNwKsp7JtUi-ZyKXZv1UsO3kDnMrGsKPUBOo1oQoLnrGWjbX0oRXxuLK4uVCeuBZp2-fjwFq0ldd0uaQ_qpL5RuVbdrCyK_BQpb2ZdlmCmgkRHAdPQrKwWCu89hwnTfdZJ-_KNcuAs5fb5o3bWB07HjJucRSr8u-b8EQSBbDrmPliTpGlJ6g9KcY-bU2ww1mVte7KlhQ" 
              alt="Elite European Vehicle" 
              className="rounded-xl cinematic-fade glow-red shadow-2xl object-cover h-[500px] md:h-[600px] w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 border-y border-outline bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Star size={24} className="text-secondary" />, label: "5-Star Rated", sub: "Highly Recommended Shop" },
            { icon: <ShieldCheck size={24} className="text-primary" />, label: "Qualified Team", sub: "Master Technicians" },
            { icon: <MessageSquare size={24} className="text-primary" />, label: "Honest Advice", sub: "Clear Explanations" },
            { icon: <Clock size={24} className="text-primary" />, label: "Fast Turnaround", sub: "Efficient Car Repairs" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2 text-center md:text-left"
            >
              <div className="mb-4 flex justify-center md:justify-start">{stat.icon}</div>
              <h4 className="font-bold text-lg">{stat.label}</h4>
              <p className="text-sm text-text-dim">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold uppercase tracking-tight">Expert Services <span className="text-primary">In South Nowra</span></h2>
            <p className="text-text-dim max-w-2xl mx-auto">From major engine overhauls to minor servicing, we handle all automotive mechanical needs with precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Wrench />, title: "Logbook Servicing", desc: "Maintain your manufacturer warranty with certified logbook servicing that follows precise factory specs." },
              { icon: <Disc />, title: "Brake & Clutch", desc: "Complete brake inspections, pad replacements, and clutch repairs using premium high-performance components." },
              { icon: <Search />, title: "Diagnostics", desc: "Advanced computer fault scanning and electronics diagnostics for fuel systems, ABS, and air-bags." },
              { icon: <Settings />, title: "Suspension & Steering", desc: "Ensuring your safety and comfort with expert suspension tuning and steering alignment." },
              { icon: <Gauge />, title: "Engine & Mechanical", desc: "Major repairs, including timing belts, cooling systems, fuel injection, and general maintenance." },
              { icon: <ShieldCheck />, title: "Registration Checks", desc: "Authorised inspection station for eSafety checks (Pink Slips) while you wait." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-surface border border-outline rounded flex flex-col justify-between hover:border-primary/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text-dim text-sm leading-relaxed mb-8">{service.desc}</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                  Request Quote <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0uj9EZYXWhuXObiedSTphq2llvja5ZiMVpW6c_QKxg-hoW0O21RCxIXJv_6TlsL4mQH2F96xU88_-oDLT1vSlbAxpBrw_szjZFEm26izEvq78HMZ_mPTzS0899kAXdGU3GvrMwV1eISUbTossdXwoMQQOx_EJSUef597zGxOBaoP-CrAqhj6FYLySmQCHZ7wLJyxZueuEmyVBAZUoy2DoQ4c1_kg_TTRkym-X_wd6zVQN7ATw0KEz9qpuvULazxjDyReWuNrbwdZmQ" 
            alt="Mechanical Context" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold">Why South Nowra <br/><span className="text-primary italic">Chooses MJN Automotive</span></h2>
              <p className="text-text-dim text-lg leading-relaxed">Your local neighborhood workshop delivering dealership-standard mastery with independent value.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Local Knowledge", desc: "Serving the Shoalhaven community with local understanding." },
                { title: "All Makes/Models", desc: "Extensive experience with European and domestic cars." },
                { title: "Modern Tools", desc: "Workshop equipped with the latest diagnostic software." },
                { title: "Certified Parts", desc: "We source only OEM or premium aftermarket components." },
              ].map((item, i) => (
                <div key={i} className="space-y-2 p-5 bg-surface/50 border border-outline rounded backdrop-blur-sm">
                  <h4 className="font-bold flex items-center gap-2">
                    <ShieldCheck size={18} className="text-primary" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-dim leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative group hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui0U4O5jNKkvlFeqt5dzSeYK6QyUoS0UT9OPO1Fu6-viNxe_L1BC81xKVsN9XCKRujtj7wrmCE_9NuMh0M11XKMvAO1kc7INWNY8qlLrZHZViuhmZYCK-sait-XBy2jfqwg1xtoRmVIv03Or_8285Jw7dy5jERlBxGjTvKrXIjXpRcuCQyGsVXEZdMBBOnlF6yjhAUnOnd4SYFZS1q8NWC7dMGino6wUkw_7zkzpRKeMTyyj4dWWftilYwbXLD0KZTlj-eBCbwo" 
              alt="Workshop Precision" 
              className="rounded-lg shadow-2xl relative z-10 border border-outline grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold uppercase tracking-tight underline decoration-primary decoration-4 underline-offset-8">Our Straightforward <span>Process</span></h2>
            <p className="text-text-dim max-w-2xl mx-auto">Engineered to get you back on the road safely and swiftly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Enquire", desc: "Call or message us about your vehicle needs." },
              { num: "02", title: "Inspect", desc: "Our technicians perform a thorough assessment." },
              { num: "03", title: "Review", desc: "Clear explanation of work with an upfront quote." },
              { num: "04", title: "Repair", desc: "Precision work completed and vehicle returned." },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="relative inline-block mx-auto">
                  <div className="w-20 h-20 rounded-lg border-2 border-primary/30 bg-primary/5 flex items-center justify-center text-3xl font-display font-bold text-primary shadow-lg shadow-primary/10 mx-auto">
                    {step.num}
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent -z-10" />
                  )}
                </div>
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p className="text-sm text-text-dim leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhdHhaM6SZoDJiWo0ZjwAGQssRSJXbBYfnFVyqgRXw32TKOxi96bydPvU2UHDNKpI6GK6S4BjJc7OapQxmlp6r1A44YM4Ue19IDFDvSp7jXCaD8lhlsE3G3duFCsWP6Uz_tl7Ij9NqmKbgTYB4r5ZhhsZvWONktqvCpSPrmlJV8sNo330wKy22LCWgACf7VSNugJ6IvqVac53lg0kLB4O9oUrODpEmhzUwP8FprZ9ZNGEwhdCbfHkLQNkRx5uuub9lgvJnQ-kfdmA" 
            alt="Mechanical Excellence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight uppercase tracking-tighter">Need Quality <br /><span className="text-primary italic underline decoration-secondary decoration-4 underline-offset-[12px]">Mechanical Repairs?</span></h2>
          <p className="text-text-dim text-lg leading-relaxed max-w-2xl mx-auto">
            Get back to moving with complete peace of mind. Book your local South Nowra service with MJN Automotive today.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a 
              href="#contact"
              className="bg-primary text-white px-10 py-5 rounded font-bold hover:scale-105 transition-all text-lg shadow-2xl shadow-primary/30 uppercase tracking-widest text-center min-w-[280px]"
            >
              Request Quote
            </a>
            <a 
              href={`tel:${phone}`}
              className="border border-outline bg-white/5 px-10 py-5 rounded font-bold hover:bg-white/10 transition-all text-lg backdrop-blur-sm uppercase tracking-widest text-center min-w-[280px]"
            >
              Call workshop
            </a>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold uppercase tracking-tight">Send an <span className="text-primary">Enquiry</span></h2>
              <p className="text-text-dim text-lg">Send us a message and our team will be in touch to discuss your vehicle needs.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary tracking-widest pl-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-surface border border-outline rounded-lg p-4 focus:border-primary outline-none transition-all placeholder:text-text-dim/50" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary tracking-widest pl-1">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-surface border border-outline rounded-lg p-4 focus:border-primary outline-none transition-all placeholder:text-text-dim/50" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary tracking-widest pl-1">Phone Number</label>
                  <input type="text" placeholder="04xx xxx xxx" className="w-full bg-surface border border-outline rounded-lg p-4 focus:border-primary outline-none transition-all placeholder:text-text-dim/50" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary tracking-widest pl-1">Vehicle Details</label>
                  <input type="text" placeholder="Make / Model / Year" className="w-full bg-surface border border-outline rounded-lg p-4 focus:border-primary outline-none transition-all placeholder:text-text-dim/50" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-primary tracking-widest pl-1">Message</label>
                <textarea placeholder="Tell us about the issue or service required" rows={5} className="w-full bg-surface border border-outline rounded-lg p-4 focus:border-primary outline-none transition-all placeholder:text-text-dim/50" />
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all text-lg uppercase tracking-widest shadow-xl shadow-primary/10">Submit Enquiry</button>
            </form>
          </div>

          <div className="space-y-8 flex flex-col">
            <div className="bg-surface border border-outline rounded-lg p-10 space-y-12 flex-grow">
              <h3 className="text-2xl font-display font-bold uppercase text-secondary tracking-widest">Workshop Info</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/5 border border-primary/20 rounded flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Workshop</h4>
                    <p className="text-text-dim leading-relaxed">{address}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/5 border border-primary/20 rounded flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Operating Hours</h4>
                    <p className="text-text-dim leading-relaxed">Mon - Fri: 8:00 AM - 5:00 PM<br />Sat - Sun: Closed</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/5 border border-primary/20 rounded flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Get In Touch</h4>
                    <p className="text-text-dim leading-relaxed">Phone: {phone}<br />Email: {email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-64 bg-surface border border-outline rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer relative"
            >
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all" />
               <MapPin size={48} className="text-outline group-hover:text-primary transition-all group-hover:scale-110" />
               <span className="absolute bottom-4 text-[10px] font-bold uppercase tracking-widest text-text-dim font-display">Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final footer */}
      <footer className="bg-surface pt-24 pb-12 border-t border-outline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white">
                  <span className="font-display font-bold text-xl italic">M</span>
                </div>
                <span className="font-display font-bold text-2xl tracking-tighter uppercase whitespace-nowrap">
                  MJN <span className="text-secondary italic">Automotive</span>
                </span>
              </div>
              <p className="text-text-dim leading-relaxed italic text-sm">
                Precision engineering and master technical skill for the South Nowra community.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 glass rounded flex items-center justify-center text-text-dim hover:text-primary transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 glass rounded flex items-center justify-center text-text-dim hover:text-primary transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {[
              { title: "Sitemap", links: ["Home", "Services", "Expertise", "Contact"] },
              { title: "Specialised", links: ["Logbook Service", "Brake & Clutch", "Fuel Injection", "Pink Slips"] },
              { title: "Workshop", links: ["Mechanical Repairs", "Suspension", "Steering", "Batteries"] },
            ].map((col, i) => (
              <div key={i} className="space-y-8">
                <h4 className="font-bold text-lg uppercase tracking-widest text-secondary">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href={`#${link.toLowerCase()}`} className="text-text-dim hover:text-white transition-all text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-10 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-text-dim">
            <p>© 2024 MJN Automotive. Precision Technical Excellence.</p>
            <div className="flex gap-8">
              <span>South Nowra, NSW</span>
              <span>ABN: 12 345 678 910</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
