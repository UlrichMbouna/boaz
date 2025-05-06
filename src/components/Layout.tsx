import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar à gauche */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Navbar />

        {/* Contenu dynamique des pages */}
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
