import React from 'react';
import styled from'styled-components';

const StyledCardInfo = styled.div`
.cardLP-Mobile{
    display:none;
}

h1{
    margin-top: 2%;
    text-align: center;
    color: #fe5b13;
    font-weight: 800;
    font-size: 55px;
}
.divh2{
    display:flex;
    align-item:center;
    justify-content:center
}
.divh2 h2{
    color: #fe5b13;
    font-weight: 800;
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

.cardP{
    margin: auto auto 0px auto;
    color: #000;
    font-size: 25px;
    text-align: left;
    font-weight: 600;
    height:75%;
    width: 100%;
    padding-left:10%;
    padding-right:5%;
}
.div-btn-contact-bodyLPOne{
    width:35%;
    margin:auto;
    
}
}
.btn-contact-bodyLPOne{
    position: sticky;
    width:100%;
    margin: auto;
    height: 8vw !important;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#fefefe,#eeeeee,#d0d0d0,#767474);
    border-radius: 50px;
    box-shadow: inset 0px -15px 1em #ccc;
    white-space: nowrap;
    z-index:15 !important;
}

.btn-contact-bodyLPOne a{
    align-content: center;
    transition: all 0.5s ease;
    text-decoration: none;
    color: #fe5b13;
    font-weight: bold;
    font-size: 2.8vw;

}
.btn-contact-bodyLPOne a:hover{
    transition: all 0.7s ease;
    margin-left: 20px;
    color: #fe5b13;
}
h3{
    text-align: center;
    color: #fe5b13;
    font-weight: 600;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 8%;
    margin-bottom:0px;
    height:10px;
}
@media only screen and (max-width: 800px){
    .div-btn-contact-bodyLPOne{
        width:100%;
        height: 8vh;
        margin-bottom:40px;
    }
    .btn-contact-bodyLPOne{
        height: 20vw !important;
        width:80%;
    }
    .btn-contact-bodyLPOne a{
        font-size: 5.5vw;
    }

    .cardLP{
        display:none;
        
    }
     
    h3{
        text-align: center;
        color: #fe5b13;
        font-weight: 600;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;
    }
}
`;

const CardQuemSomos = () =>{
    return(
        <StyledCardInfo>
            <div className='cardLP'>
                <div className='card'>
                    <h3>Missão</h3>
                    <div className='cardP'>
                    <p>Desenvolver e implantar soluções para aumentar a competitividade de nosos clientes através de diferenciais que ofereçam menor esforço e maior aproveitamento dos recursos investidos.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Visão</h3>
                    <div className='cardP'>
                    <p>Ser reconhecida como empresa que oferece soluções eficazes para o gerenciamento e automatização de negócios e processos.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Valores</h3>
                    <div className='cardP'>
                    <p>Ética, Qualidade, Inovação, Seriedade, Comprometimento e Valorização das pessoas</p>
                    </div>
                </div>
            </div>
            <div className='div-btn-contact-bodyLPOne'>
                
                <div className="btn-contact-bodyLPOne">
                            <a href="https://api.whatsapp.com/message/NOV4TGWO6YLYO1?autoload=1&app_absent=0">Fale com nossa equipe!</a>
                </div>
            </div>
      
        </StyledCardInfo>
    )
}

export default CardQuemSomos;