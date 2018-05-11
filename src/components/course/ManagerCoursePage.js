import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/actionTypes';

class ManagerCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return(
      <h1>Course</h1>
    );
  }
}

ManagerCoursePage.propTypes = {

};

function mapStateToProps(state, ownProps){
  return{
    state:state
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManagerCoursePage);
