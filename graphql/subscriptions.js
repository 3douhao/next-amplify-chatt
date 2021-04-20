/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageByConversationId = /* GraphQL */ `
  subscription OnCreateMessageByConversationId($conversationId: ID!) {
    onCreateMessageByConversationId(conversationId: $conversationId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserConversation = /* GraphQL */ `
  subscription OnCreateUserConversation {
    onCreateUserConversation {
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
export const onUpdateUserConversation = /* GraphQL */ `
  subscription OnUpdateUserConversation {
    onUpdateUserConversation {
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
export const onDeleteUserConversation = /* GraphQL */ `
  subscription OnDeleteUserConversation {
    onDeleteUserConversation {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation($members: String!) {
    onCreateConversation(members: $members) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation($members: String!) {
    onUpdateConversation(members: $members) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation($members: String!) {
    onDeleteConversation(members: $members) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
