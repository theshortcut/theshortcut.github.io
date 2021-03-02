import { gql } from 'urql';
import { BookmarkInfoFragment } from '../fragments/bookmark';

export const GET_BOOKMARKS = gql`
  query GetBookmarks($skip: Int) {
    bookmarks(skip: $skip) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragment}
`;
