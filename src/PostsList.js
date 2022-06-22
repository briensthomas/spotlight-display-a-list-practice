import React from 'react';
import Posts from './Posts';


export default function PostsList({ posts }) {
  return (
    <div className='posts-list'>
      {
        posts.map((post, i) => <Posts key={post.title + i + post.id} {...post} />)
      }
    </div>
  );
}

