import React, { useContext } from "react";
import PasswordContext from "../store/password-context";
import FormVisibleContext from "../store/formvisible-context";

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
        <h2>All Passwords</h2>
        <ul>
            {listCnxt.list.map((item) => {
                return <li key={item.Id}>
                    {`${item.Title}-${item.Password} `}
                    <button onClick={() => {listCnxt.updatePassword(item.Id)}}>Delete</button>
                    <button onClick={() => editItemHandler(item)}>Edit</button>
                    </li>
            })}
        </ul>
    </div>
}

export default PasswordList;