import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
const Home = () => {
return (
        <div>
            <Header />
            <Section />
            <About />
            <Services />
            <Pricing />
            <Contact />
            <Footer />

        </div>
)
}

export default Home
