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

-   **UseContext**

    -   UseContext é usado para compartilhar um mesmo "contexto" para diferentes componentes
    -   UseContext evita a passagem de props sucessivas de um componente 1 para chegar ao componente 10
    -   UseContext cria um "estado global"
    -   Para ter acesso ao "estado global" nos componentes filhos é necessário importar o GlobalContext
    -   **Exemplo**:

        ```
            //data.js
            export const globalStateData = {
                title: "Título da página",
                body: "Informações da página",
                counter: 0,
            };

            import { globalStateData } from "./data";
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
        ```

-   **UseReducer**

    -   UseReducer é similar ao UseState
    -   UseReducer é usado para controlar estados complexos
    -   UseReducer recebe um estado e uma função reducer como parâmetros
    -   **Exemplo**:

        ```
            const globalStateData = {
                title: "Título da página",
                body: "Informações da página",
                counter: 0,
            };

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

            const [globalState, dispatch] = useReducer(functionReduce, globalStateData);

        ```

    -   dispatch é função que dispara ações
    -   **Exemplo:**
        ```
            {/*dispatch recebe um objeto que representa a action da função reducer*/}
            <button onClick={() => dispatch({ type: "Upper" })}>Upper</button>
        ```
    -   Dentro do dispatch pode haver um payload, um valor que pode ser passado para a função reducer
    -   **Exemplo:**
        ```
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
        ```
