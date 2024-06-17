import React, { useState } from "react";
import FormVisibleContext from "./formvisible-context";

const FormVisibleProvider = (props) => {
  const [title, setTitle] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [formIsVisible, setFormIsVisible] = useState(false);

  const titleHandler = (value) => {
    setTitle(value);
}
const pswrdHandler = (value) => {
    setPswrd(value);
}

  const formVisibleHandler = () => {
    setFormIsVisible(true);
  };
  const formNotVisibleHandler = () => {
    setFormIsVisible(false);
  };
  const formVisibility = {
    title: title,
    password: pswrd,
    changeTitle: titleHandler,
    changePassword: pswrdHandler,
    formIsVisible: formIsVisible,
    formVisible: formVisibleHandler,
    formNotVisible: formNotVisibleHandler,
  };
  return (
    <FormVisibleContext.Provider value={formVisibility}>
      {props.children}
    </FormVisibleContext.Provider>
  );
};

export default FormVisibleProvider;
