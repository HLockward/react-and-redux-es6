import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors}) => {
  return(
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Id</th>
          <th>Name</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author =>
          <AuthorListRow key={author.id} author={author}/>
        )}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
