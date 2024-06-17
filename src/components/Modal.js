import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.formVisibility}></div>;
};

const ModalOverlay = (props) => {
    return <form className="modal">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title"/>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password"/>
        <div>
            <button type="button">Add</button>
            <button type="button" onClick={props.formVisibility}>X</button>
        </div>
    </form>
}

const Modal = (props) => {
  return <React.Fragment>
    {ReactDOM.createPortal(
        <Backdrop formVisibility={props.formVisibility}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay formVisibility={props.formVisibility}/>,
        document.getElementById("modal-root")
      )}
      ;
  </React.Fragment>;
};

export default Modal;
