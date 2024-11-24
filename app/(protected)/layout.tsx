"use client";

import React from "react";
import withProtected from "../withProtected";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="protected-layout">{children}</div>;
};

export default withProtected(Layout);
