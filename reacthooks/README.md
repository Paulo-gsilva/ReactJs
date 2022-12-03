# Arquivo para estudo de React Hooks

-   **UseState**

    -   useState realiza a modificação do estado atual de um elemento

    ```
        const [colorRed, setColorRed] = useState(true);
        //estado atual da variável 'colorRed' é true
    ```

    -   useState é executado no momento em que o React entende que pode ser atualizado (assíncrono)
    -   useState com callback garante que o estado exato será alterado

    ```
        const handleChangeColor = () => {
        //setColorRed(!colorRed);
        setColorRed((colorRed) => !colorRed); // useState com callback garante que o estado exato será alterado
    };
    ```

</br>

-   **UseEffect**

    -   UseEffect é executado de acordo com a montagem de cada componente, podem ser especificados ou nao
    -   UseEffect **_sem parametros_**

    ```
        useEffect(() => {
            console.log(
                "SEM PARAMETROS O USEEFFECT É ATIVADO EM QUALQUER ATUALIZAÇÃO DE QUALQUER COMPONENTE "
            );
        });
    ```

    -   UseEffect **_com parametro vazio_**

    ```
        useEffect(() => {
        console.log(
            "COM ARRAY VAZIO COMO PARAMETRO, USEEFFECT SERÁ ATIVADO APENAS UMA VEZ POR ATUALIZAÇÃO DE COMPONENTE"
        );
    }, []);
    ```

    -   UseEffect **_com um ou mais parametros_**

    ```
        useEffect(() => {
        console.log(
            "COM ELEMENTO DEFINIDO NO PARAMETRO, USEEFFECT É ATIVADO APENAS QUANDO O ELEMENTO FOR ATUALIZADO. COUNTER:",
            counter
        );
    }, [counter]);
    ```
