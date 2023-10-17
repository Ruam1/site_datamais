import React, { useEffect } from 'react';
import styled from'styled-components';
import  { initPixelQuemSomos }  from '../../../services/facebookPixel';
import { logPixelPageView } from '../../../services/facebookPixel';
import { initPixelConvTrkr } from '../../../services/facebookPixel';
import { initGA } from '../../../services/googleAnalytics';


const StyledBodyOneQS = styled.div`
    .infoOne{
        margin:3% 10% 0px 10%;
        display:flex;
        flex-direction: column;
    }
    .infoOne h1{
        margin-bottom:2%;
        font-size:2.5vw;
        margin-right: auto;
        font-weight:600;
    }
    .h1Subli{
        background-color:#ff5019;
        width:15.9vw;
        height:5px;
        margin-top:-2%
    }
    .infoOne p{
        font-size:1.4vw;
        text-align:justify;
        margin-right: auto;
        margin-top:3%;
    }
    .infoQuemSomos{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        padding:15%;
        width: 100%;
        justify-content: center;
        background-color: #ff5019;
        padding: 5% 10% 5% 10%;
        border: solid 2px #000;
        line-height:25px;
    }
    .infoQuemSomos p{
        align-items: center;
        font-weight: 700;
        text-align: center;
        color: #fff;
        font-size: 1.8vw;
    }
    @media only screen and (max-width: 800px) {
        .infoOne h1{
            font-size:7vw;
        }
        .h1Subli{
            width:44.5vw;
        }
        .infoOne p{
            font-size:4.5vw;
            text-align:left;
        }
        .infoQuemSomos{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: auto;
            width: 100%;
            justify-content: center;
            padding: 10% 10% 10% 10%;
            border: solid 2px #000;
            
        }
        
        .infoQuemSomos p{
            font-weight: 700;
            text-align: center;
            color: #fff;
            font-size: 7vw;
            line-height:32px;
        }
        .infoQuemSomos p:nth-child(1){
            margin-bottom:-1%;
        }
    }
`;

const BodyQuemSomos = () =>{
    useEffect(() => {
        initPixelConvTrkr();
        logPixelPageView();
        initPixelQuemSomos();
        }, [])
        
    useEffect(() => {
        initGA();
        }, [])    
    return(
        <StyledBodyOneQS>
            <div className='infoOne'>
                <h1>Quem Somos</h1>
                <div className='h1Subli' />
                <p>
                    A Datamais foi fundada em 1996 e está situada no Vale do Itajaí, na cidade de Timbó/SC. Atuamos na área de desenvolvimento de sistemas comerciais e administrativos para atendimento de indústrias e varejo em Geral, Sistema para Bares, Restaurantes e afins, Sistemas para indústria têxtil – mais especificamente fiações e beneficiamento de malhas, Sistemas web, aplicativos, lojas virtuais e sites.
                </p>
                <p>
                    Desenvolvemos sistemas e soluções web que atendam as necessidades legais, produtivas e de negócio do cliente, proporcionando controles adequados, informações estratégicas para melhor gerenciamento, contribuindo com sua lucratividade e crescimento.
                </p>
            </div>
            <div className='infoQuemSomos'>      
                    <p>
                        Mais de 25 anos de 
                    </p>
                    <p>
                        Experiência em Desenvolvimento de Softwares Customizados
                    </p>           
            </div>
            <div className='infoOne'>
                <p>
                    Desenvolver soluções personalizadas torna o trabalho funcional e prático. A funcionalidade deve ser sempre o alvo principal. Levamos sempre em conta que para o cliente o importante é a vantagem que o projeto apresenta em termos de redução de tempo, otimização dos processos, adequação às rotinas e normas, clareza e facilidade de operação.
                </p>
                <p>
                    Disponibilizamos treinamento adequado com aproveitamento máximo dos recursos oferecidos pelo sistema, aprimorando processos operacionais, contribuindo para sua eficácia no mercado e seu desenvolvimento como um todo.
                </p>
            </div>
        </StyledBodyOneQS>
    )
}

export default BodyQuemSomos;