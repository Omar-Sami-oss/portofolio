import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogPost({ post }) {
  const excerpt = post.excerpt || (post.body ? post.body.slice(0, 160) + '...' : '');

  return (
    <article className="blog-post">
      <h3 className="post-title">{post.title}</h3>
      <div className="post-meta">{post.date}</div>
      <p className="post-excerpt">{excerpt}</p>
      <Link className="read-more" to={`/blog/${post.id}`}>Read more</Link>
    </article>
  );
}

export default BlogPost;
