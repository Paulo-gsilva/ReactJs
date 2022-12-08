import React, { useState, useEffect } from "react";
import { useRef } from "react";
import PostsRef from "../UseRef/PostsRef";

//UseRef é usado para refernciar elementos ou valores
//UseRef não causa novas renderizações com alterações de valores
//Com UseRef pode-se manipular elementos usando o ".current"
function UseRef() {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState("");
    const inputRef = useRef(null); //cria referências

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((posts) => posts.json())
            .then((post) => setPosts(post));
    }, []);

    useEffect(() => {
        inputRef.current.focus();
    }, [value]);

    const handleClick = (value) => {
        setValue(value);
    };

    return (
        <div className="App">
            <h1>UseMemo</h1>
            <input
                ref={inputRef} //faz a referência
                type="search"
                name="search"
                id="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ width: "700px", fontSize: "20px" }}
            />
            <PostsRef posts={posts} onClickFunction={handleClick} />
        </div>
    );
}

export default UseRef;
