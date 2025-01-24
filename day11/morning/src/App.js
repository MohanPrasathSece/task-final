import React, { Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('./Header'));
const MainContent = lazy(() => import('./MainContent'));
const Footer = lazy(() => import('./Footer'));

function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Header />
        <MainContent />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
