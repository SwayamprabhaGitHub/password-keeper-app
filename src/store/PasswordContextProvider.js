import React, { useEffect, useState } from "react";
import PasswordContext from "./password-context";

const PasswordContextProvider = (props) => {
  const [list, setList] = useState([]);
  const [totalPassword, setTotalPassword] = useState(0);

  useEffect(() => {
    setTotalPassword(list.length);
  }, [list]);

  const addPasswordHandler = (item) => {
    setList([...list, item]);
  };
  const updatePasswordHandler = (id) => {
    const newList = list.filter((item) => {
      return item.Id !== id;
    });
    setList(newList);
  };
  console.log(list);
  const passwordContext = {
    list: list,
    totalPassword: totalPassword,
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
