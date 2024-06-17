import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const formVisibleHandler = () => {
    setFormIsVisible(true);
  }
  const formNotVisibleHandler = () => {
    setFormIsVisible(false);
  }
  return (
    <div>
      <h2>Password Keeper</h2>
      <button type="button" onClick={formVisibleHandler}>Add New Password</button>
      {formIsVisible && <Modal formVisibility={formNotVisibleHandler}/>}
      <label htmlFor="search">Search: </label>
      <input type="text" id="search"/>
    </div>
  );
}

export default App;
