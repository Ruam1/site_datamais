import React, { useEffect } from "react";
import Header from '../../components/Header/Home'
import BodyHome from '../../components/BodyContact/Home'
import Footer from '../../components/Footer'
import Slideshow from '../../components/Slideshow'
import Infoselection from '../../components/Infoselection'
import { useLocation } from "react-router-dom";
  


const Segmentos = () => {

    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(1100, 1100);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);
  
  
    return(
        <>
        <Header />
        <Slideshow />
        <Infoselection />
        <Footer />
      </>
    )
  }
export default Segmentos;

 