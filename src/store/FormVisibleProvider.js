import React, {useState} from "react";
import FormVisibleContext from "./formvisible-context";

const FormVisibleProvider = (props) => {
    const [formIsVisible, setFormIsVisible] = useState(false);
  const formVisibleHandler = () => {
    setFormIsVisible(true);
  }
  const formNotVisibleHandler = () => {
    setFormIsVisible(false);
  }
  const formVisibility = {
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
