import props from "prop-types";
import React, { useCallback, useState } from "react";

const Button = ({ incrementCounter }) => {
    console.log("Filho sem ReactMemo Renderizou");
    return <button onClick={() => incrementCounter(10)}>Sem Memo</button>;
};

//ReactMemo "armazena" um valor inalterado, desta forma a renderizaçao só ocorre caso existam mudanças
const ButtonMemo = React.memo(function Button({ incrementCounterMemo }) {
    console.log("Filho com ReactMemo Renderizou");
    return <button onClick={() => incrementCounterMemo(10)}>Com Memo</button>;
});

ButtonMemo.propTypes = {
    incrementCounterMemo: props.func,
};

//UseCallback é usado para otimizaçãoes.
//UseCallback salva funções
//No react, funções são recriadas sempre que ocorre renderização, pode ser ruim dependendo do tamanho dessa funçao
//UseCallback é recomendado para funções pesadas
function UseCallback() {
    const [counter, setCounter] = useState(0);
    const [counterMemo, setCounterMemo] = useState(0);

    const incrementCounter = (number) => {
        setCounter(counter + number);
    };

    //Da forma abaixo, a função sempre será recriada, pois o useCallback depende do estado de CounterMemo, e o mesmo sempre está mudando ao clicar no botão
    // const incrementCounterMemo = useCallback(
    //     (number) => {
    //         setCounterMemo(counterMemo + number);
    //     },
    //     [counterMemo]
    // );

    //Para sanar o problema acima, pode-se usar uma funçao de callback dentro do próprio useCallback, dessa forma,
    //a função pegará o valor antigo do "SetCounter", que é o "Counter", sem precisar passar o mesmo como paramêtro
    const incrementCounterMemo = useCallback((number) => {
        setCounterMemo((counter) => counter + number);
    }, []);

    console.log("Pai Renderizou");

    return (
        <div className="App">
            <h1>UseCallBack</h1>
            <div>
                <h2>{counter}</h2>
                <Button incrementCounter={incrementCounter} />
            </div>
            <div>
                <h2>{counterMemo}</h2>
                <ButtonMemo incrementCounterMemo={incrementCounterMemo} />
            </div>
        </div>
    );
}

export default UseCallback;
