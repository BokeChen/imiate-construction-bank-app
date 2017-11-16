import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink as Link} from 'react-router-dom';

import {connect} from 'react-redux';
import P from 'prop-types';

import actions from '../src/action/action.jsx';

const mapStoreStateToProps = (state) =>(
    {
         headerInfo:state.app.headerInfo,
         headerInp:state.app.headerInp,
         headerDiv:state.app.headerDiv
  
    }
);

const mapDispatchToProps = (dispatch,ownProps)=> ({
   fn:{
       changeHeaderInfo:(string)=> dispatch(actions.changeInfor(infotype,string))
   }
});


/**
 * (头部分类)
 * 
 * @class header
 * @extends {Component} 
 */






class Header extends React.Component {
    constructor(props){
        super(props);       
    }
     render(){
    
        return( 
            <div id="header">
               <button></button>
               <input type="text" placeholder="水费" className={this.props.headerInp}/>  
               <div className={this.props.headerDiv}>{this.props.headerInfo}</div>           
               <button></button>
            </div>
    
        );
    
     }
   
    }

export default connect(mapStoreStateToProps,mapDispatchToProps)(Header);