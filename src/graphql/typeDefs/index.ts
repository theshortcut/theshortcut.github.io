import { gql } from 'apollo-server-micro';

export default gql`
  type Bookmark {
    id: ID!
    url: String!
    title: String!
    description: String
    tags: [String]
  }

  type Query {
    bookmarks(skip: Int): [Bookmark]!
  }
`;
