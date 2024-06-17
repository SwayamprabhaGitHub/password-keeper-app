import React, { useState } from "react";
import PasswordContext from "./password-context";


const PasswordContextProvider = (props) => {
    const [list, setList] = useState([]);
    const addPasswordHandler = (item) => {
        setList([...list, item]);
    }
    const updatePasswordHandler = (id) => {

    }
    console.log(list);
    const passwordContext = {
        list: list,
        addPassword: addPasswordHandler,
        updatePassword: updatePasswordHandler,
      };

  return (
    <PasswordContext.Provider value={passwordContext}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
