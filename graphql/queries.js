/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      conversations {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        conversations {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserConversation = /* GraphQL */ `
  query GetUserConversation($id: ID!) {
    getUserConversation(id: $id) {
      id
      userId
      conversationId
      user {
        id
        username
        conversations {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      conversation {
        id
        members
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserConversations = /* GraphQL */ `
  query ListUserConversations(
    $filter: ModelUserConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        conversationId
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        conversation {
          id
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      members
      users {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          userId
          content
          conversationId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        members
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      userId
      user {
        id
        username
        conversations {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      conversationId
      conversation {
        id
        members
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        content
        conversationId
        conversation {
          id
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
