import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.redirectToAddCourse = this.redirectToAddCourse.bind(this);

    this.deleteCourse = this.deleteCourse.bind(this);
  }

 /* courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }*/

  deleteCourse(courseId){
    //const mockCourseId = "react-flux-building-applications";
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
        <CourseList courses={courses} onDelete = {this.deleteCourse} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
