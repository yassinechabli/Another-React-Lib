import React from "react";
import PropTypes from "prop-types";

function Login() {}

Login.propTypes = {
  emailLabel: PropTypes.string,
  emailErrorMessage: PropTypes.emailError,
  emailInputClassName: PropTypes.string,
  passwordLabel: PropTypes.string,
  passwordErrorMessage: PropTypes.string,
  passwordInputClassName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  validateEmail: PropTypes.func,
  validatePassword: PropTypes.func
};
