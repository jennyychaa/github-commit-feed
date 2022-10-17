import { useMemo, useState } from 'react';
import { Octokit } from '@octokit/core';

function useSearch() {
  const [commits, setCommits] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCommitLogs = async (username: string, repoId: string) => {
    setIsLoading(true);

    const octokit = new Octokit({ auth: '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' }); 
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: username,
      repo: repoId
    });
    setCommits(data);

    setIsLoading(false);
  };

  const data = useMemo(
    () => ({
      isLoading,
      commits,
    }), [
      isLoading,
      commits 
    ]
  );

  return {
    data,
    action: {
      getCommitLogs
    },
  };
}

export default useSearch;