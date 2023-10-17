import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_branca.png';
import wave from '../../images/wave_footer.png';
import './style.css';
import {FaInstagram, FaPhoneAlt, FaEnvelope, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import { initPixelConvTrkr, logPixelPageView } from '../../services/facebookPixel';



const Footer = () => {
  useEffect(() => {
    initPixelConvTrkr();
    logPixelPageView();
    }, [])
  return (
    <footer>
      <div className="footer_coluns">

        <div className="container-fluid footer_image_top">
          <div className='row'>
            <div className='col-sm-12 footer_image_top'>
              <img class = 'footer_imagem_logo'src={wave}></img>
            </div>
          </div>
        </div>
          {/* incio containers footer */}
        <div className="container">
          <div className='row'>
            {/* container da logo */}
            <div className='col-sm-4'>
              <div className='col-sm-12  col_footer'>
                <img class = "footer_imagem_logoDatamais"src={logo}></img>
              </div>
              <div className='col-sm-12 hidden_mobile'>
                <div className="row">
                  <div className="btn-contact-footer col_footer">
                     <a href="https://api.whatsapp.com/message/NOV4TGWO6YLYO1?autoload=1&app_absent=0">Fale com nossa equipe!</a>
                 </div>
                </div>
              </div>
            </div>
             {/*  container de espaço */}
             <div className='col-sm-1'></div>
             {/*  termino container de espaço */}
            {/*  container contato */}
            <div className='col-sm-4 footer-contact hidden_mobile'>
              <div className='col-sm-12 footer_col_top col_footer'>
                <h2 className = 'titulo_footer '>Contato </h2>
              </div>
              <div className='col-sm-12 col_contact col_footer'>
                <a href ="tel:+4733827212"><FaPhoneAlt /> (47) 3382-7212</a>
                <a href ="mailto:datamais@datamais.com.br"><FaEnvelope /> datamais@datamais.com.br</a>
              </div>
            </div>
            {/* Termino container contato */}
           
             {/* Redes container sociais */}
            <div className='col-sm-3 footer-redes'>
              <div className='col-sm-12 footer_col_top col_footer'>
                <h2 className = 'titulo_footer' >Redes Sociais</h2>
              </div>
              <div className='footer-social-midia col_footer'>
                <a href="https://www.instagram.com/datamais/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://br.linkedin.com/company/datamais-sistemas-e-web" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://twitter.com/datamais" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://www.youtube.com/c/DatamaisSistemasTimb%C3%B3" target="_blank" rel="noreferrer"><FaYoutube /></a>
                <a href="https://www.facebook.com/Datamais" target="_blank" rel="noreferrer"><AiOutlineFacebook /></a>
              </div>
            </div>
            {/* Termino container Redes sociais */}

            {/* container mobile */}
            <div className='col-sm-3 footer-contact visible_mobile'>
              <div className='col-sm-12 footer_col_top col_footer'>
                <h2 className = 'titulo_footer '>Contato </h2>
              </div>
              <div className='col-sm-12 col_contact col_footer'>
                <a href ="tel:+554733827212"><FaPhoneAlt /> (47) 3382-7212</a>
                <a href ="mailto:datamais@datamais.com.br"><FaEnvelope /> datamais@datamais.com.br</a>
              </div>
              <div className='col-sm-12'>
                <div className="row">
                  <div className="btn-contact-footer col_footer">
                     <a href="https://api.whatsapp.com/message/NOV4TGWO6YLYO1?autoload=1&app_absent=0">Fale com nossa equipe!</a>
                 </div>
                </div>
              </div>
            </div>
            {/* termino container mobile */}
          </div>
        </div>
      </div>

      <div className='footer_cr'>
        <div className='container'>
          <div className='col-sm-12'>
            <p>© 2022 Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;