import { EMAIL_REGEX } from '../../constants/general';

const contactUsFormValidator = ({
  firstLastName, email, number, message,
}) => {
  const errors = {};

  if (!firstLastName) errors.firstLastName = '(Required)';
  if (!message) errors.message = '(Required)';
  if (!number) errors.number = '(Required)';

  if (!email) errors.email = '(Required)';
  console.log(email)
  if (email && !EMAIL_REGEX.test(String(email).toLowerCase())) errors.email = '(Invalid)';
  console.log(errors)

  return errors;
};

export default contactUsFormValidator;
