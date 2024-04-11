import { Article } from '@/types';

export interface State {
  articles: Article[];
  sources: string[];
  authors: string[];
  category: string;
  page: number;
  language: string;
  country: string;
  sortBy: string;
  selectedArticle: Article | null;
}

export const initialState: State = {
  articles: [],
  sources: [],
  authors: [],
  category: 'business',
  page: 1,
  language: 'en',
  country: 'us',
  sortBy: 'relevancy',
  selectedArticle: null,
};

export enum ActionType {
  AddArticles = 'ADD_ARTICLES',
  AddSources = 'ADD_SOURCES',
  AddAuthors = 'ADD_AUTHORS',
  SetSortBy = 'SET_SORT_BY',
  SetPage = 'SET_PAGE',
  SetLanguage = 'SET_LANGUAGE',
  SetCountry = 'SET_COUNTRY',
  SetCategory = 'SET_CATEGORY',
  SelectArticle = 'SELECT_ARTICLE',
}

type Action =
  | { type: ActionType.AddArticles; articles: Article[] }
  | { type: ActionType.AddSources; sources: string[] }
  | { type: ActionType.AddAuthors; authors: string[] }
  | { type: ActionType.SetSortBy; sortBy: string }
  | { type: ActionType.SetPage; page: number }
  | { type: ActionType.SetLanguage; language: string }
  | { type: ActionType.SetCountry; country: string }
  | { type: ActionType.SetCategory; category: string }
  | { type: ActionType.SelectArticle; article: Article };

export function newsFeedReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.AddArticles: {
      return { ...state, articles: action.articles };
    }
    case ActionType.AddSources: {
      return { ...state, sources: action.sources };
    }
    case ActionType.AddAuthors: {
      return { ...state, authors: action.authors };
    }
    case ActionType.SetSortBy: {
      return { ...state, sortBy: action.sortBy };
    }
    case ActionType.SetPage: {
      return { ...state, page: action.page };
    }
    case ActionType.SetLanguage: {
      return { ...state, language: action.language };
    }
    case ActionType.SetCountry: {
      return { ...state, country: action.country };
    }
    case ActionType.SetCategory: {
      return { ...state, category: action.category };
    }
    case ActionType.SelectArticle: {
      return { ...state, selectedArticle: action.article };
    }
    default:
      return state;
  }
}
