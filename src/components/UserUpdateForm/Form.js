import React from 'react';
import { withFormik } from 'formik';

import { HoverPrimaryButton } from '../../elements/Hover';

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
}) => (
  <form>
    <div className="field">
      <label className="label">First Name</label>
      <div className="control">
        <input
          className="input is-large"
          type="text"
          name="firstName"
          placeholder="First name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Last Name</label>
      <div className="control">
        <input
          className="input is-large"
          type="text"
          name="lastName"
          placeholder="Last name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input
          className="input is-large"
          type="email"
          name="email"
          placeholder="Email address"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email &&
          touched.email && <p className="help is-danger">{errors.email}</p>}
      </div>
    </div>
    <div className="field">
      <label className="label">Date of birth</label>
      <div className="control">
        <input
          className="input is-large"
          type="text"
          name="dob"
          placeholder="Date of birth"
          value={values.dob}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Country</label>
      <div className="control">
        <input
          className="input is-large"
          type="text"
          name="location"
          placeholder="Country"
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
    <HoverPrimaryButton
      className={`primary-color has-text-weight-bold ${loading &&
        'is-loading'}`}
      height="79px"
      width="100%"
      onClick={handleSubmit}
    >
      <span className="is-size-6 has-text-white">Update</span>
    </HoverPrimaryButton>
  </form>
);

// Wrap our form with the using withFormik HoC
export default withFormik({
  // Transform outer props into form values
  mapPropsToValues: ({ firstName, lastName, email, dob, location }) => ({
    firstName,
    lastName,
    email,
    dob,
    location,
  }),
  // Add a custom validation function (this can be async too!)
  validate: values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (values, { props: { submit }, setSubmitting }) => {
    console.log('submit', values);
    submit(values);
    setSubmitting(false);
  },
})(Form);
