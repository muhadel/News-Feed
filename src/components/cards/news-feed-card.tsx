'use client';

import Image from 'next/image';
import { Title, Badge } from 'rizzui';
import cn from '@/utils/class-names';
import { useNewsFeed } from '@/store/news-feed/news-feed.context';
import Link from 'next/link';
import { generateSlug } from '@/utils/generate-slug';
import { Article } from '../../types';
import { useFilterControls } from '../../hooks/use-filter-control';

export default function NewsFeedCard({ data }: { data: Article }) {
  const { selectArticle } = useNewsFeed();
  const { state, reset } = useFilterControls<any, any>({});

  console.log('state123', state);

  return (
    <>
      <Link
        key={generateSlug(data.title)}
        href={{
          pathname: `/article/${generateSlug(data.title)}`,
        }}
        className="rounded-lg border border-muted shadow-sm"
        onClick={() => selectArticle(data)}
      >
        <div className="flex cursor-pointer items-center justify-between gap-4 p-3 md:p-5">
          <div className="flex gap-2 sm:items-center md:gap-4">
            <div className="w-62 relative aspect-square h-52">
              <Image
                src={data?.urlToImage || ''}
                alt={data?.title || ''}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
                blurDataURL={`/_next/image?url=${data?.urlToImage || ''}&w=10&q=1`}
                className="h-full w-full object-fill"
              />
            </div>
            <div className="gap-6 sm:flex sm:flex-col">
              <div className="flex items-center gap-3">
                <Badge
                  rounded="md"
                  variant="flat"
                  className={cn('hidden px-3.5 py-1 sm:block')}
                >
                  {data?.source.name}
                </Badge>
              </div>
              <Title as="h5" className="font-semibold text-gray-900">
                {data?.title || ''}
              </Title>
              <ul className="flex items-center divide-x">
                {data?.description || data?.title}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
