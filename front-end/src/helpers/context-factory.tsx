import React from "react";

const contextFactory = <T,>() => {
  const Context = React.createContext<T | undefined>(undefined);

  const useCtx = () => {
    const ctx = React.useContext(Context);
    if (!ctx) {
      throw new Error("useCtx must be used within a Provider with a value");
    }
    return ctx;
  };
  return [Context, useCtx] as const;
};

export default contextFactory;
