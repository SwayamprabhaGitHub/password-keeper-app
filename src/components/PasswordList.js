import React, { useContext } from "react";
import PasswordContext from "../store/password-context";

const PasswordList = () => {
    const listCnxt = useContext(PasswordContext);
    
    return <div>
        <h2>All Passwords</h2>
        <ul>
            {listCnxt.list.map((item) => {
                return <li key={item.Id}>
                    {`${item.Title}-${item.Password} `}
                    <button onClick={() => {listCnxt.updatePassword(item.Id)}}>Delete</button>
                    <button>Edit</button>
                    </li>
            })}
        </ul>
    </div>
}

export default PasswordList;