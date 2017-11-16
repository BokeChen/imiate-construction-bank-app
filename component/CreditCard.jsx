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

class CreditCard extends React.Component{
    render(){
        this.props.fn.changeHeaderInfo("info","信用卡"); 
        this.props.fn.changeHeaderInfo("inp","hide"); 
        this.props.fn.changeHeaderInfo("div","show");     
      return(
          <div>
             <Header/>
             <div id="creditCard">
             <div className="creditCard-login">
                 <button></button>
                 <p>请登录查看您的信用卡账单和卡片信息</p>
             </div>
         
             <div className="creditCard-listSelf">
         
                 <ul>
                     <li><a href="javascript:void(0)"><p></p>为本人还款</a></li>
                     <li><a href="javascript:void(0)"><p></p>账单分期</a></li>
                     <li><a href="javascript:void(0)"><p></p>现金分期</a></li>
                     <li><a href="javascript:void(0)"><p></p>为他人还款</a></li>
                     <li><a href="javascript:void(0)"><p></p>建行还他行</a></li>
                     <li><a href="javascript:void(0)"><p></p>他行还建行</a></li>
                     <li><a href="javascript:void(0)"><p></p>现金转出</a></li>
                     <li><a href="javascript:void(0)"></a></li>
                 </ul>
                 <s className="long-line"></s>
             </div>
             <div className="creditCard-banner">
                 <a href="">
                     <img src={require("../src/images/s_01.jpg")} alt="龙卡云闪付" className="show"/>
                 </a>
                 <a href="">
                     <img src={require("../src/images/s_02.jpg")} alt="同程之礼" className="hide"/>
                 </a>
                 <a href="">
                     <img src={require("../src/images/s_03.jpg")} alt="龙卡家庭挚爱信用卡" className="hide"/>
                 </a>
                 <ul>
                     <li><a href="javascript:void(0)"></a></li>
                     <li><a href="javascript:void(0)"></a></li>
                     <li><a href="javascript:void(0)"></a></li>
                 </ul>
             </div>
             <div className="creditCard-list">
                 <h1 className="headbar">信用卡管理</h1>
                 <s className="long-line"></s>
                 <ul>
                     <li><a href="javascript:void(0)"><p></p>信用卡申请</a></li>
                     <li><a href="javascript:void(0)"><p></p>额度调整</a></li>
                     <li><a href="javascript:void(0)"><p></p>调额申请查询</a></li>
                     <li><a href="javascript:void(0)"><p></p>约定还款</a></li>
                     <li><a href="javascript:void(0)"><p></p>信用卡激活</a></li>
                     <li><a href="javascript:void(0)"><p></p>密码管理</a></li>
                     <li><a href="javascript:void(0)"><p></p>个人资料</a></li>
                     <li><a href="javascript:void(0)"><p></p>信用卡挂失</a></li>
                 </ul>
                 <s className="long-line"></s>
             </div>
             <div className="creditCard-applyforCards">
                 <h1 className="headbar"> 我要办卡 <span>更多卡片></span></h1>
                 <div>暂无推荐申请的卡片</div>
             </div>
         
             <div className="creditCard-recommendedMerchant">
                 <h1 className="headbar"> 优惠商户 <span> 周边商户></span></h1>
                 <div>暂无推荐推荐的商户</div>
             </div>
         </div>
            
             <Footer/>        
          </div>
      );  
    }
}

// <h1>mainText:{this.props.mainText}</h1>        
// <button onClick={()=>this.props.fn.changeText(1)}>修改mainText的值</button>

// <Link to="/topic">jumpe to Topic</Link> 

   
export default connect(mapStoreStateToProps,mapDispatchToProps)(CreditCard);




