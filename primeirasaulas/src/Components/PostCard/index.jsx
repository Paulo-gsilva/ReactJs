import React from 'react';

export default function PostCard({ cover, title, body }) {
    return (
        <div className="posts-content">
            <img src={cover} alt={title} />
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}