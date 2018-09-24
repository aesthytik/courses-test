import React from 'react';
import { withFormik } from 'formik';
import styled from 'styled-components';

import { HoverPrimaryButton, HoverSecondaryButton } from '../../elements/Hover';

const TextStyled = styled.div`
  padding: 2%;
`;

const TextAlign = styled.section`
  width: 72%;
  margin-left: 15%;
  color: #5a6175;
  padding-top: 6%;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 100%;
    margin-left: 0px;
    margin-top: 5px;
    font-weight:800;
  }
}
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 19px;
  }
}
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
          type="text"
          placeholder="First name"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <input className="input is-large" type="text" placeholder="Last name" />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <input
          className="input is-large"
          type="text"
          placeholder="Email address"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <input
          className="input is-large"
          type="password"
          placeholder="Password (8+ characters)"
        />
      </div>
    </div>
    <HoverPrimaryButton
      className="primary-color has-text-weight-bold"
      height="79px"
      width="100%"
    >
      <span className="is-size-6 has-text-white">GET STARTED</span>
    </HoverPrimaryButton>

    <TextStyled className="has-text-centered">OR</TextStyled>
    <HoverSecondaryButton
      className="secondary-color has-text-weight-bold"
      height="79px"
      width="100%"
    >
      <span className="is-size-6 has-text-white">SIGN UP WITH FACEBOOK</span>
    </HoverSecondaryButton>

    <TextAlign className="content has-text-centered has-text-lightgrey">
      BY CONTINUING, YOU AGREE TO LEARN REALM’S<br />
      <a href="#">
        <span> TERMS & CONDITIONS </span>
      </a>
      AND
      <a href="#">
        <span> PRIVACY POLICY</span>
      </a>
    </TextAlign>
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
    // props.submit(values);
    setSubmitting(false);
  },
})(Form);
