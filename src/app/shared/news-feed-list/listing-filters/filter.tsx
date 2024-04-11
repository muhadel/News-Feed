import { getOptionByValue } from '@/app/shared/news-feed-list/listing-filters/filter-utils';
import { Select } from 'rizzui';
import cn from '@/utils/class-names';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

export default function Filter({
  className,
  state,
  applyFilter,
}: {
  className?: string;
  state: Record<any, any>;
  applyFilter: (query: string, value: any) => void;
}) {
  return (
    <div className={cn('flex', className)}>
      <Select
        placeholder={'Other sort'}
        variant="text"
        prefix={<HiOutlineAdjustmentsHorizontal className="h-5 w-5" />}
        selectClassName="h-[42px] pl-5 pr-3.5 min-w-[150px] focus:ring-0"
        dropdownClassName="p-1.5 !z-0"
        optionClassName="h-9"
        options={[]}
        onChange={(option: any) => applyFilter('filter', option.value)}
        value={getOptionByValue(state['filter'], [])}
        className="w-[296px]"
      />
    </div>
  );
}
