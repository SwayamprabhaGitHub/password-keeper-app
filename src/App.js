import React, { useContext } from "react";
import PasswordList from "./components/PasswordList";
import PasswordContextProvider from "./store/PasswordContextProvider";
import FormVisibleContext from "./store/formvisible-context";
import Modal from "./components/Modal";

function App() {
  const formCnxt = useContext(FormVisibleContext);
  
  return (
    <PasswordContextProvider>
      <h2>Password Keeper</h2>
      <button type="button" onClick={formCnxt.formVisible}>Add New Password</button>
      {formCnxt.formIsVisible && <Modal formVisibility={formCnxt.formNotVisible}/>}
      <label htmlFor="search">Search: </label>
      <input type="text" id="search"/>
      <PasswordList />
    </PasswordContextProvider>
  );
}

export default App;
