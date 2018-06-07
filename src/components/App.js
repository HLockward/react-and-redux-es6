//This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <Header headerCount ={this.props.headerCount} loading ={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading : PropTypes.bool.isRequired,
  headerCount : PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    loading: state.ajaxCallsInProgress > 0,
    headerCount : {
      authors: state.authors.length,
      courses: state.courses.length
    }
  };
}

export default connect(mapStateToProps)(App);
