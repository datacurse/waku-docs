import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Sidebar } from '../components/Sidebar'
import Breadcrumbs from '@/components/content/Breadcrumbs';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();
  return (
    <div className="font-['Nunito'] bg-bg">
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <div className='flex flex-row min-w-0 sm:px-[4px] md:px-3 max-w-screen-2xl mx-auto page-full-width:max-w-full'>
        <Sidebar />
        <main className="min-w-0 flex-1 max-w-[1654px] py-8 px-24">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
