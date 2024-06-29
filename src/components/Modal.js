import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PasswordContext from "../store/password-context";
import FormVisibleContext from "../store/formvisible-context";
import "./Modal.css";

const Backdrop = () => {
  const formCnxt = useContext(FormVisibleContext);
  return <div className="backdrop" onClick={formCnxt.formNotVisible}></div>;
};

const ModalOverlay = () => {
  const listCnxt = useContext(PasswordContext);
  const formCnxt = useContext(FormVisibleContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const id = Math.random();
    listCnxt.addPassword({
      Id: id,
      Title: formCnxt.title,
      Password: formCnxt.password,
    });
    formCnxt.changeTitle("");
    formCnxt.changePassword("");
    formCnxt.formNotVisible();
  };
  return (
    <form className="modal">
      <div className="titleForm">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={formCnxt.title}
          onChange={(e) => formCnxt.changeTitle(e.target.value)}
        />
      </div>
      <div className="passwordForm">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={formCnxt.password}
          onChange={(e) => formCnxt.changePassword(e.target.value)}
        />
      </div>

      <div className="formButton">
        <button className="addButton" type="button" onClick={formSubmitHandler}>
          Add
        </button>
        <button className="closeButton" type="button" onClick={formCnxt.formNotVisible}>
          X
        </button>
      </div>
    </form>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-root")
      )}
      ;
    </React.Fragment>
  );
};

export default Modal;
