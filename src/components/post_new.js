import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title'
  },
  body: {
    type: 'input',
    label: 'Content'
  },
  phoneNumber: {
    label: 'Phone Number'
  },
  state: {
    label: 'Enter a State'
  }
};

const buildField = (props, field, fieldName) => {
  const fieldProps = props.fields[fieldName];

  return (
    <fieldset className="form-group">
      <label>{field.label}</label>
      <input className="form-control" {...fieldProps} />
    </fieldset>
  );
}

const PostNew = (props) => {
  const { fields: { title, body }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(props.savePost)}>
      {_.map(FIELDS, buildField.bind(null, props))}
      <button action="submit">Submit Comment</button>
    </form>
  );
};

export default reduxForm({
  form: 'PostNew',
  fields: _.keys(FIELDS)
}, null, actions)(PostNew);
