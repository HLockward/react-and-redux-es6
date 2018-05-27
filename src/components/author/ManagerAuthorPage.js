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

function mapStateToProps(state){
  //const author = state.authors.filter (author => author)

  let author = {id:"", firstName: "", lastName: ""};
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
