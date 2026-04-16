import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}


import React from 'react';
const Layout = React.memo(({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface)', color: 'var(--on-surface)' }}>
      <Header />
      <main className="pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
});

export default Layout
