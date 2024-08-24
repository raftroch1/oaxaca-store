import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 40px;
`;

const FeedItem = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch Instagram posts from your backend API
    const fetchPosts = async () => {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/instagram-feed');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <FeedContainer>
      {posts.map((post) => (
        <FeedItem key={post.id}>
          <img src={post.image_url} alt={post.caption} />
        </FeedItem>
      ))}
    </FeedContainer>
  );
};

export default InstagramFeed;