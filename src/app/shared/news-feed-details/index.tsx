'use client';

import cn from '@/utils/class-names';
import NewsFeedDetails from '@/app/shared/news-feed-details/news-feed-details';

export default function ListingNewsFeedDetails({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('', className)}>
      <NewsFeedDetails />
    </div>
  );
}
