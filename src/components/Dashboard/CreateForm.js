import React from 'react';
import { withFormik } from 'formik';

import Input from '../../elements/Input';
import Button from '../../elements/Button';

const Form = ({
  values,
  // errors,
  // touched,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
}) => (
  <form>
    <div className="fields">
      <label className="label">title</label>
      <div className="control">
        <Input
          id="title"
          name="title"
          placeholder="eg. ruby on rails, Python etc..."
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
    <br />
    <div className="fields">
      <div className="control">
        <Button
          className="is-primary"
          title="create"
          type="primary"
          onClick={handleSubmit}
        />
      </div>
    </div>
  </form>
);

// Wrap our form with the using withFormik HoC
export default withFormik({
  // Transform outer props into form values
  mapPropsToValues: () => ({
    title: '',
  }),
  // Add a custom validation function (this can be async too!)
  validate: values => {},
  // Submission handler
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log('submit', values);
    props.submit(values);
    setSubmitting(false);
  },
})(Form);
