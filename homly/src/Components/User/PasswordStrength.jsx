import React from "react";
import PasswordStrengthBar from "react-password-strength-bar";

export default function PasswordStrength({ password, setPasswordStrength }) {
  return (
    <PasswordStrengthBar
      password={password}
      scoreWords={['too weak', 'weak', 'okay', 'good', 'strong']}
      onChangeScore={(e) => {
        setPasswordStrength(e);
        console.log(e);
      }}
    />
  );
}
