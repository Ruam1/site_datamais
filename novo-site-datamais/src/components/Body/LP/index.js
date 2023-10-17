import React, { useEffect } from 'react';
import bgFirst from '../../../images/lp datamais/bgFirst.jpg';
import bgFirstmobile from '../../../images/lp datamais/bgFirstmobile .png';
import mockup from '../../../images/lp datamais/mockup.jpg';
import wavebot from '../../../images/lp datamais/wavebot.svg';
import wavetop from '../../../images/lp datamais/waveTop.svg';
import wavebotMobile from '../../../images/lp datamais/waveBotMobile.svg';
import wavetopMobile from '../../../images/lp datamais/wavetopMobile.svg';
import styled from'styled-components';
import './style.css';
import  { initPixelLp }  from '../../../services/facebookPixel';
import { logPixelPageView } from '../../../services/facebookPixel';
import { initPixelConvTrkr } from '../../../services/facebookPixel';
import { initGA } from '../../../services/googleAnalytics';
import { initGoogleAdwords } from '../../../services/googleAnalytics';

const StyledBodyOne = styled.div`
.col-sm-12-Mobile{
    display:none;
}
.wavebotMobile{
    display:none;
}
.wavetopMobile{
    display:none;
}
.info-first-img{
    position: absolute;
    top: 15vw;
    width: 35%;
    height: 44%;
    left: 11%;
    align-items: center;
}

.info-first-img p:nth-child(1){
    font-size: 3.8vw;
    white-space: nowrap;
    font-weight: 600;
}

.info-first-img p:nth-child(2){
    font-size: 3.3vw;
    letter-spacing: 0.9vw;
    font-weight: 600;
    white-space: nowrap;
}

.info-first-img p:nth-child(3){
    font-size: 2vw;
    font-weight: 500;
}

.info-first-img p{
    color: #fff;
    font-size: 38px;
    font-weight: 500;

}
.mainImgLP{
    width: 100% !important;
    z-index: 1 !important;
}
.div-btn-contact-bodyLP{
    white-space: nowrap;
    width: 35%;
    left: 11%;
    position: absolute;
    top: 40vw;
    height: 10vh;
}

.btn-contact-bodyLP{
    height: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 15px;
    border-radius: 50px;
    box-shadow: inset 0px 2px 20px 0px #c3c3c3;
    margin-bottom: 5%;
    background: linear-gradient(#fefefe,#eeeeee,#d0d0d0,#767474);
}

.btn-contact-bodyLP a{
    align-content: center;
    transition: all 0.5s ease;
    text-decoration: none;
    color: #fe5b13;
    font-size: 2.5vw;
    font-weight: bold;
}

.btn-contact-bodyLP a:hover{
    transition: all 0.7s ease;
    margin-left: 20px;
    color: #fe5b13;
}
.infoLP{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    justify-content: center;
    background-color: #ff5019;
    padding: 3% 0 3% 0; 
}
.infoLP p{
    align-items: center;
    font-weight: 700;
    text-align: center;
    color: #fff;
    font-size: 35px;
}
.divInfo{
    width: 70%;
    height: 40%;
}

    h1{
        margin-top: 2%;
        text-align: center;
        color: #fe5b13;
        font-weight: 800;
        font-size: 55px;
    }
   
    @media only screen and (max-width: 800px) {
        .col-sm-12-Mobile{
            display: inline !important;
        }
        .col-sm-12{
            display: none;
        }
        .info-first-img{
            position: absolute;
            top: 20%;
            left: 5%;
            width: 55%;
        }
        .info-first-img p{
            color: #fff;
            font-weight: 500;
            text-align: left;
        }
        .info-first-img p:nth-child(1){
            font-size: 5.6vw;
            white-space: nowrap;
            font-weight: 600;
        }
        
        .info-first-img p:nth-child(2){
            margin-top:-10%;
            font-size: 5.6vw;
            letter-spacing: 0.9vw;
            font-weight: 600;
            white-space: nowrap;
        }
        
        .info-first-img p:nth-child(3){
            font-size: 4.4vw;
            font-weight: 500;
        }
        .div-btn-contact-bodyLP{
            width: 80%;
            position: absolute;
            top: 110vw;
            height: 5vh;
        }
        .btn-contact-bodyLP{
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(#fefefe,#eeeeee,#d0d0d0,#767474);
            padding: 15px;
            border-radius: 60px;
            box-shadow: inset 0px 2px 20px 0px #c3c3c3;
            margin-bottom: 5%;
        }
        .btn-contact-bodyLP a{
            align-content: center;
            text-decoration: none;
            color: #fe5b13;
            font-size: 5vw;
            font-weight: bold;
        }
        .infoLP{
            position: sticky;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: auto;
            width: 100%;
            justify-content: center;
            background-color: #f05123;
            padding: 0px;
            margin-top:-3.2vh;
        }
        .infoLP p{
            align-items: center;
            font-weight: 700;
            text-align: center;
            color: #fff;
            font-size: 25px;
        }
        .divInfo{
            width: 90%;
            height: 80%;
            margin-top:3%;
        }
        .wavebotMobile{
            display:inline;
            margin-top:-25%;
        }
        .wavetopMobile{
            display:inline;
            margin-top:-2vh;
        }
    }
`;

const BodyLP = () =>{
    useEffect(() => {
        initPixelConvTrkr();
        logPixelPageView();
        initPixelLp();
        }, [])

    useEffect(() => {
        initGA();
        
        }, [])
      
    return(
        <StyledBodyOne>
            <div className="col-sm-12">
                <div className='info-first-img'>
                    <p>O seu Food Service</p>
                    <p>Descomplicado</p>
                    <p>Software focado em otimizar a gestão e automatizar negócios, proporcionando melhor atendimento ao cliente.</p>
                </div>
                    <img src={bgFirst}
                    className="mainImgLP"
                    alt="First img"
                    />
            </div>
            <div className="col-sm-12-Mobile">
                <div className='info-first-img'>
                    <p>O seu Food Service</p>
                    <p>Descomplicado</p>
                    <p>Software focado em otimizar a gestão e automatizar negócios, proporcionando melhor atendimento ao cliente.</p>
                </div>
                    <img src={bgFirstmobile}
                    className="mainImgLP"
                    alt="First img"
                    />
            </div>
            <div className='div-btn-contact-bodyLP'>
                <div className="btn-contact-bodyLP">
                    <a href="https://api.whatsapp.com/message/NOV4TGWO6YLYO1?autoload=1&app_absent=0">Fale com nossa equipe!</a>
                </div>
            </div> 
            <img src={wavebotMobile}
                    className="wavebotMobile"
                    alt="wave"
                />
            <div className='infoLP'>
                <div className='divInfo'>
                    <p> Estamos há mais de 25 anos, criando soluções pensadas para solucionar os principais problemas dos donos de food service. </p>
                </div>
                <div className='divInfo'>
                    <p> Assim contribuímos para uma gestão mais rápida e eficaz.</p>
                </div>
            </div>   
            <img src={wavetopMobile}
                className="wavetopMobile"
                alt="wave"
                />      
            <div className='col-sm-12'>
                <img src={mockup}
                className="mainImgLP"
                alt="First img"
                />
                <img src={wavebot}
                className="wavebot"
                alt="wave"
                />
            </div>           
           
      </StyledBodyOne>
    )
}

export default BodyLP;