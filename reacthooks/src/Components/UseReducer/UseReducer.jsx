import React from "react";
import { useReducer } from "react";

const globalStateData = {
    title: "Título da página",
    body: "Informações da página",
    counter: 0,
};

//useReducer recebe como parametro uma função que irá alterar o estado existente
const functionReduce = (state, action) => {
    switch (action.type) {
        case "Upper":
            return { ...state, title: state.title.toUpperCase() };
        case "Lower":
            return { ...state, title: state.title.toLowerCase() };
        case "Payload":
            return { ...state, title: `Payload chegando: ${action.payload}` };
    }
    return { ...state };
};

//UseReducer é similar ao UseState
//UseReducer é usado para controlar estados complexos
function UseReducer() {
    //dispatch é função que dispara ações
    const [globalState, dispatch] = useReducer(functionReduce, globalStateData);
    const { title, body, counter } = globalState;

    return (
        <div className="app">
            <h1>
                {title} {counter}
            </h1>
            {/*dispatch recebe um objeto que representa a action da função reducer*/}
            <button onClick={() => dispatch({ type: "Upper" })}>Upper</button>
            <button onClick={() => dispatch({ type: "Lower" })}>Lower</button>
            {/*payload são dados que podem ser enviados para reducer*/}
            <button
                onClick={() =>
                    dispatch({
                        type: "Payload",
                        payload: new Date().toLocaleDateString("pt-BR"),
                    })
                }
            >
                Payload
            </button>
        </div>
    );
}

export default UseReducer;
