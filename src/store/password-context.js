import React from "react";

const PasswordContext = React.createContext({
  list: [],
  totalPassword: 0,
  addPassword: (item) => {},
  updatePassword: (id) => {},
});

export default PasswordContext;
