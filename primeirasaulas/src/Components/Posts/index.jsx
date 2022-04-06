import PostCard from "../PostCard";

export default function Posts({ posts }) {
    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard
                    key={post.id} //react precisa da declaração de key para poder definir a diferença de elementos numa lista
                    cover={post.cover}
                    title={post.title}
                    body={post.body}
                />
            )
            )}
        </div>
    );
}