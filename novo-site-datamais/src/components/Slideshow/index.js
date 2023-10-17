import React, {useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import banner_1  from '../../images/banner_1.jpg';
import banner_mobile  from '../../images/banner_mobile_1.jpg';
import logo  from '../../images/logo_branca.png';
import { initGA } from '../../services/googleAnalytics';
import { initPixelConvTrkr } from '../../services/facebookPixel';
import { logPixelPageView } from '../../services/facebookPixel';
import { initPixelHome } from '../../services/facebookPixel';

import './style.css';

const SlideShow = () => {

  useEffect(() => {
    initPixelConvTrkr();
    logPixelPageView();
    initPixelHome();
    }, [])

  useEffect(() => {
    initGA();
    }, [])
  return (
    <Carousel className="banner-home">
    <Carousel.Item>
      <div className='logo'>
        <img
          className="mainImg"
          src={ banner_1 }
          alt="First slide"
        />
      </div>
      <div className='logoMobile'>
        <img
          className="mainImg"
          src={ banner_mobile }
          alt="First slide"
        />
      </div>
      <Carousel.Caption className="fadeInUp">
        <div className=" col-sm-12">
          <img src={logo}></img>
        </div>
        <div className="col-sm-12">
          <h2>HÁ MAIS DE</h2>
          <h2>25 ANOS</h2>
          <h2>DESENVOLVENDO</h2>
          <h2>SOLUÇÕES TECNOLÓGICAS</h2>
        </div>
        <div className="row contact-header">
          <div className="btn-contact-header">
            <a href="https://api.whatsapp.com/message/NOV4TGWO6YLYO1?autoload=1&app_absent=0">Fale com nossa equipe!</a>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    
  );
}

export default SlideShow;