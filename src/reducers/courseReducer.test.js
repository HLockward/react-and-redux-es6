import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'},
    ];

    const newCourse = {title: 'C'};

    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const newCourse = {id: 'B', title: 'new title'};
    const action = actions.updateCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == newCourse.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    expect(updatedCourse.title).toEqual('new title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
    expect(newState[2].title).toEqual('new title');

  });

});
