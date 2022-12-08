# Arquivo para estudo de React Hooks

##### _Lembre-se de acompanhar as explicações com o código em mãos para melhor entendimento_

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

</br>

-   **UseCallback**
    -   UseCallback é usado para otimizaçãoes.
    -   UseCallback salva funções
    -   No react, funções são recriadas sempre que ocorre renderização, pode ser ruim dependendo do tamanho dessa funçao
    -   UseCallback é recomendado para funções pesadas
    -   **Exemplo:**
        ```
            const [counterMemo, setCounterMemo] = useState(0);
        ```
        Da forma abaixo, a função sempre será recriada, pois o useCallback depende do estado de CounterMemo, e o mesmo sempre está mudando ao clicar no botão
        ```
            const incrementCounterMemo = useCallback(
                (number) => {
                    setCounterMemo(counterMemo + number);
                },
                [counterMemo]
            );
        ```
        Para sanar o problema acima, pode-se usar uma funçao de callback dentro do próprio useCallback, dessa forma, a função pegará o valor antigo do "SetCounterMemo", que é o "CounterMemo", sem precisar passar o mesmo como paramêtro
        ```
            const incrementCounterMemo = useCallback((number) => {
                setCounterMemo((counter) => counter + number);
            }, []);
        ```

</br>

-   **UseMemo**

    -   UseMemo é usado para otimizações
    -   UseMemo armazena valores inalterados
    -   UseMemo é bastante recomendado para listagem de elementos vindos de uma API. Uma tela apresenta vários elementos que são renderizados, caso haja mais renderizações conforme o uso, os elementos da API sempre serão chamados novamente, causando muitas renderizações.
    -   **Exemplo:**

    ```
        const [posts, setPosts] = useState([]);
        const [value, setValue] = useState("");

        useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((posts) => posts.json())
            .then((post) => setPosts(post));
        }, []);

        function Posts({ posts }) {
            return (
                <div className="container-posts">
                    {useMemo(() => {
                        return posts.length > 0 ? (
                            posts.map((post) => {
                                return (
                                    <div key={post.id} className="post">
                                        <h3>{post.title}</h3>
                                        <p>{post.body}</p>
                                    </div>
                                );
                            })
                        ) : (
                            <p>Não há itens disponíveis</p>
                        );
                    }, [posts])}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>UseMemo</h1>
                <input
                    type="search"
                    name="search"
                    id="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Posts posts={posts} /> //ver arquivo Posts.jsx
            </div>
        );
    ```

    -   Nota-se que sempre que um valor for digitado no input, ocorrerá uma renderizaçao da página, e em cada renderização os dados da API são chamandos e renderizados na tela novamente. O UseMemo entra nessa hora, ele salva os Posts inalterados, evitando renderizações pesadas.

</br>

-   **UseRef**

    -   UseRef é usado para refernciar elementos ou valores
    -   UseRef não causa novas renderizações com alterações de valores
    -   Com UseRef pode-se manipular elementos do DOM
    -   Usando o ".current" você terá acesso ao "valor mutável" do elemento referenciado.
    -   **Exemplo**:

    ```
        const [value, setValue] = useState("");
        const inputRef = useRef(null); //cria referências

        useEffect(() => {
            inputRef.current.focus();
        }, [value]);

        <input
                ref={inputRef} //faz a referência
                type="search"
                name="search"
                id="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ width: "700px", fontSize: "20px" }}
            />
    ```
