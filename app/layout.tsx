import './globals.css';
import React, { ReactNode } from 'react';
import Header from './component/header/header';
import Fotter from './component/fotter/fotter';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Fotter />
      </body>
    </html>
  );
};

export default Layout;
