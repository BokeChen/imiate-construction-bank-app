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
 * (分类)
 * // <Link to="/topic">jumpe to Topic</Link> 
 * @class footer
 * @extends {Component} 
 */
class Footer extends React.Component {   
    
     render(){
    
        return( 
            <div id="footer">
              <b></b>
              <span></span>
                        
            <Link to="/">
            <s><i className="i-active"></i></s>                
                首页
            </Link>
            <Link to="/CreditCard">
                <i></i>
                信用卡
            </Link>
            <Link to="/Investment">
                <i></i>
                投资理财
            </Link>
            <Link to="/Loan">
                <i></i>
                贷款
            </Link>
            <Link to="/Ruixiangshenghuo">
                <i></i>
                悦享生活
            </Link> 
          </div>
    
        );
    
     }
   
    }

export default connect(mapStoreStateToProps,mapDispatchToProps)(Footer);