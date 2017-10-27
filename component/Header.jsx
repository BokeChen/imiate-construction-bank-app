import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink as Link} from 'react-router-dom';

import {connect} from 'react-redux';
import P from 'prop-types';

import actions from '../src/action/action.jsx';

const mapStoreStateToProps = (state) =>(
    {
         mainText:state.app.mainText,
  
    }
);

const mapDispatchToProps = (dispatch,ownProps)=> ({
   fn:{
       changeText:(num)=> dispatch(actions.changeText(num))
   }
});


/**
 * (头部分类)
 * 
 * @class header
 * @extends {Component} 
 */






class Header extends React.Component { 

     render(){
    
        return( 
            <div id="header">
               <button></button>
               <input type="text" placeholder="搜索" className=""/>  
               <div>投资理财</div>           
               <button></button>
            </div>
    
        );
    
     }
   
    }

export default connect(mapStoreStateToProps,mapDispatchToProps)(Header);