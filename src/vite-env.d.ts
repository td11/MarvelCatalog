// vite-env.d.ts

/// <reference types="vite/client" />

declare const process: {
    env: {
      REACT_APP_PUBLIC_KEY: string;
      REACT_APP_PRIVATE_KEY: string;
    };
  };
