'use client';

import React, { useMemo, useReducer, useContext, createContext } from 'react';
import {
  newsFeedReducer,
  State,
  initialState,
  ActionType,
} from './news-feed.reducer';
import { Article } from '@/types';

interface NewsFeedProviderState extends State {
  addArticles: (articles: Article[]) => void;
  addSources: (sources: string[]) => void;
  addAuthors: (authors: string[]) => void;
  setSortBy: (sortBy: string) => void;
  setPage: (page: number) => void;
  setLanguage: (language: string) => void;
  setCountry: (country: string) => void;
  setCategory: (category: string) => void;
  selectArticle: (article: Article) => void;
}

export const newsFeedContext = createContext<NewsFeedProviderState | undefined>(
  undefined
);

export const useNewsFeed = () => {
  const context = useContext(newsFeedContext);
  if (context === undefined) {
    throw new Error(`useNewsFeed must be used within an NewsFeedProvider`);
  }

  return useMemo(() => context, [context]);
};

export function NewsFeedProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer<React.Reducer<State, any>>(
    newsFeedReducer,
    initialState
  );

  const addArticles = (articles: Article[]) =>
    dispatch({ type: ActionType.AddArticles, articles });

  const addSources = (sources: string[]) =>
    dispatch({ type: ActionType.AddSources, sources });

  const addAuthors = (authors: string[]) =>
    dispatch({ type: ActionType.AddAuthors, authors });

  const setSortBy = (sortBy: string) =>
    dispatch({ type: ActionType.SetSortBy, sortBy });

  const setPage = (page: number) =>
    dispatch({ type: ActionType.SetPage, page });

  const setLanguage = (language: string) =>
    dispatch({ type: ActionType.SetLanguage, language });

  const setCountry = (country: string) =>
    dispatch({ type: ActionType.SetCountry, country });

  const setCategory = (category: string) =>
    dispatch({ type: ActionType.SetCategory, category });

  const selectArticle = (article: Article) =>
    dispatch({ type: ActionType.SelectArticle, article });

  const value = useMemo(
    () => ({
      ...state,
      addArticles,
      addSources,
      addAuthors,
      setSortBy,
      setPage,
      setLanguage,
      setCountry,
      setCategory,
      selectArticle,
    }),
    [state]
  );

  return (
    <newsFeedContext.Provider value={value} {...props}>
      {children}
    </newsFeedContext.Provider>
  );
}
