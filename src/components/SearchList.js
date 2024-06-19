import React, { useContext, useState } from "react";
import PasswordContext from "../store/password-context";

const SearchList = () => {
  const listCnxt = useContext(PasswordContext);
  const [searchPassword, setSearchPassword] = useState([]);

  const searchPasswordHandler = (event) => {
    const textEntered = event.target.value.toLowerCase();
    if (textEntered === "") {
      setSearchPassword([]);
    } else {
      setSearchPassword(
        listCnxt.list.filter((item) => {
          const currentItemTitle = item.Title.toLowerCase();
          return currentItemTitle.indexOf(textEntered) !== -1;
        })
      );
    }
  };

  console.log(searchPassword);

  return (
    <section>
      <div>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" onKeyUp={searchPasswordHandler} />
      </div>
      <ul>
        {searchPassword.map((item) => {
          return (
            <li key={item.Id}>
              {item.Title}-{item.Password}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SearchList;
