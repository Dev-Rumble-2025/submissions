import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {!isHomePage && !isAuthPage && <Header />}
      {!isHomePage && !isAuthPage && <Navigation />}
      <main className={`${!isHomePage && !isAuthPage ? 'pt-32' : ''} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;