import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink as Link} from 'react-router-dom';

import {connect} from 'react-redux';
import P from 'prop-types';

import actions from '../src/action/action.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


const mapStoreStateToProps = (state) =>(
    {
        headerInfo:state.app.headerInfo,
        headerInp:state.app.headerInp,
        headerDiv:state.app.headerDiv
  
    }
);

const mapDispatchToProps = (dispatch,ownProps)=> ({
   fn:{
    changeHeaderInfo:(infotype,string)=> dispatch(actions.changeInfo(infotype,string)),
   }
});

class Loan extends React.Component{
    render(){
        this.props.fn.changeHeaderInfo("info","贷款");   
        this.props.fn.changeHeaderInfo("inp","hide"); 
        this.props.fn.changeHeaderInfo("div","show");       
      return(
          <div>
             <Header />
             <div id="loan">
                <div className="loan-top">
                    <h1>晚上好！</h1>
                    <button></button>
                    <ul>
                        <li>
                            <a href="javascript:void(0)"><p></p>还款</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><p></p>借贷通</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><p></p>支用 </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><p></p>我的贷款 </a>
                        </li>
            
                    </ul>
                </div>
            
                <div className="loan-list">
                    <ul>
                        <li><a href="javascript:void(0)"><p></p>我的额度</a></li>
                        <li><a href="javascript:void(0)"><p></p>贷款试算</a></li>
                        <li><a href="javascript:void(0)"><p></p>利率查询</a></li>
                        <li><a href="javascript:void(0)"></a></li>              
                    </ul>
            
                </div>
            
            <div className="loan-banner">
                <h1 className="headbar">精彩推荐</h1>
                <img src={require("../src/images/four_01.jpg")} alt="快贷" />
                <img src={require("../src/images/four_02.jpg")} alt="手机尽情摇" />
            </div>
                
            </div>
             <Footer/>        
          </div>
      );  
    }
}
 
export default connect(mapStoreStateToProps,mapDispatchToProps)(Loan);




