import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactBar from "./components/ContactBar";
import Unique from "./components/Unique";
import Register from "./components/Register";
import Plan from "./components/Plan";
import Team from "./components/Team";
import Classes from "./components/Classes";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import AboutUs from "./components/AboutUs";
import MailUs from "./components/MailUs";

const App = () => {
    return (
        <>
            <Hero />
            <Unique />
            <Review />
            <MailUs />
            <AboutUs />
            <Classes />
            <Plan />
            <Register />
            <Team />
            <Gallery />
            <ContactBar />
            <Footer />
        </>
    );
};

export default App;
