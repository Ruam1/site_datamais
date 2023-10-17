import React from 'react';
import styled from'styled-components';
import bgTwo from '../../../images/lp datamais/bgTwoT.jpg';
import apiFormClient from '../../../services/apiForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imgHomeFormMobile from '../../../images/imgHome.png';
import img1 from '../../../images/moca.png';
import img2 from '../../../images/26anos.png';

const StyledContact = styled.div`
    display:flex;
    flex-flow:row no-wrap;
    justify-content:center;
    background: linear-gradient(-180deg, #fe6d10, #fe9647);

.imgMobile{
    display:none;
}
 .backgroundForm{
    width:40%;
    height:40vw;
    display:flex;
    flex-flow: row no-wrap;
    align-items: end;
 }   
.formHome{
    display: flex;
    flex-flow: column;
    justify-content:center;
    align-items:center;
}
.line1{
    font-weight: 700;
    white-space nowrap;
    color:#fff;
    font-size:3.27vw;
    font-family: 'Anton';
}
.line2{
    font-weight: 700;
    white-space nowrap;
    color:#fff;
    background-color: #dd1f4c;
    font-size:3vw;
    letter-spacing:-4.5px;
    padding-left:0.5vw;
    font-family: 'Fira Sans', sans-serif;
}
.line3{
    font-weight: 1000;
    white-space nowrap;
    color:#fff;
    font-size:2.43vw;
    font-family: 'Anton';
}
.line4{
    font-weight: 700;
    white-space nowrap;
    color: #f7d633;
    font-size:2.65vw;
    font-family: 'Anton';
}
.textHome{
    position: absolute;
    top: 8vw;
    left:23vw;
    width:20vw;
}
.img1{
    max-height:40vw;
    position:absolute;
    left: -4vw;
}
.img2{
    max-height:50vw;
    position:absolute;
    top: 15.5vw;
    left: 14vw;
}
.formHome form{
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    height: 28vw;
    width: 45vw;    
    margin-top:3vw;
    color: #fff;
    font-size: 2vw;
    font-weight: 700;
    border: solid 4px #fff;
    border-radius: 10px;
}
.formP1{
    color:#fff;
    font-weight: 100;
    white-space: nowrap;
    font-weight: 700;
    font-size:2.19vw;
    font-family: 'Anton';
    margin-top: -10%;
}
.formP2{
    color:#fff;
    font-weight: 100;
    white-space: nowrap;
    font-size:1vw;
    margin-bottom:1vw;
}
.formHome input{
    width: 65%;
    color: #000;
    z-index:100 !important;
    margin-bottom:1.2vw;
    padding:0.5vw;
    font-size:1vw;
    border-radius: 10px;
    border:none;
}

.btn-enviarQS{
    margin-top: -10%;
    color: #f05123;
    font-weight: 600;
    border-radius: 10px ;
    cursor:pointer;
    font-size:1.8vw;
    padding: 0.2vw;
    width:65%;
    z-index:100 !important;
    background: #fff;
    border: none;
    box-shadow: 0px 0px 10px #ffd0d0;
}
.btn-enviarQS:hover {
    box-shadow: 0 8px #ccc;
	transform: translateY(-3px);
    transition: all 0.1s ease;
}
.btn-enviarQS:active {
    background-color: #ccc;
	box-shadow: 0 5px #ccc;
	transform: translateY(4px);
}

.mainImgQSTwo{
    width:50vw;
}

.hrdouble{
    display: none;
}

@media only screen and (max-width: 1140px) and (min-width: 801px){
    .textHome{
        top: 12vw;
    }
    .img2{
        top: 17vw;
    }
    .line2{
        letter-spacing:-3px;
    }
}

@media only screen and (max-width: 800px){
    display:flex;
    flex-flow:column ;
    justify-content:center;
    background: linear-gradient(-180deg, #fe6d10, #fe9647);
    .textHome{
        display:none;
    }
    .img1{
        display:none;
    }
    .img2{
        display:none;
    }
    .imgMobile{
        display: inline;
        width:100%;
    }
    .backgroundForm{
        width:100%;
        height:auto;
    }
    .formHome form{
        height: 250px;
        width: 100%;
        margin-top:0px;
        padding:0px;
        color: #fff;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
        border: solid 3px #fff;
        border-radius: 10px;
        border: none;
    }
    .formP1{
        font-weight: 100;
        white-space: normal;
        font-weight: 700;
        font-size:5vw;
    }
    .formP2{
        white-space: normal;
        font-size:2.8vw;
        margin-left: 2vw;
        margin-bottom:1vw;
    }
    .formHome input{
        margin-bottom: 2vw;
        width: 90%;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #000;
        padding-left: 3%;
        box-shadow: 1px 2px 5px black;
        z-index:1 !important;
    }
    
    .btn-enviarQS{
        margin-top: -8%;
        font-size:5vw;
        height: 10vw;
        z-index:1 !important;
        margin-bottom: 5%;
    }
    .hrdouble{
        display: inline;
        width:100%;
        height: 2px;
        margin: 0px 0px 5px 0px;
        background-color: #fff; 
    }
}

`;

