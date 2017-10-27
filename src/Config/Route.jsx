import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';

import MainComponent from '../../component/Main.jsx';
//import Topic from '../../component/Topic.jsx';
import getComponent from '../../component/common/getComponent.jsx';


const routes =[
    {
        path:'/',
        exact:true,
        component: MainComponent
    },
    {
        path:'/CreditCard',
        exact:false,
        component: (props) => getComponent(props, ()=> import('../../component/CreditCard.jsx'))
    },
    {
        path:'/Investment',
        exact:false,
        component: (props) => getComponent(props, ()=> import('../../component/Investment.jsx'))
    },
    {
        path:'/Loan',
        exact:false,
        component: (props) => getComponent(props, ()=> import('../../component/Loan.jsx'))
    },
    {
        path:'/Ruixiangshenghuo',
        exact:false,
        component: (props) => getComponent(props, ()=> import('../../component/Ruixiangshenghuo.jsx'))
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
