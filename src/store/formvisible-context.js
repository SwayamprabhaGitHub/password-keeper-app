import React from "react";

const FormVisibleContext = React.createContext({
  title: "",
  password: "",
  changeTitle: (value) => {},
  changePassword: (value) => {},
  formIsVisible: false,
  formVisible: () => {},
  formNotVisible: () => {},
});

export default FormVisibleContext;
