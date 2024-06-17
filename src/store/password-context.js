import React from "react";

const PasswordContext = React.createContext({
  list: [],
  addPassword: (item) => {},
  updatePassword: (id) => {},
});

export default PasswordContext;
