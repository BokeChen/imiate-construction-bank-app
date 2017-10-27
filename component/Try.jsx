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

class Try extends React.Component{
    render(){
      return(
          <div id="try">
                  <button> </button>  
          </div>
      );  
    }
}

// <h1>mainText:{this.props.mainText}</h1>        
// <button onClick={()=>this.props.fn.changeText(1)}>修改mainText的值</button>

// <Link to="/topic">jumpe to Topic</Link> 

   
export default connect(mapStoreStateToProps,mapDispatchToProps)(Try);




