"use client"


import React from "react";
import withProtected from "../withProtected";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="protected-layout">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Protected Area</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/protected/dashboard" className="hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/protected/form" className="hover:underline">
                  Form
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    console.log("Logging out...");
                  }}
                  className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Your App Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default withProtected(Layout);
