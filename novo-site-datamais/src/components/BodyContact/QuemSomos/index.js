import React from 'react';
import styled from'styled-components';
import bgTwo from '../../../images/lp datamais/bgTwoT.jpg';
import wavebot from '../../../images/lp datamais/wavebot.svg';
import wavetop from '../../../images/lp datamais/waveTop.svg';
import apiFormClient from '../../../services/apiForm';
import wavebotMobile from '../../../images/lp datamais/waveBotMobile.svg';
import wavetopMobile from '../../../images/lp datamais/wavetopMobile.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledContact = styled.div`
.wavebotMobile{
    display:none;
}
.wavetopMobile{
    display:none;
}
.wavetopMobileTwo{
    display:none;
}
.wavebot {
    z-index: 11 !important;
    margin-top: -20%;
  }
.wavetop{
    transform: scale(-1);
    margin-top: -4% !important;
    display: inline;
}
.formQS{
    display: flex;
    background-color: #f05123;
    margin-top: 5%;
}

.formQS form{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 8% auto auto auto;
    height: auto;
    width: 50vw;
    color: #fff;
    font-size: 2.5vw;
    font-weight: 700;
    text-align: center;
    padding:5%;
}
.formQS input{
    margin-top: 5%;
    width: 60%;
    color: #000;
    padding-left: 3%;
    z-index:100 !important;
}

.btn-enviarQS{
    margin-top: 5%;
    color: #f05123;
    font-weight: 600;
    border-radius: 20px ;
    width: 30%;
    height: 13%;
    cursor:pointer;
}
.mainImgQSTwo{
    width:50vw;
}

@media only screen and (max-width: 800px){
    .formQS{
        display:flex;
        flex-direction:column-reverse;
        background-color: #f05123;
        margin-top: -15%;
        margin-bottom:-8%;
    }
    
    .formQS form{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 10% auto -15% auto;
        height: 500px;
        width: 80%;
        color: #fff;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
    }
    .formQS input{
        width: 90%;
        color: #000;
        padding-left: 3%;
        box-shadow: 1px 2px 5px black;
    }
    
    .btn-enviarQS{
        color: #f05123;
        font-weight: 600;
        border-radius: 50px ;
        width: 50%;
        height: 13%;
        z-index:11 !important;
        box-shadow: 1px 2px 5px black;
        position:sticky;
    }
    .mainImgQSTwo{
        width:100%;
    }
    .wavebotMobile{
        display:block;
        margin-top:-20%;
        z-index:100 !important;
        display:none;
    }
    .wavetopMobile{
        display:inline;
        margin-bottom:12%;
    }
    .wavetopMobileTwo{
        position:sticky;
        display: inline;
        margin-top:-170%;
    }
    .wavebot {
        display:none;
      }
      .wavetop{
       
        display: none;
    }
}

`;

const ContactQuemSomos = () =>{
    function getInfoFormClient(){
        let nameInput = document.querySelector("#inputname");
        let name = nameInput.value;
        let emailInput = document.querySelector("#inputemail");
        let email = emailInput.value;
        let phoneInput = document.querySelector("#inputphone");
        let phone = phoneInput.value;
        //let msg = "Meu nome: "+name+" \nMeu e-mail: "+email+"\nMeu telefone : "+phone+"";
        const msg = `<h1 style="color: #5e9ca0;"><span style="color: #2b2301;">Contato do site</span></h1>
    ... <p>Nome: ${name}</p>
    ... <p>E-mail: <a href="mailto:${email}">${email}</a></p>
    ... <p>Telefone: ${phone}</p>`
        let encodeMsg =btoa(msg);

        
        const formClient = {
          "send_mail": {
          "from": "web@datamais.com.br",
          "to": "comercial@datamais.com.br",
          "from_name": "Site Comercial DataMais",
          "subject": "Formulário de contato do site",
          "msg": encodeMsg,
          "atachament": ""
          }
          }
        apiFormClient.post("index.php", formClient).then(result => {
          notifyConfirmSubmit()
        })
            
    }
    const notifyConfirmSubmit = () => {
      toast.success('Enviado com sucesso!', { 
        position: toast.POSITION.TOP_CENTER.RIGHT,
        autoClose: 3000,
        style:{
          textAlign: "left"
        }
      })
    }
    
    
    return(
        <StyledContact>
           
              <img src={wavebotMobile}
                    className="wavetopMobile"
                    alt="wave"
                />
                <img src={wavebot}
                className="wavetop"
                alt="wave"
                />
                
             <div className='formQS'>
             <img src={wavebotMobile}
                    className="wavebotMobile"
                    alt="wave"
                />
                <img src={bgTwo}
                    className="mainImgQSTwo"
                    alt="First img"
                />
                <form>
                    <label>Preencha esse formulário, para que nossos especialistas entrem em contato</label>
                    <input id="inputname" 
                    type="text" placeholder='Nome'/>
                    <input id="inputemail"  type="email" placeholder='E-mail'/>
                    <input id="inputphone" 
                    type="tel" placeholder='Telefone'/>
                    <button
                    onClick={getInfoFormClient} 
                    className='btn-enviarLP'>Enviar</button>
                    <ToastContainer />
                </form>
                
            </div>
            <img src={wavetopMobile}
                    className="wavetopMobileTwo"
                    alt="wave"
                />
            <img src={wavebot}
                className="wavebot"
                alt="wave"
                />
        </StyledContact>
    )
}

export default ContactQuemSomos;