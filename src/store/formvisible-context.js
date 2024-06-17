import React from "react";

const FormVisibleContext = React.createContext({
    formIsVisible: false,
    formVisible: () => {},
    formNotVisible: () => {},
})

export default FormVisibleContext;