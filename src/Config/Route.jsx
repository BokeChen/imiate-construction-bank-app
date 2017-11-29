import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';

import MainComponent from '../../component/Main.jsx';
import CreditCardComponent from '../../component/CreditCard.jsx';
import InvestmentComponent from '../../component/Investment.jsx';
import LoanComponent from '../../component/Loan.jsx';
import RuixiangshenghuoComponent from '../../component/Ruixiangshenghuo.jsx';
//import getComponent from '../../component/common/getComponent.jsx';


const routes =[
    {
        path:'/',
        exact:true,
        component: MainComponent
    },
    {
        path:'/CreditCard',
        exact:false,
        component: CreditCardComponent 
    },
    {
        path:'/Investment',
        exact:false,
        component: InvestmentComponent
    },
    {
        path:'/Loan',
        exact:false,
        component: LoanComponent
    },
    {
        path:'/Ruixiangshenghuo',
        exact:false,
        component:RuixiangshenghuoComponent
       // component: (props) => getComponent(props, ()=> import('../../component/Ruixiangshenghuo.jsx'))
    },
];



const RouteConfig = (
    <Switch>
    {
      routes.map((route,index)=>(
                  <Route
                   key ={index}
                   path={route.path}
                   exact={route.exact}
                   component={route.component}                
                  />
                ))
    }
    <Redirect from='' to="/" />
    </Switch>
);  

 

export default RouteConfig;
