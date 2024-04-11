import FilterWithSearch from '@/components/filter-with-search';
import { useFilterControls } from '@/hooks/use-filter-control';
import cn from '@/utils/class-names';
import { useNewsFeed } from '@/store/news-feed/news-feed.context';
import { useTranslation } from 'react-i18next';

export default function NewsFeedFilterSidebar({
  className,
}: {
  className?: string;
}) {
  const { t } = useTranslation('common');

  const { state, applyFilter, clearFilter, reset } = useFilterControls<
    any,
    any
  >({});

  const { sources } = useNewsFeed();

  return (
    <div
      className={cn(
        'col-span-full divide-y @5xl:col-span-4 @7xl:col-span-3',
        className
      )}
    >
      <div className="py-5">
        <FilterWithSearch
          title={t('SOURCES')}
          name={t('SOURCES')}
          data={sources as any}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
      </div>
    </div>
  );
}
