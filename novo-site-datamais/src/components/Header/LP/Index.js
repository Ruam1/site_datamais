import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../../../images/logo_escrita.png';
import styled from 'styled-components';
import './style.css';
import bread from '../../../images/segments/bread.png';
import cheers from '../../../images/segments/cheers.png';
import coffe from '../../../images/segments/coffee.png';
import fast_food from '../../../images/segments/fast-food.png';
import food_truck from '../../../images/segments/food-truck.png';
import hamburger from '../../../images/segments/hamburger.png';
import hot_dog from '../../../images/segments/hot-dog.png';
import pizza from '../../../images/segments/pizza.png';
import restaurant from '../../../images/segments/restaurant.png';
import steak from '../../../images/segments/steak.png';

const StyledBody = styled.div`
.header_containerLp{
  background: #fff;
  height: 80px;
  box-shadow: 0px 5px 10px rgb(65, 55, 55);
  z-index: ${({ openBurguerTwo }) => openBurguerTwo ? '7' : '1'} !important;
  transition: ${({ open }) => open ? 'all 0.1s linear' : 'all 1s linear'};
  position: sticky;
}
}`;

const StyledBurguer = styled.div`
@media only screen and (max-width: 800px) {
width: 2rem;
height: 1.50rem;
position: absolute;
top: 30px;
left: 30px;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
cursor: pointer;

div{
    width: 2.60rem;
    height: 0.25rem;
    background-color: ${({ openBurguer }) => openBurguer ? '#d4d4d4' : '#404041'};
    border-radius: 10px;
    transform-origin: 6.5px;
    transition: all 0.5s linear;

    &:nth-child(1){
      transform: ${({ openBurguer }) => openBurguer ? 'rotate(45deg)' : 'rotate(0)'};

    }
    &:nth-child(2){
      opacity: ${({ openBurguer }) => openBurguer ? 0 : 1};
      
    }
    &:nth-child(3){
      transform: ${({ openBurguer }) => openBurguer ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}`;

const StyledMenu = styled.div`
.buttonSegmentosLp{
  display:none;
}
.only_desktopLp{
  display:inline;
}
@media only screen and (max-width: 800px) and (min-width: 570px) {
  .logoHeaderLp{
    margin-left:auto;
  }
  .hrefSegmentosLp{
    display:none;
  }
  .buttonSegmentosLp{
    display:block;
  }
  .only_desktopLp{
    display:none;
  }
.header-linksLp{
  background: #fff;
  border: none;
  height: auto;
  width:100%;
  flex-flow: column nowrap;
  padding: 10px;
  transition: all 0.5s linear;
  transform: ${({open}) => open ? 'translateX(0)': 'translateX(-200%)'};
  opacity: ${({open}) => open ? 1 : 0.5};
}
.whats_headerLp{
  background: linear-gradient(45deg, #ff5216, #fe9100);
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  text-decoration: none;
  color: #fff !important;
  font-size: 22px !important;
  margin: 22px !important;
  margin-left: 20px !important;
}
}
@media only screen and (max-width: 569px){
  .containerHomeLp .header-links{ 
    margin:0px !important;
}
.only_desktopLp{
  display:none;
}
.hrefSegmentosLp{
  display:none;
}
.buttonSegmentosLp{
  display:block;
}
  .header-linksLp{
    background: #fff;
    border: none;
    height: auto;
    width:100% !important;
    flex-flow: column nowrap;
    padding: 10px;
    transition: all 0.5s linear;
    transform: ${({open}) => open ? 'translateX(0)': 'translateX(-200%)'};
    opacity: ${({open}) => open ? 1 : 0.5};
  }
  .whats_headerLp{
    background: linear-gradient(45deg, #ff5216, #fe9100);
    height: 91px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    text-decoration: none;
    font-size: 22px !important;
    margin: 22px !important;
    margin-left: 20px !important;
  }
}
`;
const StyledMenuSegmentos = styled.div`
.header-segmentosLp{
  display:none;
}
@media only screen and (max-width: 800px) and (min-width: 570px) {
  .header-segmentosLp{
    display:inline;
    position:absolute;
    top:75px;
    background: #fff;
    border: none;
    z-index: ${({ openSegmentos }) => openSegmentos ? '7' : '1'} !important;
    height: auto;
    width:100% !important;
    flex-flow: column nowrap;
   
    transition: all 0.5s linear;
    transform: ${({openSegmentos}) => openSegmentos ? 'translateY(0)': 'translateY(-150%)'};
    opacity: ${({openSegmentos}) => openSegmentos ? 1 : 0.5};
  }

  .header-segmentosLp a{
    transition: all 0.2s 0s ease-in-out;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    margin: 8vw 20px 5px 20px;
    padding: 10px;
    white-space: nowrap;
  }
  .itens_menuLp{
    display:flex;
    align-items:center;
    height: auto;
    border-bottom: 1px solid #fff;
  }
  .iconMenuLp{
    margin-top:15px;
    margin-left:5%;
    width:10%;
    height:10%;
    filter: brightness(100000);
  }
}
@media only screen and (max-width: 569px){
  .header-segmentosLp{
    display:inline;
    position:absolute;
    top:78px;
    background: #fff;
    border: none;
    z-index: ${({ openSegmentos }) => openSegmentos ? '7' : '1'} !important;
    height: auto;
    width:100% !important;
    flex-flow: column nowrap;
    
    transition: all 0.5s linear;
    transform: ${({openSegmentos}) => openSegmentos ? 'translateY(0)': 'translateY(-150%)'};
    opacity: ${({openSegmentos}) => openSegmentos ? 1 : 0.5};
  }
  .header-segmentosLp a{
    transition: all 0.2s 0s ease-in-out;
    color: #000;
    text-decoration: none;
    font-size: 18px;
    margin: 7vw 20px 5px 20px;
    padding: 10px;
    text-shadow: 
               -1px -1px 0px #000, 
               -1px 1px 0px #000,                                 
                -1px 0px 0px #000;
}
    white-space: nowrap;
  }
  .itens_menuLp{
    display:flex;
    align-items:center;
    height: auto;
    border-bottom: 1px solid #ff5216;
  }
  .iconMenuLp{
    margin-top:15px;
    margin-left:5%;
    width:10%;
    height:10%;
    
  }
}
`;

