import {createStore,combineReducers,applyMiddleware} from 'redux';
import RootReducer from '../Reducer/index.jsx';
import ReduxThunk from 'redux-thunk';

var store = createStore(
    RootReducer,
    applyMiddleware(ReduxThunk)
);

export default store;