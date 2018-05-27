import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';

class ManagerAuthorPage extends React.Component{
  constructor(props, context){
    super(props,context);

    this.state = {
      author : Object.assign({}, props.author),
      errors : {},
      saving : false
    };
    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.author.id != nextProps.author.id){
      this.setState({author: Object.assign({},nextProps.author)});
    }
  }

  updateAuthorState(event){
    const fiel = event.target.name;
    let author = Object.assign({},this.state.author);
    author[fiel] = event.target.value;
    return this.setState({author:author});
  }

  saveAuthor(event){
    event.preventDefault();
    this.props.actions.saveAuthor(this.state.author);
  }

  render(){
    return(
      <div>
        <AuthorForm
          author={this.state.author}
          errors={this.state.errors}
          saving={this.state.saving}
          onChange={this.updateAuthorState}
          onSave={this.saveAuthor}/>
      </div>
    );
  }
}

ManagerAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getAuthorById(authors,id){
  const author = authors.filter (author => author.id === id);
  let result = author.length ? author[0] : null;
  return result;
}

function mapStateToProps(state, ownProps){
  const authorId = ownProps.params.id;

  let author = {id:"", firstName: "", lastName: ""};

  if(authorId && state.authors.length > 0){
     author =  getAuthorById(state.authors,authorId);
  }

  return{
    author: author
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(authorActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerAuthorPage);
