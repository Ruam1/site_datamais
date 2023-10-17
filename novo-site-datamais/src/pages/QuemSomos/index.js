import React from "react";
import BodyQuemSomos from "../../components/Body/QuemSomos";
import CardQuemSomos from "../../components/Card/QuemSomos";
import ContactQuemSomos from "../../components/BodyContact/QuemSomos";
import Infoselection from "../../components/Infoselection";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Home";


const QuemSomos = () => {
    return(
        <>
        <Header />
        <BodyQuemSomos />
        <CardQuemSomos />
        <Infoselection />
        <Footer />
        </>
    )
  }
export default QuemSomos;
