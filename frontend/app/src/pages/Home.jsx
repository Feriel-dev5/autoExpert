import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/footer";
import AboutSection from '../components/AboutSection';
import VehicleTypesSection from '../components/VehicleTypesSection';
import CustomerReviewsSection from '../components/CustomerReviewsSection';




export default function Home() {
  return (
    <div>
  <Navbar />
  <Hero />
  
  <div className="mt-10">
    <ServicesSection /></div>
    <AboutSection/>
    <VehicleTypesSection/>
<CustomerReviewsSection/>
  <Footer />
  
</div>
);
}