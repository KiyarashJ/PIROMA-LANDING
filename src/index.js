import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import SliderLogo from './Slider/SliderLogo';
import Blogs from './Blogs/Blogs';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Hero/>
    <SliderLogo/>
    <Blogs/>
    <Services/>
    <Resume/>
    <CompanyInfo/>
    <Team/>
    <Contact/>
    <Footer/>
  </>
);

