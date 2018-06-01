import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class AuthorsPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.deleteAuthor = this.deleteAuthor.bind(this);
  }



  deleteAuthor(authorId){
    this.props.actions.deleteAuthor(authorId);
    toastr.success(`Author ${authorId} has been eliminate`);
  }

  redirectToAddAuthor(){
    browserHistory.push('/author');
  }

  render() {
    return(
      <div>
        <h1>Authors Page</h1>
        <input
          type = "submit"
          className = "btn btn-primary"
          value = "Add Author"
          onClick = {this.redirectToAddAuthor}
        />
        <AuthorList authors={this.props.authors} onDelete={this.deleteAuthor}/>
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
