import React, { createContext, useState } from 'react'

export const AppContext = createContext({
  isFetchedRepos: false,
  repositories: null,
  userRepositoriesTotalCount: 0,
  userName: '',
  searchValue: '',
  chosenRepoName: '',
  setUserName: () => {},
  setSearchValue: () => {},
  setFetchedReposStatus: () => {},
  setUserRepositories: () => {},
  setUserRepositoriesTotalCount: () => {},
  setChosenRepoName: () => {},
})

function AppProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isFetchedRepos, setFetchedReposStatus] = useState(false);
  const [userRepositories, setUserRepositories] = useState(null);
  const [userRepositoriesTotalCount, setUserRepositoriesTotalCount] = useState(0);
  const [chosenRepoName, setChosenRepoName] = useState('');

  return (
    <AppContext.Provider value={{
      userName,
      searchValue,
      isFetchedRepos,
      userRepositories,
      userRepositoriesTotalCount,
      chosenRepoName,
      setUserName,
      setSearchValue,
      setFetchedReposStatus,
      setUserRepositories,
      setUserRepositoriesTotalCount,
      setChosenRepoName,
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
