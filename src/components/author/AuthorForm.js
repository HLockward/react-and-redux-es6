import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onSave, onChange, saving, errors}) => {
  return(
    <form>
      <h1>Author Manager</h1>
      <TextInput
        name="firstName"
        label="Name"
        value={author.firstName}
        onChange={onChange}
        error={errors.firstName}/>

      <TextInput
        name="lastName"
        label="LastName"
        value={author.lastName}
        onChange={onChange}
        error={errors.lastName}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick = {onSave} />
    </form>
  );

};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  saving: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default AuthorForm;
