import Head from 'next/head';
import AppBar from './appBar';


export default function Layout({children, title}) {
    const titleSuffix = 'Niceness!';
    const fullTitle = title ? `${title} • ${titleSuffix}` : titleSuffix;

    return (
        <>
            <Head>
                <title>{fullTitle}</title>
            </Head>
            <AppBar />

            {children}

            <footer>Fake, temporary footer</footer>
        </>
    );
}


