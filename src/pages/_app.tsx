import "../styles/index.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center pb-7">
          <div className="h-20 w-full shadow-lg" />
          <div className="mt-10 flex  w-full justify-center">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
