import useSWR, { SWRResponse } from 'swr';
import { env } from '@/env.mjs';
import { ArticlesResponse } from '@/types';

const BASE_URL = env.NEXT_PUBLIC_NEWS_API_URL;
const API_KEY = env.NEXT_PUBLIC_NEWS_API_KEY;

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
useFetchNewsFeed;

export function useFetchNewsFeed({
  query,
  country,
  language,
  page,
  category,
  sources,
  domains,
  pageSize,
}: {
  query?: string;
  country?: string;
  language?: string;
  page?: number;
  category?: string;
  sources?: string;
  domains?: string;
  pageSize?: number;
}) {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    ...(query && { q: query }),
    ...(country && { country }),
    ...(language && { language }),
    ...(sources && { sources }),
    ...(pageSize && { pageSize: pageSize.toString() }),
    ...(page && { page: page.toString() }),
    ...(category && { category }),
    ...(domains && { domains }),
  });

  // const url = `${BASE_URL}/top-headlines?pageSize=10&${params.toString()}`;
  const url = `${BASE_URL}/everything?${params.toString()}`;
  return useSWR(url, fetcher) as SWRResponse<ArticlesResponse, any, any>;
}
