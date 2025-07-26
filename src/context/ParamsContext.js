"use client";
import { createContext, useState } from "react";

export const ParamsContext = createContext();

export const ParamsProvider = ({ children }) => {
  const [params, setParams] = useState("/");

  return (
    <ParamsContext.Provider
      value={{
        params,
        setParams,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
};
