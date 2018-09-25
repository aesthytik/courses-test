import React from 'react';
import { withFormik } from 'formik';

const Form = ({
  values,
  // errors,
  // touched,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
}) => <form />;

// Wrap our form with the using withFormik HoC
export default withFormik({
  // Transform outer props into form values
  mapPropsToValues: ({
    title,
    description,
    category,
    videoEmbed,
    isActive,
    chapters,
  }) => ({
    title,
    ...chapters.reduce(
      (accum, current, index) =>
        Object.assign(accum, {
          [`pet_type_{index}`]: current.type,
          [`pet_name_{index}`]: current.name,
        }),
      {},
    ),
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
