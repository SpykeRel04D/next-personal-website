import Head from 'next/head';
import '../styles/globals.scss'

import { LanguageProvider } from './../context/languageContext.js';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <LanguageProvider>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#252934" />
                    <meta
                        name="description"
                        content="Personal Web Page of Roger Vidal - Developer"
                    />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                    <title>Roger Vidal - Developer</title>
                </Head>
                <Component {...pageProps} />
            </LanguageProvider>
        </>
      )
}

export default MyApp
