// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run generate to update

import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  id: Scalars['ID'];
  url: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  bookmarks: Array<Maybe<Bookmark>>;
};


export type QueryBookmarksArgs = {
  skip?: Maybe<Scalars['Int']>;
};

export type BookmarkInfoFragment = (
  { __typename: 'Bookmark' }
  & Pick<Bookmark, 'id' | 'url' | 'title' | 'description' | 'tags'>
);

export type GetBookmarksQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetBookmarksQuery = (
  { __typename?: 'Query' }
  & { bookmarks: Array<Maybe<(
    { __typename?: 'Bookmark' }
    & BookmarkInfoFragment
  )>> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Bookmark: ResolverTypeWrapper<Bookmark>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Bookmark: Bookmark;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Query: {};
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
};

export type BookmarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bookmark'] = ResolversParentTypes['Bookmark']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bookmarks?: Resolver<Array<Maybe<ResolversTypes['Bookmark']>>, ParentType, ContextType, RequireFields<QueryBookmarksArgs, never>>;
};

export type Resolvers<ContextType = any> = {
  Bookmark?: BookmarkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export const BookmarkInfoFragmentDoc = gql`
    fragment BookmarkInfo on Bookmark {
  __typename
  id
  url
  title
  description
  tags
}
    `;
export const GetBookmarksDocument = gql`
    query GetBookmarks($skip: Int) {
  bookmarks(skip: $skip) {
    ...BookmarkInfo
  }
}
    ${BookmarkInfoFragmentDoc}`;

/**
 * __useGetBookmarksQuery__
 *
 * To run a query within a React component, call `useGetBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarksQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>) {
        return Apollo.useQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, baseOptions);
      }
export function useGetBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>) {
          return Apollo.useLazyQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, baseOptions);
        }
export type GetBookmarksQueryHookResult = ReturnType<typeof useGetBookmarksQuery>;
export type GetBookmarksLazyQueryHookResult = ReturnType<typeof useGetBookmarksLazyQuery>;
export type GetBookmarksQueryResult = Apollo.QueryResult<GetBookmarksQuery, GetBookmarksQueryVariables>;