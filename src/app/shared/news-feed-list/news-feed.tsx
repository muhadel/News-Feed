'use client';

import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { Button, Input, Loader } from 'rizzui';
import NewsFeedCard from '@/components/cards/news-feed-card';
import { useFetchNewsFeed } from '@/server/actions/news-feed.actions';
import { useNewsFeed } from '@/store/news-feed/news-feed.context';
import { Article } from '@/types';
import { useFilterControls } from '@/hooks/use-filter-control';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import debounce from 'lodash.debounce';

const MAX_PAGES_TO_REACH = 3;

function NewsFeed() {
  const { t } = useTranslation('common');

  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  // news states
  const [language, setLanguage] = useState<string>('en');
  const [sources, setSources] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>(
    language === 'en' ? 'news' : 'السعودية'
  );
  const [category, setCategory] = useState<string>('');
  const [pageSize] = useState<number>(20);
  const [articles, setArticles] = useState<Article[]>([]);

  const [searchText, setSearchText] = useState<string>('');

  const { state, applyFilter, clearFilter, reset, paginate } =
    useFilterControls<any, any>({});

  useEffect(() => {
    if (state.language) setLanguage(state.language);
    else {
      applyFilter('language', 'en');
      setLanguage('en');
    }
    if (state.sources) setSources(state.sources);
    else setSources('');
    if (state.page) setPage(state.page);
    if (state.query) {
      if (state.query !== query) {
        applyFilter('page', '1');
        setPage(1);
      } else if (state.language !== language) {
        applyFilter('query', '');
        setQuery(language === 'en' ? 'news' : 'السعودية');
      }

      setQuery(state.query);
    } else {
      setQuery(language === 'en' ? 'news' : 'السعودية');
    }

    if (state.category) setCategory(state.category);
    else setCategory('');
  }, [applyFilter, state]);

  const { data, error, isLoading } = useFetchNewsFeed({
    category,
    page,
    sources,
    language,
    query,
    pageSize,
  });

  const { addArticles, addSources, addAuthors } = useNewsFeed();

  useEffect(() => {
    if (data) {
      const filteredArticles: Article[] = [];
      const sourcesSet = new Set();
      const sourcesList: any = [];
      const authors = new Set();

      data?.articles.forEach((article) => {
        if (
          article.title &&
          // article.description &&
          // article.urlToImage &&
          article.title !== '[Removed]'
        ) {
          if (article.source.id && article.source.name) {
            filteredArticles.push(article);

            const { id, name } = article.source;
            // let id = name.toLowerCase().replace(/ /g, '-');
            if (!sourcesSet.has(id)) {
              sourcesSet.add(id);
              sourcesList.push({ id, name });
            }
          }

          // if (article.source.name) {
          //   const { name } = article.source;
          //   let id = name.toLowerCase().replace(/ /g, '-');
          //   if (!sourcesSet.has(id)) {
          //     sourcesSet.add(id);
          //     sourcesList.push({ id, name });
          //   }
          // }

          // if (article.author) {
          //   let id = article.author.toLowerCase().replace(/ /g, '-');
          //   const name = article.author;
          //   authors.add({ id, name });
          // }
        }
      });

      addArticles(filteredArticles);
      setArticles(filteredArticles);

      addSources(sourcesList as any);
      addAuthors(Array.from(authors) as any);
    }
    setIsLoadMoreLoading(false);
  }, [data]);

  // const router = useRouter();

  function handleLoadMore() {
    setIsLoadMoreLoading(true);
    let newPage = +page + 1;
    paginate(newPage);
  }
  const handleSearchDebounced = debounce((searchTextByUser: string) => {
    applyFilter('query', searchTextByUser);
  }, 1000); // Adjust the debounce delay as needed

  const handleSearch = (e: any) => {
    let searchTextByUser = e.target.value;
    setSearchText(searchTextByUser);
    handleSearchDebounced(searchTextByUser);
  };

  const handleClearSearch = () => {
    applyFilter('query', '');
    setSearchText('');
  };

  return (
    <div className="col-span-full flex items-center justify-center @5xl:col-span-8 @7xl:col-span-9">
      {isLoading ? (
        <Loader variant="pulse" />
      ) : (
        <div className="mb-4 flex flex-col items-center xs:pt-3 sm:pt-4">
          <Input
            size="xl"
            value={searchText}
            // ref={inputRef}
            onChange={handleSearch}
            placeholder={t('SEARCH_NEWS_FEED')}
            className="mt-4 w-full @lg:mt-0 @lg:max-w-sm @lg:flex-1 @lg:ps-12 @xl:ps-0"
            inputClassName="shadow-sm"
            prefix={<PiMagnifyingGlassBold className="h-auto w-4" />}
            clearable
            onClear={handleClearSearch}
          />
          <div className="mt-5 flex flex-col gap-7">
            {articles.length ? (
              articles?.map((article, index) => (
                <NewsFeedCard key={index} data={article} />
              ))
            ) : (
              <></>
            )}
            {!articles.length && <div>No Data Found </div>}
          </div>
          {articles.length && page < MAX_PAGES_TO_REACH ? (
            <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
              <Button
                isLoading={isLoadMoreLoading}
                onClick={() => handleLoadMore()}
              >
                {t('LOAD_MORE')}
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsFeed;
