import React from 'react';
import styled from'styled-components';
import logo from '../../../../images/logo_escrita.png'
import mockup from '../../../../images/lp datamais/mockupMobile.jpg';
import wavebot from '../../../../images/lp datamais/wavebot.svg';

const StyledCardInfo = styled.div`
.cardLP-Mobile{
    display:none;
}
.mockupMobile{
    display:none;
}
.wavebot{
    display: none;
}
.logoDatamais{
    margin-left:42%;
    margin-bottom:2%;
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

.card .pLower{
    font-weight: 300;
    font-size: 20px;
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
    .divh2{
        margin-left:5%;
        margin-right:5%;
        text-align: center;
    }
    .divh2 h2{
        color: #fe5b13;
        font-weight: 800;
    }
    .mainImgLPLogo{
        margin:25% auto 10% 5%;
        width:90%;
    }
    h1{
        margin-top: 10%;
        text-align: center;
        color: #fe5b13;
        font-weight: 800;
        font-size: 40px;
    }
    .cardLP{
        display:none;
        
    }
    .cardLP-Mobile{
        display:block !important;
        margin-top:0px;
        padding-left:5%;
        width:95%;
    }
    
    ul li{
        color:#fe5b13;
        font-size:28px;
        margin:5% 0px 5% 0px;
      }
      
      ul li span{
        color:#404041;
        font-weight:600;
      }
    
    h3{
        text-align: center;
        color: #fe5b13;
        font-weight: 600;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;
    }
    .mockupMobile{
        width:100%;
        margin-bottom:-20%;
        display: inline;
        z-index: 2 !important;
        
    }
    .wavebot{
        transform: scale(-1);
        margin-bottom:-40%;
        z-index:2 !important;
        position: sticky;
        display:inline;
    }
}
`;

const CardInfo = () =>{
    return(
        <StyledCardInfo>
            <h1>Conheça nossas principais soluções</h1>
            <div className='cardLP'>
                <div className='card'>
                    <h3>Autoatendimento</h3>
                    <div className='cardP'>
                    <p>Apenas apontando o celular para um QrCode, o cliente consegue enviar o pedido direto para a cozinha ou para a copa.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Automação na pesagem</h3>
                    <div className='cardP'>
                    <p>Assim que o prato é pesado, automaticamente é adicionado na comanda eletrônica. Pensado da melhor forma para tornar o seu trabalho mais dinâmico.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Comanda Digital</h3>
                    <div className='cardP'>
                    <p>Seu garçom estará apto a anotar os pedidos.</p>
                    <p>Com apenas alguns toques no celular o pedido é enviado para cozinha ou copa, sem precisar se deslocar.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Frente de Caixa</h3>
                    <div className='cardP'>
                    <p>Evite longas filas!</p>
                    <p>Com apenas 3 toques feche a conta do cliente e imprima o comprovante.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Delivery</h3>
                    <div className='cardP'>
                    <p>Receba pedidos por multicanais.</p>
                    <p>Calcule o frete de acordo com o CEP.</p>
                    <p>Envie o pedido direto para a produção.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Integração com iFood</h3>
                    <div className='cardP'>
                    <p>Todos seus pedidos feitos na plataforma também são gerenciáveis pelo Datamais, trazendo praticidade e precisão nos seus dados.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Cadastro de insumos e receitas</h3>
                    <div className='cardP'>
                    <p>Tenha controle do seu estoque!</p>
                    <p>Saiba em tempo real quais itens não atingem a margem de lucro desejada.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Suporte Personalizado</h3>
                    <div className='cardP'>
                    <p>Nossa equipe está de prontidão para solucionar qualquer problema que possa surgir.</p>
                    <p>Todos os dias das 08:00 às 00:00, incluindo sábados, domingos e feriados.</p>
                    </div>
                </div>
                <div className='card'>
                    <h3>Integração com Accon</h3>
                    <div className='cardP'>
                    <p>Tenha um cardápio online para seu Delivery com a gestão completa do Datamais.</p>
                    </div>
                </div>
            </div>
            <div className='cardLP-Mobile'>
                <ul>
                    <li><span>Autoatendimento</span></li>
                    <li><span>Automação na pesagem</span></li>
                    <li><span>Comanda Digital</span></li>
                    <li><span>Frente de Caixa</span></li>
                    <li><span>Delivery</span></li>
                    <li><span>Integração com iFood</span></li>
                    <li><span>Cadastro de insumos e receitas</span></li>
                    <li><span>Suporte todo dia 08:00 às 00:00, incluindo sábados, domingos e feriados.</span></li>
                    <li><span>Integração com Accon</span></li>
                    <li><span>E muito mais.</span></li>
                </ul>
            </div>
            <div className='divh2'><h2>Datamais é o sistema ideal para o seu negócio!</h2></div>
            <div className='div-btn-contact-bodyLPOne'>
                
                <div className="btn-contact-bodyLPOne">
                            <a href="https://api.whatsapp.com/message/NOV4TGWO6YLYO1?autoload=1&app_absent=0">Fale com nossa equipe!</a>
                </div>
            </div>
            <img src={wavebot}
                className="wavebot"
                alt="wave"
                />
            <img 
                        src={mockup}
                        className="mockupMobile"
                        alt="First img"
                    />
        </StyledCardInfo>
    )
}

export default CardInfo;