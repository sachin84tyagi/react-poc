import React from "react";

const checkValidations = (fieldName, checkCondition) => {
  // switch (validation) {
  //   case "First Name":
  //     return <span>First Name is required</span>;
  //   case "Last Name":
  //     return <span>Last Name is required</span>;
  //   case "Email":
  //     return <span>Email is required</span>;
  //   case "Phone Number":
  //     return <span>Phone Number is required</span>;
  //   default:
  //     return null;
  // }

  if (checkCondition && checkCondition.isInvalidEmail) {
    return <span>Enter a valid {fieldName}</span>;
  }
  if (checkCondition && checkCondition.isInvalidPhoneNo) {
    return <span>{fieldName} should be greater then 10 numbers</span>;
  }
  return <span>{fieldName} is required</span>;
};

export default checkValidations;
