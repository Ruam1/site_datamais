import React, { useState, useEffect } from 'react';
import styled from'styled-components';
import apiFormClient from '../../../services/apiForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import  { initPixelTrabalheConosco }  from '../../../services/facebookPixel';
import { logPixelPageView } from '../../../services/facebookPixel';
import { initPixelConvTrkr } from '../../../services/facebookPixel';
import { initGA } from '../../../services/googleAnalytics';


const StyledBodyOneTC = styled.div`

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
.infoOne{
    padding-top:1%;
    margin:3% 10% 0px 10%;
    display:flex;
    flex-direction: column;
    position:sticky;
}
.infoOne h1{
    margin-bottom:2%;
    font-size:2.5vw;
    margin-right: auto;
}
.h1Subli{
    background-color:#ff5019;
    width:35.2vw;
    height:5px;
    margin-top:-2%;
    margin-bottom:2%;
}
.divForm {
   
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
    margin:4% auto 5% auto;
    color: #f05123;
    font-weight: 600;
    border-radius: 20px ;
    width: 15vw;
    height: 7vh;
    cursor:pointer;
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
    display: ${({ resumeConfirm }) => resumeConfirm ? 'none' : ''} !important;
}
.anexado{
    display: ${({ resumeConfirm }) => resumeConfirm ? '' : 'none'} !important;
}
.tamTextArea{
    height:40%;
    width:100%;
    background-color:#f1f1f1;
    border:none;
}
.infoOne p{
    font-size:1vw;
    margin-top:1%;
}
@media only screen and (max-width: 800px){
    [type="file"] + label {
     width:25vw;
     
    }
    .infoOne h1{
        margin-bottom:2%;
        font-size:7vw;
        margin-right: auto;
        text-align:center;
    }
    .h1Subli{
        background-color:#ff5019;
        width:35.2vw;
        height:5px;
        margin:-2% auto auto auto;
    }
    .divForm form{
        display: flex;
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
          display: flex;
          width:120%;
          height:auto;
          flex-direction:column;
      }
      .btn-enviarTC{
        font-size:4vw;
        margin:8% auto 5% auto;
        border-radius: 20px;
        width: 30vw;
        height: 6vh;
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
}
`;

const BodyTrabalheConosco = () =>{

    const [resumeConfirm, setResumeConfirm] = useState(false);
    const [cardFile, setCardFile] = useState();
    const [cardFileName, setCardFileName] = useState();

    useEffect(() => {
      initPixelConvTrkr();
      logPixelPageView();
      initPixelTrabalheConosco();
      }, [])


      useEffect(() => {
        initGA();
        }, [])

    const handleUploadFile = (e) => { 
        setCardFile(e.target.files[0]);
        const file = e.target.files[0];
        if (file.size > 1000000){
            notifyErroUpload()
        }else{
        let nameArq = e.target.files[0].name;
        let lowerName = nameArq.toLowerCase();
        setCardFileName(lowerName);
        setResumeConfirm(!resumeConfirm)
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
        let cityInput = document.querySelector("#inputcity");
        let city = cityInput.value;
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
... <p>Cidade: ${city}</p>
... <p>Informações Adicionais: ${info}</p>`;

        let encodeMsg =btoa(msg);
        const formClient = {
          "send_mail": {
          "from": "web@datamais.com.br",
          "to": "datamais@datamais.com.br",
          "from_name": "Site Comercial DataMais",
          "subject": "Formulário de contato do site",
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
        <StyledBodyOneTC resumeConfirm={resumeConfirm} >
             <div className='infoOne'>
                <h1><i>Venha fazer parte da <b>Datamais!</b></i></h1>
                <div className='h1Subli' />
                <p>Estamos sempre a procura de novos talentos para integrar a nossa equipe. Envie seus dados e seu currículo pelo formulário abaixo.</p>
                <div className='divForm'>
                    <form>
                        <div className='formOne'>
                        <label>Nome</label>
                        <input id="inputname" placeholder=''/>
                        <label >E-mail</label>
                        <input id="inputemail" />
                        <label>Telefone</label>
                        <input id="inputphone"/>
                        <label>Cidade/UF</label>
                        <input id="inputcity"/>
                        </div>
                        <div className='formTwo'>   
                            <h4 className='anexar'>"Anexar arquivo"</h4>
                            <h4 className='anexado'>"Arquivo anexado"</h4>
                            <label>Currículo</label> 
                            <input onChange={handleUploadFile}
                            type="file" id="file"  />
                            <label htmlFor="file" className='btn-1'>Procurar</label>
                            <label>Informações Adicionais</label>
                            <textarea id="inputinfo" className='tamTextArea' type="text" maxLength="4000"/>
                        </div>
                    </form>
                </div>
                <button 
                className='btn-enviarTC'
                onClick={loadResume}
                >
                Enviar</button>
                <ToastContainer />
            </div>
        </StyledBodyOneTC>
    )
}

export default BodyTrabalheConosco;