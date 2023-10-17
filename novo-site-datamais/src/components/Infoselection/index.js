import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import apiFormClient from '../../services/apiForm';
import bread from '../../images/segments/bread.png';
import cheers from '../../images/segments/cheers.png';
import coffe from '../../images/segments/coffee.png';
import fast_food from '../../images/segments/fast-food.png';
import food_truck from '../../images/segments/food-truck.png';
import hamburger from '../../images/segments/hamburger.png';
import hot_dog from '../../images/segments/hot-dog.png';
import pizza from '../../images/segments/pizza.png';
import restaurant from '../../images/segments/restaurant.png';
import steak from '../../images/segments/steak.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initPixelConvTrkr } from '../../services/facebookPixel';
import { logPixelPageView } from '../../services/facebookPixel';
 


const Infoselection = () => {
  function getInfoFormClient(){
    let nameInput = document.querySelector("#inputname");
    let name = nameInput.value;
    let emailInput = document.querySelector("#inputemail");
    let email = emailInput.value;
    let phoneInput = document.querySelector("#inputphone");
    let phone = phoneInput.value;
    if (email === ""){
      notifyErrorSubmit()
    }else{
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

  return (
  <div class = "container info_selection">
    <div class = "row">
      <div class = "col-sm-12 info_title">
      <span id='segmentos'></span>
        <p >Desenvolvemos soluções inteligentes</p>
      </div>
      <div class = "col-sm-12 info_sub_title">
      <p>Focadas em otimizar a gestão e descomplicar seu negócio, facilitando a sua vida</p>
      </div>
      <div class = "col-sm-12 info_title_options hidden_mobile">
        <p>Selecione seu segmento!</p>
      </div>
      <div class = "hidden_mobile"> 
        <div class = "block_segmets ">
          <div class = "col-sm-1"></div>
          <div class = "col-sm-2 info_option">
          <Link to="/Pizzaria">
            <img className="image_segments" alt='img' src= {pizza}></img><a>Pizzaria</a>
          </Link>
          </div>
            
          <div class = "col-sm-2 info_option">
          <Link to="/Hamburgueria">
            <img className="image_segments" alt='img' src= {hamburger}></img><a>Hamburgueria</a>
            </Link>
            </div>
          <div class = "col-sm-2 info_option">
          <Link to="/Lanchonete">
            <img className="image_segments" alt='img' src= {hot_dog}></img><a>Lanchonete</a>
          </Link>
          </div>
          <div class = "col-sm-2 info_option">
          <Link to="/Cafeteria">
            <img className="image_segments" alt='img' src= {coffe}></img><a>Cafeteria</a>
          </Link>
            </div>
            
        </div>
        <div class = "block_segmets ">
          <div class = "col-sm-1"></div>
          <div class = "col-sm-2 info_option">
          <Link to="/Bar">
            <img className="image_segments" alt='img' src= {cheers}></img><a>Bares e Pubs</a>
            </Link>
            </div>
          <div class = "col-sm-2 info_option">
          <Link to="/Padaria">
            <img className="image_segments" alt='img' src= {bread}>
              </img><a>Padarias e Confeitarias</a>
            </Link>
              </div>
          <div class = "col-sm-2 info_option">
          <Link to="/Restaurante">
            <img className="image_segments" alt='img' src= {restaurant}></img><a>Restaurantes</a>
            </Link>
            </div>
          <div class = "col-sm-2 info_option">
          <Link to="/Churrascaria">
            <img className="image_segments" alt='img' src= {steak}></img><a>Churrascarias</a>
            </Link>
            </div>
        </div>
        <div class = "block_segmets ">
          <div class = "col-sm-1"></div>
          <div class = "col-sm-2 space_image_segmets"></div>
          <div class = "col-sm-2 info_option">
          <Link to="/PracaAlimentacao">
            <img class = "image_segments" alt='img' src= {fast_food}></img>
            <a>Praças de alimentação</a>
            </Link>
            </div>
          <div class = "col-sm-2 info_option">
          <Link to="/FoodTruck">
            <img class = "image_segments" alt='img' src= {food_truck}></img><a>Food Truck</a>
            </Link>
            </div>
          <div class = "col-sm-2 space_image_segmets"></div>
        </div>
      </div>

      <div class = "visible_mobile">
        <form>
          <div class="form-group info_form">
            <select id="inputsegment" class="form-control ls-custom-select info_input">  
            <option selected class = "info_form_option">Selecione seu segmento</option>
            <option class = "info_form_option">Restaurantes</option>
            <option class = "info_form_option">Padarias e Confeitarias</option>     
            <option class = "info_form_option">Cafeteria</option>
            <option class = "info_form_option">Churrascarias</option>
            <option class = "info_form_option">Bares e Pubs</option>
            <option class = "info_form_option">Hamburgueria</option>
            <option class = "info_form_option">Lanchonete</option>
            <option class = "info_form_option">Food Truck</option>
            <option class = "info_form_option">Pizzaria</option>
            <option class = "info_form_option">Praças de alimentação</option>
            </select>
         </div>
         <div class="info_solucao_button">
         <Link   to="/LP">Ver Solução</Link>
         </div>
         <div className='hrdouble' />
          <div className='hrdouble' />
         <div class = "info_title">
            <p>Entre em contato</p>
         </div>
          <div class="form-group info_form">
            <input type="text" class="form-control  info_input" id="inputname" placeholder="Nome" required />
          </div>
          <div class="form-group info_form">
            <input type="email" class="form-control  info_input" id="inputemail" placeholder="E-mail" required />
          </div>
          <div class="form-group info_form">
            <input type="tel" class="form-control  info_input" id="inputphone" placeholder="Telefone"  required />
          </div>
    </form>
          <button 
          class="info_form_button"
          onClick={() => {
            getInfoFormClient()
          }}>
          Enviar</button>
          <ToastContainer />
      </div>
    </div>
  </div>
  );
}

export default Infoselection;