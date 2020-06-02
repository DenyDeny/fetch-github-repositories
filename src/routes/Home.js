import React, { useEffect, useContext } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  Layout,
  Typography,
  Spin,
} from 'antd';

// Context
import { AppContext } from './context';

// Components
import Header from '../components/Header/Header';
import RepoList from '../components/RepoList/RepoList';

// Queries
import { GET_ALL_USER_REPOSITORIES } from '../apollo/queries/all-repositories.query'

const { Content } = Layout;
const { Title } = Typography;

function Home() {
  const {
    userName,
    searchValue,
    userRepositories,
    userRepositoriesTotalCount,
    setUserName,
    setSearchValue,
    setUserRepositories,
    setUserRepositoriesTotalCount,
  } = useContext(AppContext);

  const [getUserRepositories, { loading, data, error }] = useLazyQuery(
    GET_ALL_USER_REPOSITORIES,
    {
      variables: {
        userName: searchValue,
      }
    }
  );

  useEffect(() => {
    if (!error && data) {
      const {
        user: {
          repositories: {
            edges,
            totalCount,
          },
        },
      } = data;
      setUserRepositories(edges);
      setUserRepositoriesTotalCount(totalCount);
    }
  }, [error, data, setUserRepositories, setUserRepositoriesTotalCount])

  const onChange = (event) => setUserName(event.target.value);

  const onSearch = () => {
    setSearchValue(userName);
    setUserName('');
    getUserRepositories();
  }

  return (
    <div className="App">
      <Header
        onChange={onChange}
        onSearch={onSearch}
        searchName={userName}
      />
      <Layout className="App-layout">
        <Content className="App-content">
          <Title level={2}>
            {`${searchValue || 'Somebody'} repositories list contains ${userRepositoriesTotalCount}`}:
          </Title>
          {
            loading ?
              <Spin />
              :
              <RepoList data={userRepositories} />
          }
        </Content>
      </Layout>
    </div>
  );
}

export default Home;
