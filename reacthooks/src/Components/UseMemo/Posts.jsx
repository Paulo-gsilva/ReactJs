import React, { useMemo } from "react";

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

export default Posts;
