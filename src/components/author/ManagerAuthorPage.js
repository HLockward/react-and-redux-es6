import React,{Proptypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';

class ManagerAuthorPage extends React.Component{
  constructor(props, context){
    super(props,context);

  }

  render(){
    return(
      <div>
        <h1>Manager Course</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    //
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(authorActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerAuthorPage);
