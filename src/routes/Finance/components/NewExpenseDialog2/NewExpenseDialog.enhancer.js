import { NEW_EXPENSE_FORM_NAME } from 'constants/formNames';
import { reduxForm } from 'redux-form';
// import asyncValidate from './asyncValidate';

// const validate = values => {
//   const errors = {};
//   const requiredFields = [
//     'firstName',
//     'lastName',
//     'email',
//     'favoriteColor',
//     'notes',
//   ];
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required';
//     }
//   });
//   if (
//     values.email &&
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// };

export default reduxForm({
  form: NEW_EXPENSE_FORM_NAME,
  // validate,
  // asyncValidate,
  // Clear the form for future use (creating another project)
  onSubmitSuccess: (result, dispatch, props) => props.reset(),
});
