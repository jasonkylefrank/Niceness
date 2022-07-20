import Head from 'next/head';


export default function Layout({children, title}) {
    const titleSuffix = 'Niceness!';
    const fullTitle = title ? `${title} • ${titleSuffix}` : titleSuffix;

    return (
        <>
            <Head>
                <title>{fullTitle}</title>
            </Head>
            <header>
                This is a header
            </header>

            {children}

            <footer>Fake, temporary footer</footer>
        </>
    );
}


