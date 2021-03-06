import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import {sortByKey} from '../common/CommonFunctions';

class CoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.redirectToAddCourse = this.redirectToAddCourse.bind(this);

    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(courseId){
    this.props.actions.deleteCourse(courseId);
    toastr.success(`course ${courseId} has been eliminate`);
  }

  redirectToAddCourse(){
    browserHistory.push('/Course');
  }

  render(){
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCourse}
        />
        {(courses.length > 0) && <CourseList courses={courses} onDelete = {this.deleteCourse} />}
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps){
  const courses = sortByKey(state.courses,'title');

  return {
    courses: courses
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
