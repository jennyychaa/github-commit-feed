import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Button, FeedItem, Header, Layout } from '../../components';
import { Error } from '../../pages';
import useSearch from '../../hooks/useSearch';

const ButtonContainer = styled.div`
  text-align: center;
`;

const Feed = () => {
  const location = useLocation();
  const {
    data: { isLoading, commits },
    action: { getCommitLogs }
  } = useSearch();
  const [maxCommits, setMaxCommits] = useState<number>(5);

  let initialCommits: any[] = commits ? commits.slice(0, maxCommits + 1) : [];
  const params = location.pathname.split('/');
  const user = params[1];
  const repo = params[2];

  const handleLoadMore =  () =>  {
    setMaxCommits(maxCommits + 5);
  }

  useEffect(() => {
    if (user && repo) {
      getCommitLogs(user, repo);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, repo]);

  if (!commits) {
    return <Error />;
  }

  if (isLoading) {
    return (
      <Layout>
        <Header title="Loading..." />
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title="Commit Feed" subtitle={`Showing results for /${user}/${repo}`} />
      {initialCommits?.map(({ commit, html_url }: any) => {
        const commitDate = new Date(commit.author.date).toLocaleDateString('en-US');

        return (
          <FeedItem 
            author={commit.author.name}
            date={commitDate}
            message={commit.message}
            url={html_url}
          />
        );
      })}
      {commits.length >= maxCommits && (
        <ButtonContainer>
          <Button onClick={handleLoadMore}>Load More</Button>
        </ButtonContainer>
      )}
    </Layout>
  );
};

export default Feed;