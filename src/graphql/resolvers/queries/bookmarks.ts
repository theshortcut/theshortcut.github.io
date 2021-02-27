import { Resolvers } from '@/graphql/types.generated';
import qs from 'qs';

export const getBookmarks: Resolvers['Query']['bookmarks'] = async (
  _,
  { skip = 0 },
) => {
  const params = qs.stringify({
    auth_token: process.env.PINBOARD_API_TOKEN,
    start: skip,
    results: 15,
    format: 'json',
    tag: 'cfdotcom',
  });
  const res = await fetch(`https://api.pinboard.in/v1/posts/all?${params}`);
  const json = await res.json();
  return json.map((b) => ({
    id: b.hash,
    url: b.href,
    title: b.description,
    ...(b.extended ? { description: b.extended } : {}),
    tags: b.tags.split(' '),
  }));
};
