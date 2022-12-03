import logo from "../../logo.svg";
import { useEffect, useState } from "react";
import "../../App.css";
import "./style.css";

const eventClick = () => {
    console.log("click");
};

//UseEffect é executado de acordo com a montagem de cada componente
function UseEffect() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(
            "SEM PARAMETROS O USEEFFECT É ATIVADO EM QUALQUER ATUALIZAÇÃO DE QUALQUER COMPONENTE "
        );
    });

    useEffect(() => {
        console.log(
            "COM ARRAY VAZIO COMO PARAMETRO, USEEFFECT SERÁ ATIVADO APENAS UMA VEZ POR ATUALIZAÇÃO DE COMPONENTE"
        );
    }, []);

    //DESSA FORMA O EVENTO DE CLICK SERÁ MULTIPLICADO A CADA RENDERIZAÇÃO, POIS O EVENTO NÃO ESTÁ SENDO REMOVIDO
    useEffect(() => {
        document.querySelector("h1").addEventListener("click", eventClick);

        //ESTA PARTE DO CÓDIGO IRÁ REMOVER O EVENTO APÓS CADA RENDERIZAÇÃO
        return () => {
            document
                .querySelector("h1")
                .removeEventListener("click", eventClick);
        };
    }, []);

    //SE FOR USADO UM ELEMENTO DENTRO DO USEEFFECT, ELE TEM QUE SER PASSADO COMO PARAMETRO
    useEffect(() => {
        console.log(
            "COM ELEMENTO DEFINIDO NO PARAMETRO, USEEFFECT É ATIVADO APENAS QUANDO O ELEMENTO FOR ATUALIZADO. COUNTER:",
            counter
        );
    }, [counter]);

    return (
        <div className="App">
            <h1>Contador: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
}

export default UseEffect;
