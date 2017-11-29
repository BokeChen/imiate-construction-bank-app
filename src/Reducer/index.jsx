import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import f_01Jpg from "../images/f_01.jpg";
import f_02Jpg from "../images/f_02.jpg";
import f_03Jpg from "../images/f_03.jpg";
import "../Config/polyfill.js";
const defaultState = {
  //参数初始化
 
   mainTopUl:["财富","转账","快递","龙支付"],
   mainListUl:["速盈","理财产品","代理保险","信用卡申请","扫一扫","善融商城","全国话费充值",""],
   mainTopSayHi:"晚上好！",
   mainBannerImg:[{"href":"","alt":"定投盈","src":f_01Jpg,"className":"show"},{"href":"","alt":"网上申请龙卡信用卡","src":f_02Jpg,"className":"show"},{"href":"","alt":"手机流量充值","src":f_03Jpg,"className":"show"}],


   topicText:"topicContainer"

};

const reducer = (state = defaultState, action) => {     
    switch (action.type) {
        case 'AlterMain':
            return  Object.assign({},state,{ mainText:action.payload});
        case 'AlterTopic':
            return  Object.assign({},state,{ topicText:action.payload});
        case 'AlterHeaderInfo':
             return  Object.assign({},state,{ headerInfo:action.payload});
        case 'AlterHeaderInp':
             return  Object.assign({},state,{ headerInp:action.payload});
        case 'AlterHeaderDiv':
             return  Object.assign({},state,{ headerDiv:action.payload});
        default:
            return state;
    }
};
const RootReducer = combineReducers({
    routing:routerReducer,
    app:reducer
});
export default RootReducer;