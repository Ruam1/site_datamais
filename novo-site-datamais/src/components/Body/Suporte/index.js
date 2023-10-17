import React, { useState, useEffect } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import styled from'styled-components';
import apiFormClient from '../../../services/apiForm';
import ammyy from '../../../images/ammyy.png';
import anydesk from '../../../images/anydesk.png';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {initPixelSuporte }  from '../../../services/facebookPixel';
import { logPixelPageView } from '../../../services/facebookPixel';
import { initPixelConvTrkr } from '../../../services/facebookPixel';
import { initGA } from '../../../services/googleAnalytics';

const StyledBodySuporte = styled.div`
[type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
  }
  
  [type="file"] + label {
      width:20%;
    background: #f15d22;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    outline: none;
    padding: 2%;
    position: relative;
    transition: all 0.3s;
    
    &:hover {
      background-color:(#f15d22, 10%);
    }
    
    &.btn-1 {
      background-color: #ff6e0c;
      box-shadow: 0 6px #ff5415;

  
      &:hover {
        box-shadow: 0 4px darken(#f79159, 10%);
        top: 3px;
      }
    }
  }
    .container{
      margin-top:5%;
   }
   .container h1{
           font-size:2.5vw;
           margin-right: auto;
           font-weight:600;
   }
   .container p{
       margin-top:3%;
       font-size:1.3vw;
   }
   .menuPag{
       width:100%; 
       height:auto;
       display:flex;
       flex-direction:row;
       justify-content: space-around; 
   }
   h3{
       margin:auto;
       font-size:2vw;
   }
   .contato{
        width:60%;
        heigth:15px;
        display:flex;
        flex-direction:column;
        align-items: center;
   }
   .contato p{
       font-size: 20px;
   }
 
   .iconsContact{
        margin-top:-13px;
   }
   .contato h5{
       color:#44447;
   }
  .divicons{
      width:8vw;
  }
   .iconsSuporte{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        width:30%;
        cursor:pointer;
   }
   .iconsSuporte h5{
        color:#44447;
        margin-right:10px;
        white-space:nowrap;
    }
    .iconsSuporte a{
        color:#0d6efd;
    }
   .icons{
       width:40%;
       border: solid 2px;
       border-radius:10px;
       margin: 0px 5px 0px;
       border-color: #000;
   }

   .h1Subli{
       background-color:#ff5019;
       width:28.3vw;
       height:5px;
       margin-top:-0.7%;   
       margin-bottom:2%; 
   }

   .cardSuporte{
       width:100%;
       display:flex;
       flex-direction:row no-wrap;
       justify-content: space-around;
       margin-top:3%;
   }
   .card{
       height: 300px;
       width:25%;
       box-shadow: 0 0 1em #ccc;
       margin-bottom: 5%;
       border-radius: 18px !important;
   }
   .card h4{
       margin:5% auto;
       color:#ff5216;
       text-align:center;
       font-weight:600;
   }
   .card p{
        font-size:15px;
        margin-top:25%;
        color:red;
        white-space:nowrap;
   }
   .titleCard{
       margin-left:5%;
       margin-right:5%;
       height:30%;
   }
   .infoCard{
        margin:8% auto auto auto;
   }
   .iconsCard{
       margin-right:10px;
   }
   .subtitulo{
       display:flex;
       margin-top:2%;
   }
   h6{
        margin:5% auto;
        text-align:center;
        font-weight:600;
   }
   .divForm{
       width:80%;
       margin:3% auto 3% auto;
   }
   .divForm form{
    display: flex;
    align-items: left;
    flex-direction: row;
    margin: 0px 0px 0px 0px;
    height: auto;
    width: 100%;
    font-size: 1.4vw;
}
.divForm input{
    width:80%;
    background-color:#f1f1f1;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    
}
.formTwo input:nth-child(8){
    width:100%;
}
.divForm label{
  margin-top:1%;
}
.btn-enviarTC{
    font-size:1.5vw;
    margin:15% auto 5% auto;
    color: #f05123;
    font-weight: 600;
    border-radius: 20px ;
    width: 15vw;
    height: 7vh;
    cursor:pointer;
}
.divButton{
    diplay:flex;
    justify-content:center;
    margin:auto;
    width:18%;
}
.formOne{
  display: flex;
  flex-direction:column;
  width:56%;
}
.formTwo{
    display: flex;
    width:44%;
    height:auto;
    flex-direction:column;
}
.formTwo h4{
    font-size:1.5vw;
    left:52.5vw;
    top:13vw;
    position:absolute
}
.anexar{
    display: ${({ imgConfirm }) => imgConfirm ? 'none' : ''} !important;
}
.anexado{
    display: ${({ imgConfirm }) => imgConfirm ? '' : 'none'} !important;
}
@media only screen and (max-width: 1200px) and (min-width: 1001px) {
    .infoCard h5{
        margin:5% auto;
        text-align:center;
        font-size:1.5vw;
   }
   .iconsCard{
       margin-right:10px;
   }
   .subtitulo{
       margin-top:2%;
   }
   
}   
@media only screen and (max-width: 1000px) and (min-width: 801px) {
    .card p{
        font-size:10px;
        margin-top:45%;
        color:red;
        white-space:nowrap;
   }
   .infoCard h5{
    margin:5% auto;
    text-align:center;
    font-size:1.5vw;
}
.iconsCard{
   margin-right:10px;
}
.subtitulo{
   margin-top:2%;
}
}

@media only screen and (max-width: 800px){
    [type="file"] + label {
     width:25vw;
     
    }
    .container h1{
        margin-bottom:2%;
        font-size:6vw;
        margin-right: auto;
        
    }
    .h1Subli{
        background-color:#ff5019;
        width:68vw;
        height:5px;
        margin-top:-2%;
    }
    .divForm form{
        align-items: left;
        flex-direction: column;
        margin: 2% 0px 0px 0px;
        height: auto;
        width: 100%;
        font-size: 5vw;
    }
    .formOne{
        display: flex;
        flex-direction:column;
        width:120%;
      }
      .formTwo{
          width:120%;
          height:auto;
          flex-direction:column;
      }
      .btn-enviarTC{
        font-size:4vw;
        border-radius: 20px;
        width: 30vw;
        height: 6vh;
    }
    .divButton{
        justify-content:center;
        margin:auto;
        width:35%;
        margin-top:4%;
    }
    .formTwo h4{
        font-size:4vw;
        left:27vw;
        top:119vw;
        position:absolute;
    }
    .infoOne p{
        font-size:3vw;
        margin-top:5%;
    }
    .tamTextArea{
        height:40%;
        width:80%;
        background-color:#f1f1f1;
        border:none;
    }
    .formTwo input:nth-child(8){
        width:80%;
    }
    .menuPag{
        flex-direction:column;
        width:100%;
    }
    .contato{
        width:100%;
        heigth:15px;
        display:flex;
        flex-direction:row;
        align-items: center;
   }
   .contato p{
       font-size: 18px;
   }
 
   .iconsContact{
        margin-top:13px;
   }
   .contato h5{
       color:#44447;
   }
  .divicons{
      width:200px;
  }
 
   .iconsSuporte{
        display:flex;
        margin:auto;
        align-items:center;
        width:70%;
        cursor:pointer;
       
   }
   .icons{
       width:32%;
   }
   h3{
       font-size:5vw;
   }
   .cardSuporte{
    width:100%;
    flex-direction:column;
    margin-top:3%;
}
.card{
    height: 300px;
    width:80%;
    box-shadow: 0 0 1em #ccc;
    margin: 3% auto 3% auto;
    border-radius: 18px !important;
}
.card h4{
    margin:5% auto;
    color:#ff5216;
    text-align:center;
    font-weight:600;
}
.titleCard{
    margin-left:5%;
    margin-right:5%;
    height:30%;
}
.infoCard{
     margin:8% auto auto auto;
}
.iconsCard{
    margin-right:10px;
}
.subtitulo{
    display:flex;
    margin-top:2%;
}
h6{
     margin:5% auto;
     text-align:center;
     font-weight:600;
}
}
`;

