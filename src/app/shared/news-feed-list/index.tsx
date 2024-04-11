'use client';

import cn from '@/utils/class-names';
import NewsFeed from '@/app/shared/news-feed-list/news-feed';
import NewsFeedFilterSidebar from '@/app/shared/news-feed-list/news-feed-sidebar';

export default function ListingNewsFeed({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-12 gap-5 @7xl:gap-10', className)}>
      <NewsFeed />
      <NewsFeedFilterSidebar className="hidden @5xl:block" />
    </div>
  );
}