const ContactHome = () =>{
    function getInfoFormClientPromo(){
        let nameInput = document.querySelector("#inputnamePromo");
        let name = nameInput.value;
        let emailInput = document.querySelector("#inputemailPromo");
        let email = emailInput.value;
        let phoneInput = document.querySelector("#inputphonePromo");
        let phone = phoneInput.value;
        console.log("erro1");
        if (email === ""){
            notifyErrorSubmit()
          }else{
        //let msg = "Meu nome: "+name+" \nMeu e-mail: "+email+"\nMeu telefone : "+phone+"";
        const msg = `<h1 style="color: #5e9ca0;"><span style="color: #2b2301;">Contato do site</span></h1>
    ... <p>Nome: ${name}</p>
    ... <p>E-mail: <a href="mailto:${email}">${email}</a></p>
    ... <p>Telefone: ${phone}</p>`
        let encodeMsg =btoa(msg);
        console.log("erro2");
        
        const formClient = {
          "send_mail": {
          "from": "web@datamais.com.br",
          "to": "comercial@datamais.com.br",
          "from_name": "Site Comercial DataMais",
          "subject": "Formulário Promoção Home Site",
          "msg": encodeMsg,
          "atachament": ""
          }
          }
          console.log("erro3");
        apiFormClient.post("index.php", formClient).then(result => {
            console.log("erro4");
          notifyConfirmSubmit()
        })
        }
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
    const notifyErrorSubmit = () => {
        toast.warn('Preencha os campos antes do envio!', { 
          position: toast.POSITION.TOP_CENTER.RIGHT,
          autoClose: 3000,
          style:{
            textAlign: "left"
          }
        })
      }
    
    
    return(
        <StyledContact>
            <div className='backgroundForm'>
              <img src={img1}
                    className="img1"
                    alt="wave"
                />        
                <img src={img2}
                    className="img2"
                    alt="wave"
                />
                <img src={imgHomeFormMobile}
                    className="imgMobile"
                    alt="wave"
                />
                <div className='textHome'>
                    <h2 className='line1'>ASSINE UM MÊS</h2>
                    <h2 className='line2'>e ganhe OUTRO!</h2>
                    <h3 className='line3'>SEM TAXA DE ADESÃO</h3>
                    <h3 className='line4'>INSTALAÇÃO GRÁTIS</h3>
                </div>
            </div>       
            <div className='hrdouble' />
             <div className='formHome'>
                <form>
                    <label className='formP1'>Aproveite essa oportunidade agora mesmo</label>
                    <label className='formP2'>Preencha este formulário para que nossos especialistas entrem em contato.</label>
                    <input id="inputnamePromo" type="text" placeholder='Nome'/>
                    <input id="inputemailPromo" type="email" placeholder='E-mail'/>
                    <input id="inputphonePromo" type="tel" placeholder='Telefone'/>
                    </form>          
                    <button 
                    onClick={() => {
                        getInfoFormClientPromo()
                    }}
                    className='btn-enviarQS'>Enviar</button>
                    <ToastContainer />
            </div>
        </StyledContact>
    )
}

export default ContactHome;