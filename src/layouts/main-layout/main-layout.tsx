import Header from '@/layouts/main-layout/main-header';
import { MainSidebar } from './main-sidebar';
import { NewsFeedProvider } from '@/store/news-feed/news-feed.context';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';

import { AppProps } from 'next/app';
import { ReactNode } from 'react';

interface MainLayoutProps extends AppProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex min-h-screen flex-grow">
      <MainSidebar className="fixed hidden flex-col justify-between dark:bg-gray-50 xl:block" />
      <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
        <Header />
        <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
          <I18nextProvider i18n={i18n}>
            <NewsFeedProvider>{children}</NewsFeedProvider>
          </I18nextProvider>
        </div>
      </div>
    </main>
  );
}

// export default MainLayout;
export default MainLayout;
