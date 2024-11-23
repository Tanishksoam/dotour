import { NextRouter } from "next/router";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const checkAuth = (router: NextRouter): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User is authenticated:", user.email);
          resolve(true);
        } else {
          console.warn("User not authenticated.");
          router.push("/login"); // Redirect if needed
          resolve(false);
        }
      });
    });
  };
  
