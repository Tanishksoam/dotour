"use client"

import React, { ComponentType } from "react";
import { useRouter } from "next/navigation";
import { auth } from "./firebase"; // Your Firebase config file
import { useEffect, useState } from "react";

const withProtected = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P> => {
  const ProtectedComponent: React.FC<P> = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setIsAuthenticated(true); // User is logged in
        } else {
          setIsAuthenticated(false);
          router.push("/login"); // Redirect if not authenticated
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (!isAuthenticated) {
      return <p>Loading...</p>; // You can render a loader here
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default withProtected;
