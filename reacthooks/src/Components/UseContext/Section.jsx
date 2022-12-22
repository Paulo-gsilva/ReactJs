import React from "react";
import Title from "./Title";
import Body from "./Body";

function Section({ children }) {
    return (
        <div className="app">
            <Title />
            <Body />
        </div>
    );
}

export default Section;
