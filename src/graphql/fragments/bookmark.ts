import { gql } from 'urql';

export const BookmarkInfoFragment = gql`
  fragment BookmarkInfo on Bookmark {
    __typename
    id
    url
    title
    description
    tags
  }
`;
