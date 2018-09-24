import React from 'react';
import { withFormik } from 'formik';
import styled from 'styled-components';

import { HoverPrimaryButton, HoverSecondaryButton } from '../../elements/Hover';

const Text = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
`;

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
    <div className="field">
      <div className="control">
        <input
          className="input is-large"
          type="email"
          placeholder="Email address"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <input
          className="input is-large"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </div>
      <Text className="is-pulled-right has-text-lightgrey is-uppercase">
        Forgot?
      </Text>
    </div>
    <br />
    <label className="checkbox" htmlFor="true">
      <input type="checkbox" />
      <span className="has-text-lightgrey"> REMEMBER ME</span>
    </label>
    <br />
    <br />
    <HoverPrimaryButton
      className="primary-color has-text-weight-bold"
      height="79px"
      width="100%"
      onClick={handleSubmit}
    >
      <span className="is-size-6 has-text-white">LOG IN</span>
    </HoverPrimaryButton>

    <Text className="has-text-centered">OR</Text>
    <HoverSecondaryButton
      className="secondary-color has-text-weight-bold"
      height="79px"
      width="100%"
    >
      <span className="is-size-6 has-text-white">LOG IN WITH FACEBOOK</span>
    </HoverSecondaryButton>
  </form>
);

// Wrap our form with the using withFormik HoC
export default withFormik({
  // Transform outer props into form values
  mapPropsToValues: () => ({ email: '', password: '' }),
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
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log('submit', values);
    props.submit(values);
    setSubmitting(false);
  },
})(Form);
