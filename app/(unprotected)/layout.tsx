

import React from "react";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="protected-layout">

      {/* Main Content */}
      <main className="container mx-auto py-6 px-6">
        {children}
      </main>

     
    </div>
  );
};

export default Layout;
