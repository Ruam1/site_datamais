import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../../components/Header/Home'
import BodyHome from '../../components/BodyContact/Home'
import Footer from '../../components/Footer'
import Slideshow from '../../components/Slideshow'
import Infoselection from '../../components/Infoselection'

const Home = (  ) => {

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);
  let isVisibleDiv = false;

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 300;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
    if (winScroll > heightToHideFrom) {
      isVisibleDiv = true;
      setIsVisible(true);
    }
  };

  return (
    <>
      <Header />
      <Slideshow />
      <Infoselection />
      <Footer />
    </>
  );
}

export default Home;
