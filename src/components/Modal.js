import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import PasswordContext from "../store/password-context";
import FormVisibleContext from "../store/formvisible-context";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.formVisibility}></div>;
};

const ModalOverlay = (props) => {
    const listCnxt = useContext(PasswordContext);
    const formCnxt = useContext(FormVisibleContext);

    const [title, setTitle] = useState("");
    const [pswrd, setPswrd] = useState("");

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const pswrdHandler = (event) => {
        setPswrd(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const id = Math.random();
        listCnxt.addPassword({Id:id, Title: title, Password: pswrd});
        setTitle("");
        setPswrd("");
        formCnxt.formNotVisible();
    }
    return <form className="modal">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={titleHandler}/>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" value={pswrd} onChange={pswrdHandler}/>
        <div>
            <button type="button" onClick={formSubmitHandler}>Add</button>
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
