import React, { useEffect, useMemo, useState } from "react";
import Posts from "./Posts";

//UseMemo é usado para otimizações
//UseMemo armazena valores inalterados
function UseMemo() {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((posts) => posts.json())
            .then((post) => setPosts(post));
    }, []);

    //Com o input ativado, nota-se que a cada tecla digita, um valor é atribuido ao estado, logo
    //ocorrerá a renderização da página. Consequentemente, todos os posts serão solicitados a API e renderizaddos novamente
    //na tela, causando ineficiência. O UseMemo entra nessa hora, ele salva os Posts inalterados, evitando renderizações pesadas
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
            <Posts posts={posts} />
        </div>
    );
}

export default UseMemo;
