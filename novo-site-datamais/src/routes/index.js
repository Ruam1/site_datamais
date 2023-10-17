import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Segmentos from '../pages/Segmentos';
import Suporte from '../pages/Suporte';
import LP from '../pages/LP';
import QuemSomos from '../pages/QuemSomos';
import TrabalheConosco from '../pages/TrabalheConosco';
import SejaParceiro from '../pages/SejaParceiro';
import Blog from '../pages/Blog';

// import das paginas LP

import Bar from '../pages/LP/Bar';
import Cafeteria from '../pages/LP/Cafeteria';
import Churrascaria from '../pages/LP/Churrascaria';
import FoodTruck from '../pages/LP/FoodTruck';
import Hamburgueria from '../pages/LP/Hamburgueria';
import Lanchonete from '../pages/LP/Lanchonete';
import Padaria from '../pages/LP/Padaria';
import Pizzaria from '../pages/LP/Pizzaria';
import PracaAlimentacao from '../pages/LP/PracaAlimentacao';
import Restaurante from '../pages/LP/Restaurante';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/Segmentos' component={ Segmentos } />
            <Route exact path='/Suporte' component={ Suporte } />
            <Route exact path='/LP' component={ LP }  />
            <Route exact path='/QuemSomos' component={ QuemSomos }  />
            <Route exact path='/TrabalheConosco' component={ TrabalheConosco }  />
            <Route exact path='/seja-um-parceiro' component={ SejaParceiro }  />
            <Route exact path='/Blog' component={ Blog }  />
            {/*  Paginas dos segmentos LP  */}
            <Route exact path='/Bar' component={ Bar }  />
            <Route exact path='/Cafeteria' component={ Cafeteria }  />
            <Route exact path='/Churrascaria' component={ Churrascaria }  />
            <Route exact path='/FoodTruck' component={ FoodTruck }  />
            <Route exact path='/hamburgueria' component={ Hamburgueria }  />
            <Route exact path='/Lanchonete' component={ Lanchonete }  />
            <Route exact path='/Padaria' component={ Padaria }  />
            <Route exact path='/Pizzaria' component={ Pizzaria }  />
            <Route exact path='/PracaAlimentacao' component={ PracaAlimentacao }  />
            <Route exact path='/Restaurante' component={ Restaurante }  />
        </Switch>
    </BrowserRouter>
);

export default Routes;