import { metaObject } from '@/config/site.config';
import ListingNewsFeedDetails from '@/app/shared/news-feed-details';

export const metadata = {
  ...metaObject('News Feed'),
};

const pageHeader = {
  title: 'News Feed',
  breadcrumb: [],
};
export default function NewsFeedDetailsPage() {
  return (
    <div className="@container">
      <ListingNewsFeedDetails className="mb-6" />
    </div>
  );
}
