import React, { useEffect } from "react";
import HeaderLp from "../../../components/Header/LP/Index";
import Footer from "../../../components/Footer";
import BodyLP from "../../../components/Body/LP";
import CardInfo from "../../../components/Card/LP/Card One";
import ContactLP from "../../../components/BodyContact/LP";
import { useLocation } from "react-router-dom";
  


const PracaAlimentacao = () => {

    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);
  
  
    return(
        <>
        <HeaderLp /> 
        <BodyLP />
        <CardInfo />
        <ContactLP />
        <Footer />
        </>
    )
  }
export default PracaAlimentacao;

 