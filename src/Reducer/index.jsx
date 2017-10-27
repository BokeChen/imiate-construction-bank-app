import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const defaultState = {
  //参数初始化
 
   mainTopUl:["财富","转账","快递","龙支付"],
   mainListUl:["速盈","理财产品","代理保险","信用卡申请","扫一扫","善融商城","全国话费充值",""],
   mainTopSayHi:"晚上好！",
   mainBannerImg:[{"href":"","alt":"定投盈","src":"../src/images/f_01.jpg","className":"show"},{"href":"","alt":"网上申请龙卡信用卡","src":"../src/vimages/f_02.jpg","className":"hide"},{"href":"","alt":"手机流量充值","src":"../src/images/f_03.jpg","className":"hide"}],


   topicText:"topicContainer"

};

const reducer = (state = defaultState, action) => {     
    switch (action.type) {
        case 'AlterMain':
            return  Object.assign({},state,{ mainText:action.payload});
        case 'AlterTopic':
            return  Object.assign({},state,{ topicText:action.payload});
        default:
            return state;
    }
};
const RootReducer = combineReducers({
    routing:routerReducer,
    app:reducer
});
export default RootReducer;