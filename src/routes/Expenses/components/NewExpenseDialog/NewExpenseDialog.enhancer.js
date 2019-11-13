import { NEW_EXPENSE_FORM_NAME } from 'constants/formNames';
import { reduxForm } from 'redux-form';

export default reduxForm({
  form: NEW_EXPENSE_FORM_NAME,
  // Clear the form for future use (creating another project)
  onSubmitSuccess: (result, dispatch, props) => props.reset(),
});
