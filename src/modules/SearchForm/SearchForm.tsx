import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField } from '../../components';

const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('name') as string;
    const repoId = formData.get('repo') as string;

    navigate(`/${username}/${repoId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Github Username" name="name" placeholder="Example: m3db" />
      <TextField label="Repository Name" name="repo" placeholder="Example: m3" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;