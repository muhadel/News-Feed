'use client';
import ListingNewsFeed from '@/app/shared/news-feed-list';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';

// export const metadata = {
//   ...metaObject('News Feed'),
// };

const pageHeader = {
  title: 'NEWS_FEED',
  breadcrumb: [],
};

export default function NewsFeedPage({ params, searchParams }: any) {
  return (
    <div className="@container">
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>
      <ListingNewsFeed className="mb-6" />
    </div>
  );
}
