import React, { useContext } from "react";
import { GlobalContext } from "../../Context/AppContext";

function Title() {
    const titleContext = useContext(GlobalContext);
    const {
        globalState: { title },
    } = titleContext;

    return <h1>{title}</h1>;
}

export default Title;
