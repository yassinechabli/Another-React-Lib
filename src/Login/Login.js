import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Login.css";

export default function Login(props) {
  const emailInputClassName = `Login--input ${
    props.emailHasError
  } ${props.emailErrorMessage && "Login--error"}`.trim();
  const passwordInputClassName = `Login--input ${
    props.passwordInputClassName
  } ${props.passwordHasError && "Login--error"}`.trim();

  const handleValidateEmail = React.useCallback(event =>
    props.validateEmail(event.target.value)
  );
  const handleValidatePassword = React.useCallback(event =>
    props.validatePassword(event.target.value)
  );

  return (
    <form className={`Login--form`} onSubmit={props.onSubmit}>
      <h2 className={`Login--header`}>{props.headerTitle || "Login"}</h2>
      <label className={`Login--label`} htmlFor="email">
        Email
      </label>
      <input
        className={emailInputClassName}
        name="email"
        type="email"
        onChange={handleValidateEmail}
      />
      <label className={`Login--label`} htmlFor="email">
        Password
      </label>
      <input
        className={passwordInputClassName}
        name="password"
        type="password"
        onChange={handleValidatePassword}
      />
      <Button
        buttonColor="blue"
        disabled={
          props.emailHasError || props.passwordHasError || props.submitDisabled
        }
        text="Sign In"
        styles={{ color: "#fefefe", width: "100%" }}
      />
    </form>
  );
}

Login.defaultProps = {
  emailLabel: "",
  emailErrorMessage: "",
  emailHasError: false,
  emailInputClassName: "",
  passwordLabel: "",
  passwordErrorMessage: "",
  passwordHasError: false,
  passwordInputClassName: "",
  validateEmail: () => {},
  validatePassword: () => {}
};

Login.propTypes = {
  emailLabel: PropTypes.string,
  emailErrorMessage: PropTypes.string,
  emailHasError: PropTypes.bool,
  emailInputClassName: PropTypes.string,
  headerTitle: PropTypes.string,
  passwordLabel: PropTypes.string,
  passwordErrorMessage: PropTypes.string,
  passwordHasError: PropTypes.bool,
  passwordInputClassName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  submitDisabled: PropTypes.bool,
  validateEmail: PropTypes.func,
  validatePassword: PropTypes.func
};
