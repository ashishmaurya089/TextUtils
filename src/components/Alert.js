import React from "react";

const Alert = (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong> {capitalizeFirstLetter(props.alert.type)}</strong>:{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
