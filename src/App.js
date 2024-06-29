import React, { useContext } from "react";
import PasswordList from "./components/PasswordList";

import FormVisibleContext from "./store/formvisible-context";
import PasswordContext from "./store/password-context";
import Modal from "./components/Modal";
import SearchList from "./components/SearchList";
import "./App.css";

function App() {
  const formCnxt = useContext(FormVisibleContext);
  const listCnxt = useContext(PasswordContext);
  
  return (
    <React.Fragment>
      <h2>Password Keeper</h2>
      <p>Total passwords: {listCnxt.totalPassword}</p>
      <button type="button" onClick={formCnxt.formVisible}>Add New Password</button>
      {formCnxt.formIsVisible && <Modal />}
      <SearchList />
      <PasswordList />
    </React.Fragment>
  );
}

export default App;
