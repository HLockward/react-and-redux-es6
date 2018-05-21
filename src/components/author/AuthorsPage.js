import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';

class AuthorsPage extends React.Component{
  constructor(props, context){
    super(props, context);

  }

  render() {
    return(
      <div>
        <h1>Authors Page</h1>
        <AuthorList authors={this.props.authors}/>
      </div>


    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    authors : state.authors
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorsPage);
