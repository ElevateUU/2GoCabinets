import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;