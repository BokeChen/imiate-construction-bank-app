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

class Investment extends React.Component{
    constructor(props){
        super(props);
        this.props.fn.changeHeaderInfo("info","投资理财"); 
        this.props.fn.changeHeaderInfo("inp","hide"); 
        this.props.fn.changeHeaderInfo("div","show");
    }
    render(){        
               
      return(
          <div>
             <Header/>
                <div id="investment">
                <div className="investment-list">
                    <ul>
                        <li><a href="javascript:void(0)"><p></p>速盈</a></li>
                        <li><a href="javascript:void(0)"><p></p>基金投资</a></li>
                        <li><a href="javascript:void(0)"><p></p>理财产品</a></li>
                        <li><a href="javascript:void(0)"><p></p>结售汇</a></li>
                        <li><a href="javascript:void(0)"><p></p>账户商品</a></li>
                        <li><a href="javascript:void(0)"><p></p>账户贵金属</a></li>
                        <li><a href="javascript:void(0)"><p></p>代理保险</a></li>
                        <li><a href="javascript:void(0)"><p></p>全部投资产品</a></li>
                    </ul>
                </div>
            
                <div className="investment-ad">
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="investment-banner">
                    <img src={require("../src/images/t_01.jpg")} alt="手机尽情摇" className="show"/>
                    <img src={require("../src/images/t_01.jpg")} alt="手机尽情摇" className="hide"/>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="investment-hotSell">
                    <h1 className="headbar">最近热卖</h1>
                    <dl>
                        <dt><p>4.17%</p> <span>七日年化收益</span></dt>
                        <dd> <p>建信现金添利 <i></i></p><p>货币市场基金 <i></i></p><p>万份收益1.1525</p></dd>
                    </dl>
                </div>
                <div className="investment-info">
                    <h1 className="headbar">资讯 <span>更多></span></h1>
                    <ul>
                        <li><p>快讯提示：ECB执行委普雷特称，对未来通胀的基本预设仍高度依赖宽松</p><p>2017-07-04</p></li>
                    </ul>
                </div>
            
            
            </div>  
         
         
             <Footer/>        
          </div>
      );  
    }
}


   
export default connect(mapStoreStateToProps,mapDispatchToProps)(Investment);