const BodySuporte = () =>{
    const [imgConfirm, setImgConfirm] = useState(false);
    const [cardFile, setCardFile] = useState();
    const [cardFileName, setCardFileName] = useState();

    useEffect(() => {
        initPixelConvTrkr();
        logPixelPageView();
        initPixelSuporte();
        }, [])

    useEffect(() => {
        initGA();
        }, [])
        
    const handleUploadFile = (e) => { 
        setCardFile(e.target.files[0]);
        const file = e.target.files[0];
        if (file.size > 4000000){
            notifyErroUpload()
        }else{
        let nameArq = e.target.files[0].name;
        let lowerName = nameArq.toLowerCase();
        setCardFileName(lowerName);
        setImgConfirm(!imgConfirm)
        }
        
    };

    const loadResume = async () => {
        
        const formData = new FormData();
        formData.append('image', cardFile);
        let url = "https://datamais.com.br/datamais-api/mail/mail_file.php";
        const headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            APIAuthorization: 'ZGF0YW1haXMtYXV0b2F0ZW5kaW1lbnRvQDIwMjE',
        }
        axios.post(url, formData, {})
            .then(res => {
                var resume = document.getElementById("inputArquivo");
                getInfoFormResume(resume);
            })
    }

    function getInfoFormResume(resume){
        let nameInput = document.querySelector("#inputname");
        let name = nameInput.value;
        let emailInput = document.querySelector("#inputemail");
        let email = emailInput.value;
        let phoneInput = document.querySelector("#inputphone");
        let phone = phoneInput.value;
        let infoInput = document.querySelector("#inputinfo");
        let info = infoInput.value;
        if (email === ""){
            notifyErrorSubmit()
          }else{
        //let msg = "Meu nome: "+name+" \nMeu e-mail: "+email+"\nMeu telefone : "+phone+"\nMinha cidade: "+city+"\nInformações adicionais: "+info+"";
        const msg = `<h1 style="color: #5e9ca0;"><span style="color: #2b2301;">Contato do site</span></h1>
... <p>Nome: ${name}</p>
... <p>E-mail: <a href="mailto:${email}">${email}</a></p>
... <p>Telefone: ${phone}</p>
... <p>Informações Adicionais: ${info}</p>`;

        let encodeMsg =btoa(msg);
        const formClient = {
          "send_mail": {
          "from": "web@datamais.com.br",
          "to": "datamais@datamais.com.br",
          "from_name": "Site Comercial DataMais Suporte",
          "subject": "Formulário de suporte do site",
          "msg": encodeMsg,
          "atachament": cardFileName
          }
          }
        apiFormClient.post("index.php", formClient).then(result => {
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
      const notifyErroUpload = () => {
        toast.warn('O arquivo não pode exceder o limite máximo de 1MB!', { 
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
       <StyledBodySuporte imgConfirm={imgConfirm}>
           <div className="container">
                    <h1>Precisando de suporte?</h1> 
                        <div className="h1Subli" />
                        <div className="menuPag">
                            <div className="contato">
                            <p>Nossa equipe está de prontidão para ajudar você.
                            <br></br>
                            Nosso plantão, das 18:00h às 00:00h, atenderá as emergências para que sua empresa não pare.</p>
                            </div>
                            <div className="iconsSuporte">
                                <h5><i>Suporte Remoto:</i></h5>
                                <div className="divicons">
                            <a target="_blank" href="https://onedrive.live.com/?authkey=%21ALlRqCeMzcrv7q8&id=BFED2C5F463ADE0A%2123180&cid=BFED2C5F463ADE0A&parId=root&parQt=sharedby&o=OneUp" rel="noreferrer">
                                <img
                                src={anydesk}
                                alt="Icon"
                                className="icons"
                                />
                            </a>
                            <a target="_blank" href="http://datamais.com.br/download/DMAmmy.exe" rel="noreferrer">
                            <img
                            src={ammyy}
                            alt="IconAmmyy"
                            className="icons"
                            />
                            </a>
                            </div>
                            </div>
                        </div>
                        <div className="subtitulo">
                        <h3>Veja abaixo os horários e modalidades de suporte</h3>
                        </div>
               <div className="cardSuporte">
                   <div className="card">
                     <div className="titleCard">
                       <h4>Segunda à Sexta</h4>
                       </div>
                       <div className="infoCard">
                       <h5>das 08:00 às 18:00 horas</h5>  
                        <h5> <BsTelephoneFill 
                                className="iconsCard" 
                                color="#ff5216" 
                                size={30} />(47)<b>3382-7212</b></h5>
                                <h6>Opção 1</h6>
                       </div>
                    </div>
                   <div className="card">
                    <div className="titleCard">
                       <h4>Segunda à Sexta</h4> 
                       </div>
                       <div className="infoCard">
                       <h5>das 18:01 às 00:00 horas</h5>
                       <h5><BsTelephoneFill 
                                className="iconsCard" 
                                color="#ff5216" 
                                size={30} />(47)<b>98819-6899</b></h5>
                                <h6>Plantão</h6>
                                <p>Suporte técnico de emergência</p>
                       </div>
                    </div>
                   <div className="card">
                       <div className="titleCard">
                       <h4>Sábados, Domingos e Feriados </h4> 
                       </div>
                       <div className="infoCard">
                       <h5>das 08:00 às 00:00 horas</h5> 
                       <h5><BsTelephoneFill 
                                className="iconsCard" 
                                color="#ff5216" 
                                size={30} />(47) <b>98819-6899</b></h5>
                                <h6>Plantão</h6>
                                <p>Suporte técnico de emergência</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="subtitulo">
                <h3>Se preferir nos envie um e-mail</h3>
            </div>
           
           <div className='divForm'>
                    <form>
                        <div className='formOne'>
                        <label>Nome</label>
                        <input id="inputname" placeholder=''/>
                        <label >E-mail</label>
                        <input id="inputemail" />
                        <label>Telefone</label>
                        <input id="inputphone"/>
                        </div>
                        <div className='formTwo'>   
                            <label className='anexar'>Anexar imagem:</label> 
                            <label className='anexado'>Imagem anexada!</label> 
                            <input onChange={handleUploadFile}
                            type="file" id="file"  />
                            <label htmlFor="file" className='btn-1'>Procurar</label>
                            <label>Informações Adicionais</label>
                            <textarea id="inputinfo" className='tamTextArea' type="text" maxLength="4000"/>
                        </div>
                    </form>
                    <div className='divButton'>
                        <button 
                        className='btn-enviarTC'
                        onClick={loadResume}
                        >
                        Enviar</button>
                    </div>
          <ToastContainer />
                </div>
       </StyledBodySuporte>

   )
}

export default BodySuporte