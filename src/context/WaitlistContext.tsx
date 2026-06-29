"use client";

import { createContext, useContext, useState } from "react";

type WaitlistContextType = {
  email: string;
  setEmail: (email: string) => void;
};

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");

  return (
    <WaitlistContext.Provider value={{ email, setEmail }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);

  if (!context) {
    throw new Error("useWaitlist must be used inside WaitlistProvider");
  }

  return context;
}