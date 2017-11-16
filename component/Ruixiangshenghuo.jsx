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

class Ruixiangshenghuo extends React.Component{
    constructor(props){
        super(props);
        this.props.fn.changeHeaderInfo("inp","show"); 
        this.props.fn.changeHeaderInfo("div","hide"); 
    }
    render(){
      return(
          <div>
             <Header/>
             <div id="yxsh">
             <div className="yxsh-header">
                 <ul>
                     <li>
                         <a href="javascript:void(0)"><p></p>优惠</a>
                     </li>
                     <li>
                         <a href="javascript:void(0)"><p></p>我的悦享生活</a>
                     </li>
                     <li>
                         <a href="javascript:void(0)"><p></p>附近 </a>
                     </li>           
         
                 </ul>
             </div>
             <div className="yxsh-banner">
                 <img src={require("../src/images/f_01.jpg")} alt=""/>
             </div>
         
             <div className="yxsh-tel-charge">
                 <h1 className="headbar">话费充值</h1>
                 <div>
                     <p>
                         <label> 手机号码
                             <input type="tel" name="telphoneNo"  placeholder="请输入要充值的电话号码"/>
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
             <div className="yxsh-history">
                 <h1 className="headbar">最近缴费 <span>更多></span></h1>
                 <div>暂无历史缴费信息</div>
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

   
export default connect(mapStoreStateToProps,mapDispatchToProps)(Ruixiangshenghuo);




