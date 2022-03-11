import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html>

                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap" rel="stylesheet" />
                    <meta name="facebook-domain-verification" content="b28sgql9k4ojudz3hauhud27awynt5" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

                <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=gabrieljoseph"></script>
            </Html>
        )
    }
}