
import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Route,BrowserRouter,HashRouter as Router, Swith,Redirect} from 'react-router-dom';
import RouteConfig from '../src/Config/Route.jsx';
import {Provider} from 'react-redux';
import store from '../src/Config/Store.jsx';
import './Config/fontSize';
//import './Style/Normalize.css';
import "./Style/main.css";

var div=document.createElement("div");
div.setAttribute("id","root");
document.body.insertBefore(div,document.body.childNodes[0]);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {RouteConfig}
        </Router>
    </Provider>
    ,document.getElementById('root'));

