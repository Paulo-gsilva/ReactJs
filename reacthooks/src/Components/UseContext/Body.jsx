import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/AppContext";

function Body() {
    const bodyContext = useContext(GlobalContext);
    const {
        globalState: { body },
    } = bodyContext;
    //const body = bodyContext.globalState.body;

    return <p>{body}</p>;
}

export default Body;
