import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo_branca.png';
import wave from '../../../images/wave_footer.png';
import wavebot from '../../../images/lp datamais/wavebot.svg';
import waveprovi from '../../../images/lp datamais/waveprovisorio.svg';
import {FaInstagram, FaPhoneAlt, FaEnvelope, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import styled from'styled-components';

const StyledFooterLp = styled.div`
footer .footer_coluns {
    background: #3e3e40;
    color: #fff;
    background-repeat: no-repeat;
    font-family: Nunito Sans;
}
.wavebot{
    transform: scale(-1);
    margin-bottom:-40%;
    padding:0px;
    display:none;
}
.waveprovi{
  display:none;
}
.container{
    height:auto;
    padding-top: 0%;
    padding-bottom:3%;
}
.footer_coluns .col-sm-4,
.footer_coluns .col-sm-3 {
    padding: 30px 0px;
}

footer .footer_coluns h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
}

footer .footer_coluns a,
footer .footer_coluns p {
    transition: all 0.2s 0s ease-in-out;
    text-decoration: none;
    display: block;
    color: #fff;
    font-size: 17px;
    margin-left: 5px;
    margin-bottom: 10px;
}

.wave_footer {
    width: 100%;
}

.footer_coluns .footer-contact p a {
    margin-left: 0px;
    display: inline-block;
}

.footer-social-midia a {
    display: inline-block !important;
    margin-top: 20px;
}

.footer-social-midia a svg {
    transition: all 0.2s 0s ease-in-out;
    font-size: 45px;
    margin-left: 15px;
}

.footer_coluns span {
    font-weight: bold;
}

footer .footer_coluns a:hover:not(.footer-social-midia a):not(.footer-contact a) {
    transition: all 0.2s 0s ease-in-out;
    margin-left: 10px;
}

footer .footer_cr div {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer .footer_cr div p {
    color: #fe5019;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 0px;
}

.footer_image_top {
    height: 30px;
    padding: 0px !important;
    margin: 0px !important;
    overflow: hidden;
}

.footer_image_top img {
    width: 100%;
    height: 60px;
}
.footer_imagem_logoDatamais{
  margin-bottom: 20px;
  width:27vw;
}

.btn-contact-footer {
    width: 68% !important;
    margin-left:30%;
    text-align: center;
    
    background-image:linear-gradient(#fefefe,#eeeeee,#d0d0d0,#767474);
    background-origin: border-box;
    border-radius: 30px;
    border: solid 0.5px transparent;
    box-shadow: 1px 5px 1px #202020 ;
    transition: 0.3s linear
}

.btn-contact-footer a {
    transition: all 0.5s ease !important;
    text-decoration: none;
    color: #fe5b13 !important;
    font-size: 22px !important;
    font-weight: bold;
    margin: 0px !important;
}

.btn-contact-footer a:hover {
    transition: all 0.7s ease;
    margin-left: 20px;
    color: #fe5b13;
    
}

.titulo_footer {
    font-size: 35px !important;
    color: #ed4e1c;
    padding: 0px !important;
    margin-bottom: 15px !important;
}

.footer_col_top {
    padding-top: 30px;
    height: 50px;
    align-items: center;
    display: flex;
}

.footer-contact a {
    font-size: 22px !important;
    
}

.col_contact {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    margin-top: 20px;
}
.visible_mobile{
    display:none;
}
.footer_imagem_logo{
    margin-bottom: 20px;
    width:100%;
}
@media only screen and (max-width: 800px) {
    .footer_imagem_logo{
    margin-bottom: 20px;
    width:85%;
    }

    .col_footer{ 
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .hidden_mobile {
        display: none;
    }
    .visible_mobile{
        display:block;
    }
    .btn-contact-footer {
      width: 68% !important;
      margin-left:auto !important;
  }
   .btn-contact-footer{
    width: 80% !important;
    margin-top: 35px !important;
    margin-bottom: 50px !important;
    }
    .footer_coluns .col-sm-4,
    .footer_coluns .col-sm-3 {
        padding: 10px 0px !important;
    }
    .titulo_footer{
        margin-bottom:30px !important;
        font-size: 45px !important;
    }
    .col_contact{
        margin-top:25px !important;
        
    }
    .footer_image_top img{ 
        height: 38px !important;
    }
    .footer-social-midia svg{
        font-size: 70px !important;
    }
    .waveprovi{
      filter: invert(75.8%);
      margin-top:-23%;
      margin-left:-1%;
      display: inline;
    }
    .
    
}
@media only screen and (min-width: 800px) {
    .footer-redes, .footer-contact{
        margin-top:17px !important;
    }

}
`;
const FooterLP = () => {
  return (
    <StyledFooterLp>    
    <footer>
      <div className="footer_coluns">
        <img src={wavebot}
                className="wavebot"
                alt="wave"
        /> 
          {/* incio containers footer */}
        <div className="container">
          <div className='row'>
            {/* container da logo */}
            <div className='col-sm-4'>
              <div className='col-sm-12  col_footer'>
                <img className="footer_imagem_logoDatamais"src={logo}></img>
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
        <div className='containerlp'>
          <div className='col-sm-12'>
            <p>© 2022 Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
    </StyledFooterLp>  
  );
}

export default FooterLP;