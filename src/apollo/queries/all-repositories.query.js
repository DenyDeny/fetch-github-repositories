import { gql } from 'apollo-boost';

export const GET_ALL_USER_REPOSITORIES = gql`
  query getUserRepositories($userName: String!) {
      user(login: $userName) {
          repositories(first: 50) {
              edges {
                  node {
                      id
                      name
                      languages(first: 5) {
                          edges {
                              node {
                                  id
                                  name
                              }
                          }
                      }
                  }
              }
              totalCount
          }
      }
  }
`;
