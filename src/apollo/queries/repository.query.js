import { gql } from 'apollo-boost';

export const GET_REPOSITORY = gql`
  query getRepository($repoName: String!, $owner: String!) {
      repository(name: $repoName, owner: $owner) {
          id
          description
          name
          forkCount
          updatedAt
      }
  }
`
