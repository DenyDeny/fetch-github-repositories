import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {  Layout, Typography, Spin } from 'antd';

// Context
import { AppContext } from '../context';

// Components
import Timer from '../../components/Timer/Timer';

// Queries
import { GET_REPOSITORY } from '../../apollo/queries/repository.query';

const { Content, Header } = Layout;
const { Title } = Typography;

function Repo() {
  const { chosenRepoName, searchValue } = useContext(AppContext);

  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: {
      repoName: chosenRepoName,
      owner: searchValue,
    }
  });

  if (loading) return <Spin />;
  if (!data) return 'ooops...';

  const {
    repository: {
      description,
      forkCount,
      name,
      updatedAt,
    },
  } = data;

  return (
    <div className="App">
      <Header>
        <Link
          className="Header-title"
          to="/"
        >
          Go to home page
        </Link>
      </Header>
      <Layout className="App-layout">
        <Content>
          <Title level={2}>Name: </Title>
          <p>{name}</p>
          <Title level={3}>Description:</Title>
          <p>{description}</p>
          <Title level={3}>Fork counts: </Title>
          <p>{forkCount}</p>
          <Title level={3}>Last updated: </Title>
          <Timer updatedAt={updatedAt} />
        </Content>
      </Layout>
    </div>
  )
}

export default Repo;
