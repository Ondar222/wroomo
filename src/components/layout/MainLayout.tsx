import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Newsletter from '../common/Newsletter';

interface MainLayoutProps {
  children: React.ReactNode;
  hideNewsletter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, hideNewsletter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {!hideNewsletter && <Newsletter />}
      <Footer />
    </div>
  );
};

export default MainLayout;