import React, { useContext } from "react";
import PasswordContext from "../store/password-context";
import FormVisibleContext from "../store/formvisible-context";
import "./PasswordList.css";

const PasswordList = () => {
    const listCnxt = useContext(PasswordContext);
    const formCnxt = useContext(FormVisibleContext);

    const editItemHandler = (item) => {
        listCnxt.updatePassword(item.Id);
        formCnxt.changeTitle(item.Title);
        formCnxt.changePassword(item.Password);
        formCnxt.formVisible();
    }
    
    return <div>
        <h4>All Passwords</h4>
        <ul className="passwordList">
            {listCnxt.list.map((item) => {
                return <li key={item.Id}>
                    {`${item.Title}-${item.Password} `}
                    <div className="listButton">
                    <button className="dlt-button" onClick={() => {listCnxt.updatePassword(item.Id)}}>Delete</button>
                    <button className="edt-button" onClick={() => editItemHandler(item)}>Edit</button>
                    </div>
                    </li>
            })}
        </ul>
    </div>
}

export default PasswordList;