const HeaderLp = () => {
  // Open defini se o menu mobile será aberto ou fechado
  const [open, setOpen] = useState(false);
  const [openSegmentos, setOpenSegmentos] = useState(false);
  const [openBurguer, setOpenBurguer] = useState(false);
  const [openBurguerTwo, setOpenBurguerTwo] = useState(false);
  function closeSegmentosLp(){
    setOpenBurguer(false);
    setOpen(false);
    setOpenSegmentos(false);
  }
  return (
    <StyledBody open={open} openBurguerTwo={openBurguerTwo}>
      <span id='topo'></span>
        <div className="header_containerLp">
          <header className="containerHomeLp">
            <StyledBurguer open={open} openSegmentos={openSegmentos} openBurguer={openBurguer}  openBurguerTwo={openBurguerTwo} onClick={() => {
              setOpenBurguer(!openBurguer);
              setOpenBurguerTwo(!openBurguerTwo);
              setOpen(!open); 
              if (openBurguer){
                setOpenBurguer(false);
                setOpen(false);
                setOpenSegmentos(false);
              }
            }}>
              <div className="burguer " />
              <div className="burguer " />
              <div className="burguer " />
            </StyledBurguer>
            <StyledMenuSegmentos openSegmentos={openSegmentos}>
              <nav className="header-segmentosLp">
                <div className="itens_menuLp">
                  <img src={pizza}
                  alt="pizza"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/Pizzaria">Pizzaria</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={hamburger}
                  alt="hamburguer"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/Hamburgueria">Hamburgueria</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={hot_dog}
                  alt="hot_dog"
                  className="iconMenuLp"
                  />
                <Link
                onClick={closeSegmentosLp}
                to="/Lanchonete">Lanchonete</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={restaurant}
                  alt="restaurant"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/Restaurante">Restaurantes</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={bread}
                  alt="bread"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/Padaria">Padarias e Confeitarias</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={coffe}
                  alt="coffe"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/Cafeteria">Cafeteria</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={cheers}
                  alt="cheers"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/Bar">Bares e Pubs</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={steak}
                  alt="steak"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/Churrascaria">Churrascarias</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={fast_food}
                  alt="fast_food"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/PracaAlimentacao">Praças de alimentação</Link>
                </div>
                <div className="itens_menuLp">
                  <img src={food_truck}
                  alt="food_truck"
                  className="iconMenuLp"
                  />
                <Link 
                onClick={closeSegmentosLp}
                to="/FoodTruck">Food Truck</Link>
                </div>       
              </nav>
            </StyledMenuSegmentos>
            <StyledMenu open={open}>
              <div className="row">
                <div className="col-sm-4 header-logoLp">
                <Link to="/">
                  <img src={logo} alt="Logo Datamais" className="logoHeaderLp" title="Datamais Sistemas" />
                </Link>
                </div>
                  <nav className="col-sm-8 header-linksLp">
                    <Link to="/">Início</Link>
                    <Link to="/QuemSomos">Quem somos</Link>
                    <Link 
                      className="buttonSegmentosLp"
                      onClick={() => {
                        setOpenSegmentos(!openSegmentos);
                        setOpen(!open);
                      }}>
                        Segmentos
                    </Link>
                    <Link className="only_desktopLp" to="/Segmentos">Segmentos</Link>
                    <Link to="/Suporte">Suporte</Link>
                    <a href="http://sistema.datamais.com.br/blog/">Blog</a>
                    <Link to="/seja-um-parceiro">Seja um parceiro</Link>
                    <Link to="/TrabalheConosco">Trabalhe conosco</Link>
                    <a href="https://api.whatsapp.com/message/NOV4TGWO6YLYO1?autoload=1&app_absent=0" className="whats_headerLp"><FaWhatsapp />&nbsp;Fale com nossa equipe</a>
                  </nav> 
              </div>
            </StyledMenu>
          </header>
        </div>
    </StyledBody>  
  );
}


export default HeaderLp;