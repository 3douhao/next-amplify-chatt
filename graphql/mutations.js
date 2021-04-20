/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserConversation = /* GraphQL */ `
  mutation CreateUserConversation(
    $input: CreateUserConversationInput!
    $condition: ModelUserConversationConditionInput
  ) {
    createUserConversation(input: $input, condition: $condition) {
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
export const updateUserConversation = /* GraphQL */ `
  mutation UpdateUserConversation(
    $input: UpdateUserConversationInput!
    $condition: ModelUserConversationConditionInput
  ) {
    updateUserConversation(input: $input, condition: $condition) {
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
export const deleteUserConversation = /* GraphQL */ `
  mutation DeleteUserConversation(
    $input: DeleteUserConversationInput!
    $condition: ModelUserConversationConditionInput
  ) {
    deleteUserConversation(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
