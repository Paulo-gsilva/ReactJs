import { createContext } from "react";
import { globalStateData } from "./data";
import { useState } from "react";

//UseContext é usado para compartilhar um mesmo "contexto" para diferentes componentes
//UseContext evita a passagem de props sucessivas de um componente 1 para chegar ao componente 10
//UseContext cria um "estado global"
//Cria o contexto

export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
    const [globalState, setGlobalState] = useState(globalStateData);

    return (
        //O que estiver dentro deste bloco irá usar o "estado global" criado pelo  context
        //Não é recomendado passar um "setState" inteiro, pois pode ocasionar problemas. É recomendada a criação de funções específicas para alteração de estado
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};
