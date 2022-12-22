import React from "react";
import Section from "./Section";
import { AppContext } from "../../Context/AppContext";

function UseContext() {
    return (
        <AppContext>
            <Section />
        </AppContext>
    );
}

export default UseContext;
