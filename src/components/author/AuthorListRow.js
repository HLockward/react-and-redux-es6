import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author, onDelete}) => {

  const _onClick = () => onDelete(author.id);

  return (
    <tr>
      <td><Link to = {`/author/${author.id}`}>{author.id}</Link></td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td>
        <input
          type="submit"
          value="Delete"
          className="btn btn-danger"
          onClick={_onClick}/>
      </td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorListRow;
