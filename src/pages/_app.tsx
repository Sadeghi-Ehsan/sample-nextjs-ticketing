import "../styles/index.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="container mx-auto ">
          <div className="flex flex-col items-center justify-center pb-7">
            <div className="h-20 w-full shadow-lg" />
            <div className="flex w-full  justify-center p-10 shadow-sm">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
