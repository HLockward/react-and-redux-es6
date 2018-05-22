import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursesPage';
import AuthorsPage from './components/author/AuthorsPage';
import ManagerCoursePage from './components/course/ManagerCoursePage'; // eslint-disable-line import/no-named-as-default
import ManagerAuthorPage from './components/author/ManagerAuthorPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursePage}/>
    <Route path="course" component={ManagerCoursePage}/>
    <Route path="course/:id" component={ManagerCoursePage}/>
    <Route path="authors" component={AuthorsPage}/>
    <Route path="author" component={ManagerAuthorPage}/>
    <Route path="author/:id" component={ManagerAuthorPage}/>
  </Route>
);
