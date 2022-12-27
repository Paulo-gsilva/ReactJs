import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

    a{
        color: var(--blue-color);
    }
`;

export default Global;
