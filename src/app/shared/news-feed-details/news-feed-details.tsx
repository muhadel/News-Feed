// 'use client';

import { Title, Text } from 'rizzui';
import { useNewsFeed } from '@/store/news-feed/news-feed.context';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import { useFilterControls } from '@/hooks/use-filter-control';

export default function NewsFeedDetails(props: any) {
  const { selectedArticle } = useNewsFeed();
  const router = useRouter();
  const { t } = useTranslation('common');
  const { state, reset } = useFilterControls<any, any>({});
  if (!selectedArticle) {
    let path = `${routes.newsFeed.articles}?`;
    if (state.query) path += `query=${state.query}`;
    router.push(path);
  }

  return (
    <div className="mt-5 @container">
      <div className="mb-4 flex">
        <Link href={routes.newsFeed.articles}>
          <button type="button" className="text-blue-700 hover:underline">
            {t('BACK_TO_NEWS_FEED')}
          </button>
        </Link>
      </div>

      <div className="@3xl:grid @3xl:grid-cols-12">
        <div className="col-span-12 @container">
          <div className="border-b border-muted pb-6 @lg:pb-8">
            <Title as="h1" className="mb-2.5 font-bold @6xl:text-4xl">
              {selectedArticle?.title}
            </Title>
            <Text as="p" className="text-base">
              {selectedArticle?.description}
            </Text>
            <div className="mt-2 flex items-center">
              <Text as="p" className="mr-4 text-sm">
                Source: {selectedArticle?.source?.name || '--'}
              </Text>
              <Text as="p" className="text-sm">
                Author: {selectedArticle?.author || '--'}
              </Text>
            </div>
          </div>
        </div>
        <div className="col-span-12 mb-7 @container @lg:mb-10 @3xl:pe-10">
          <div>
            <div
              key={`product-gallery`}
              className="relative mx-auto aspect-[14/4.65] w-full overflow-hidden rounded bg-gray-100 @xl:rounded-md"
            >
              <Image
                src={selectedArticle?.urlToImage || ''}
                alt={selectedArticle?.title || ''}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
                blurDataURL={`/_next/image?url=${selectedArticle?.urlToImage || ''}&w=10&q=1`}
                className="h-full w-full object-fill"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 @container">
          <div className="border-b border-muted pb-6 @lg:pb-8">
            <Text as="p" className="text-base">
              {selectedArticle?.content?.split('[+')[0] || ''}
            </Text>
          </div>
        </div>
      </div>
      {/* <div className="fixed left-0 right-0 top-0 z-50 bg-white px-4 py-2 shadow-md @lg:px-8">
        <Button onClick={() => goBack()} className="text-primary">
          Back
        </Button>
      </div> */}
    </div>
  );
  return (
    <div className="@container">
      <div className="@3xl:grid @3xl:grid-cols-12">
        <div className="col-span-7 mb-7 @container @lg:mb-10 @3xl:pe-10">
          <div className="grid grid-cols-2 gap-3 @md:gap-4 @xl:gap-5 @2xl:gap-7">
            <div
              key={`product-gallery`}
              className="relative mx-auto aspect-[4/4.65] w-full overflow-hidden rounded bg-gray-100 @xl:rounded-md"
            >
              <Image
                src={selectedArticle?.urlToImage || ''}
                alt={selectedArticle?.title || ''}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
                blurDataURL={`/_next/image?url=${selectedArticle?.urlToImage || ''}&w=10&q=1`}
                className="h-full w-full object-fill"
              />
            </div>
          </div>
        </div>
        <div className="col-span-5 @container">
          <div className="border-b border-muted pb-6 @lg:pb-8">
            <Title as="h2" className="mb-2.5 font-bold @6xl:text-4xl">
              {selectedArticle?.title}
            </Title>
            <Text as="p" className="text-base">
              {selectedArticle?.content}
            </Text>
          </div>
          {/* <ProductDetailsSummery product={product} />
          <ProductDeliveryOptions />
          <ProductDetailsDescription />
          <ProductDetailsReview /> */}
        </div>
      </div>
      {/* <ProductDetailsRelatedProducts /> */}
    </div>
  );
}
