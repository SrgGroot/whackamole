/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWhackaMole = /* GraphQL */ `
  query GetWhackaMole($id: ID!) {
    getWhackaMole(id: $id) {
      id
      clientId
      name
      description
      score
      frequency
      createdAt
      updatedAt
    }
  }
`;
export const listWhackaMoles = /* GraphQL */ `
  query ListWhackaMoles(
    $filter: ModelWhackaMoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhackaMoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        name
        description
        score
        frequency
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;