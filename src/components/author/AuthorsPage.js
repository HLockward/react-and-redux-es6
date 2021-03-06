import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import {sortByKey} from '../common/CommonFunctions';

class AuthorsPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.deleteAuthor = this.deleteAuthor.bind(this);
  }

  getCourses(authorId){
    const courses = this.props.courses;
    return courses.filter(course => course.authorId === authorId);
  }

  deleteAuthor(authorId){
    const courses = this.getCourses(authorId);
    if(courses.length){
      toastr.error(`can't delete author ${authorId}, has courses`);
    }else{
      this.props.actions.deleteAuthor(authorId);
      toastr.success(`Author ${authorId} has been eliminate`);
    }
  }

  redirectToAddAuthor(){
    browserHistory.push('/author');
  }

  render() {
    const {authors} = this.props;
    return(
      <div>
        <h1>Authors Page</h1>
        <input
          type = "submit"
          className = "btn btn-primary"
          value = "Add Author"
          onClick = {this.redirectToAddAuthor}
        />
        {(authors.length > 0) && <AuthorList authors={authors} onDelete={this.deleteAuthor}/>}
      </div>
    );
  }
}



AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  const authors = sortByKey(state.authors,'firstName');

  return{
    authors : authors,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorsPage);
