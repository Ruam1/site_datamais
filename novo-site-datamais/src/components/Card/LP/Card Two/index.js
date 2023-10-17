import React from 'react';
import styled from'styled-components';
import { Carousel } from 'react-bootstrap';
import logo from '../../../../images/logo_escrita.png'

const StyledCardInfoClient = styled.div`
.mobile h1{
    display: none;
}
.title{
    width: 50%;
    margin:auto;
}
h1{
    margin-top: 2%;
    text-align: center;
    color: #fe5b13;
    font-weight: 800;
    font-size: 55px;
}

.iconClient{
    width: 60%;
    margin: 15% auto 0 auto;
}
.cardLP{
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    margin: 4% 4% 0% 4%;
    height: 40%;
}
.card{
    height: 550px;
    width: 350px;
    box-shadow: 0 0 1em #ccc;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 5%;
    border-radius: 18px !important;
}

.card p{
    color: #f05123;
    margin: 10% 15% auto 15%;
    font-size: 22px;
    text-align: left;
    font-weight: 700;
}

.card .pLower{
    font-weight: 300;
    font-size: 20px;
}
@media only screen and (max-width: 800px) {
    .body{
        display:none;
    }
    .mobile{
        height:900px;
        background-color: #f05123;
    }
    h1{
        margin: 0px 5% 0px 5%;
        padding-top:10%;
        color:#fff;
        font-size:25px;
    }
    .banner-card{
        margin-top:10%;
        height:70%;
    }
    .card{
        color: #fff !important;
        height: auto;
        width: 75%;
        box-shadow: 0 0 1em #ccc;
        padding-bottom:5%;
        margin-left: 2%;
        margin-right: 2%;
        margin-bottom: 5%;
        border-radius: 25px !important;
        box-shadow:none !important;
    }
    
    .card p{
        color: #f05123;
        margin: 10% 15% auto 15%;
        font-size: 22px;
        text-align: left;
        font-weight: 700;
    }
    .mobile .carousel-caption{
        position: relative !important;
        right: 15%;
        left: 11%;
        box-shadow:none !important;
    }
    .mobile .carousel-caption img{
        
    }
    
    .mobile.carousel-caption h2{
       
    }
    
    .mobile .carousel-caption h2:nth-child(1){
        font-size: 7.5vh;
        font-weight: lighter;
    }
    
    .mobile.carousel-caption h2:nth-child(2){
        font-size: 9.2vh;
        font-weight: bold;
    }
    
    .mobile .carousel-caption h2:nth-child(3){
        font-size: 4.4vh;
        font-weight: bold;
    }
    .mobile h1{
        display: block;
    }
}
`;

const CardInfoClient = () =>{
    return(
        <StyledCardInfoClient>
            <div className='body'>
                <div className='title'>
                    <h1>O que nossos parceiros estão falando sobre a Datamais</h1>
                </div>
                <div className='cardLP'>
                    <div className='card'>
                    <img 
                            src={logo}
                            className="iconClient"
                            alt="First img"
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero purus, mattis sodales imperdiet eget, efficitur sit amet dui. Quisque quis libero in ipsum consectetur ultricies vel vel metus.</p>
                    </div>
                    <div className='card'>
                    <img 
                            src={logo}
                            className="iconClient"
                            alt="First img"
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero purus, mattis sodales imperdiet eget, efficitur sit amet dui. Quisque quis libero in ipsum consectetur ultricies vel vel metus.</p>
                    </div>
                    <div className='card'>
                    <img 
                            src={logo}
                            className="iconClient"
                            alt="First img"
                        />
                        <p>SLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero purus, mattis sodales imperdiet eget, efficitur sit amet dui. Quisque quis libero in ipsum consectetur ultricies vel vel metus.</p>
                    </div>
                </div>
            </div>
            <div className='mobile'>
                <h1>O que nossos parceiros estão falando sobre a Datamais</h1>
                    <Carousel className="banner-card">
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='card'>
                                <img 
                                src={logo}
                                className="iconClient"
                                alt="First img"
                                />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero purus, mattis sodales imperdiet eget, efficitur sit amet dui. Quisque quis libero in ipsum consectetur ultricies vel vel metus.</p>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='card'>
                                <img 
                                src={logo}
                                className="iconClient"
                                alt="First img"
                                />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero purus, mattis sodales imperdiet eget, efficitur sit amet dui. Quisque quis libero in ipsum consectetur ultricies vel vel metus.</p>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='card'>
                                <img 
                                src={logo}
                                className="iconClient"
                                alt="First img"
                                />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero purus, mattis sodales imperdiet eget, efficitur sit amet dui. Quisque quis libero in ipsum consectetur ultricies vel vel metus.</p>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
        </StyledCardInfoClient>
    )
}

export default CardInfoClient;