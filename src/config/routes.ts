export const routes = {
  newsFeed: {
    articles: '/',
    articleDetails: (slug: string) => `/article/${slug}`,
  },
};
