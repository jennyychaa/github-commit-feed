import React from 'react';
import styled from 'styled-components';

interface FeedItemProps {
  author: string;
  date: string;
  message: string;
  url: string;
}

const FeedContainer = styled.div`
  display: flex;
  grid-gap: 16px;
  align-items: center;
  width: 100%;
  border: 1px solid #A8A8A8;
  border-radius: 4px;
  margin-bottom: 24px;
  padding: 16px;
`;

const Date = styled.span`
  max-width: 80px;
  width: 100%;
`;

const Link = styled.a`
  max-width: 450px;
  width: 100%;
  color: #00BFFF;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled.span`
  max-width: 100px;
  width: 100%;
`;

const FeedItem = ({ author, date, message, url }: FeedItemProps) => {
  return (
    <FeedContainer>
      <Date>{date}</Date>
      <Link href={url} target="_blank">{message}</Link>
      <Author>{author}</Author>
    </FeedContainer>
  );
};

export default FeedItem;