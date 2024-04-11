import { Metadata } from 'next';
import { MODE } from '@/config/enums';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const siteConfig = {
  title: 'News Feed App',
  description: `News Feed App`,
  logo: null,
  icon: null,
  mode: MODE.LIGHT,
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - News Feed App` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - News Feed App` : title,
      description,
      url: '',
      siteName: 'News Feed App', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: '',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  };
};
