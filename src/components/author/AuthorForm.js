import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onSave, onChange, saving, errors}) => {
  return(
    <form>
      <h1>Author Manager</h1>
      <TextInput
        name="name"
        label="Name"
        value={author.firstName}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="lastname"
        label="Lastname"
        value={author.lastName}
        onChange={onChange}
        error={errors.lastname}/>

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
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.object
};
