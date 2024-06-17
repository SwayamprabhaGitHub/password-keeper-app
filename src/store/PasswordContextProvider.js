import React, { useState } from "react";
import PasswordContext from "./password-context";


const PasswordContextProvider = (props) => {
    const [list, setList] = useState([]);
    const addPasswordHandler = (item) => {
        setList([...list, item]);
    }
    const updatePasswordHandler = (id) => {
      const newList= list.filter((item) => {
        return item.Id !== id;
      })
      setList(newList);
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
