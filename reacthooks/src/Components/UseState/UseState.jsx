import logo from "../../logo.svg";
import { useState } from "react";
import "../../App.css";
import "./style.css";

//useState realiza a modificação do estado atual de um elemento
//useState é executado no momento em que o React entende que pode ser atualizado (assíncrono)
//
function UseState() {
    const [colorRed, setColorRed] = useState(true);
    const colorRedValidation = colorRed ? "white-color" : "red-color";

    const handleChangeColor = () => {
        //setColorRed(!colorRed);
        setColorRed((colorRed) => !colorRed); // useState com callback garante que o estado exato será alterado
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className={colorRedValidation}>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={handleChangeColor}>Change Color</button>
            </header>
        </div>
    );
}

export default UseState;
