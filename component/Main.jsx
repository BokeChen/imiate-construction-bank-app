import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink as Link} from 'react-router-dom';

import {connect} from 'react-redux';
import P from 'prop-types';

import actions from '../src/action/action.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import lxtxjpg from '../src/images/lxtx.jpg';

const mapStoreStateToProps = (state) =>(
    {
         // 指定state的参数上传      
         mainTopUl:state.app.mainTopUl,
         mainListUl:state.app.mainListUl,
         mainTopSayHi:state.app.mainTopSayHi,
         mainBannerImg:state.app.mainBannerImg,
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






class MainComponent extends React.Component{
    constructor(props){ 
        super(props) ; //必须有super（） 
        this.props.fn.changeHeaderInfo("inp","show"); 
        this.props.fn.changeHeaderInfo("div","hide"); 
      
    } 
    render(){
      var {mainTopUl,mainTopSayHi,mainListUl,mainBannerImg} = this.props;
     return(
          <div>
             <Header/>
             <div id="main">
                 <div className="main-top">
                    <h1>{mainTopSayHi}</h1>
                    <button></button>
                    <ul>
                        { mainTopUl.map((value)=>( <li><a href="javascript:void(0)"><p></p>{value}</a></li> ))}                         
                    </ul>
                 </div>
             <div className="main-list">
                 <ul>
                    { mainListUl.map((value)=>( <li><a href="javascript:void(0)"><p></p>{value}</a></li> ))}   
                 </ul>
                 <s className="long-line"></s>
             </div>
             <div className="main-banner">
                  {mainBannerImg.map((value)=>(
                    <a href={value.href}>
                        <img src={value.src} alt={value.alt} className={value.className}/>
                    </a>

                  ))}
                 
                 <ul>
                     <li><a href="javascript:void(0)"></a></li>
                     <li><a href="javascript:void(0)"></a></li>
                     <li><a href="javascript:void(0)"></a></li>
                 </ul>
             </div>
         
             <div className="main-pay">
                 <h1 className="headbar">龙支付</h1>
                 <div>
                     <a href="javascript:void(0)"> <img src={lxtxjpg} alt=""/></a>
                 </div>
             </div>
             <div className="main-change">
                 <h1 className="headbar"> 快速转账</h1>
                 <div>
                     <form action="">
                         <label>收款户名
                             <input type="text" name="uCount" placeholder="请输入收款户名"/>
                         </label>
                         <label>收款账户
                             <input type="text" name="recCountNumber" placeholder="请输入收款账号或手机号"/>
                         </label>
                         <label>转账金额
                             <input type="text" name="money-count" placeholder="请输入转账金额"/>
                             <button></button>
                         </label>
                     </form>
                 </div>
             </div>
             <div className="main-tel-charge">
                 <h1 className="headbar">话费充值</h1>
                 <div>
                     <p>
                         <label> 手机号码
                             <input type="tel" name="telphoneNo" id="telphoneNo" placeholder="请输入要充值的电话号码"/>
                             <button></button>
                         </label>
                     </p>
                     <p>
                         <a href="javascript:void(0) ">￥50</a>
                         <a href="javascript:void(0) ">￥100</a>
                         <a href="javascript:void(0) ">￥300</a>
                         <a href="javascript:void(0) ">￥500</a>
                     </p>
                 </div>
             </div>
         </div>

             <Footer/>        
          </div>
      );  
    }
}

   
export default connect(mapStoreStateToProps,mapDispatchToProps)(MainComponent);




