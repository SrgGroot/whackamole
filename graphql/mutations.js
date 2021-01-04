/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWhackaMole = /* GraphQL */ `
  mutation CreateWhackaMole(
    $input: CreateWhackaMoleInput!
    $condition: ModelWhackaMoleConditionInput
  ) {
    createWhackaMole(input: $input, condition: $condition) {
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
export const updateWhackaMole = /* GraphQL */ `
  mutation UpdateWhackaMole(
    $input: UpdateWhackaMoleInput!
    $condition: ModelWhackaMoleConditionInput
  ) {
    updateWhackaMole(input: $input, condition: $condition) {
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
export const deleteWhackaMole = /* GraphQL */ `
  mutation DeleteWhackaMole(
    $input: DeleteWhackaMoleInput!
    $condition: ModelWhackaMoleConditionInput
  ) {
    deleteWhackaMole(input: $input, condition: $condition) {
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
