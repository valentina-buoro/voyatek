import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";



const App = ({ Component, pageProps }: AppProps) => {
  
  return (
    <Component {...pageProps} />
  );
};

export default App;