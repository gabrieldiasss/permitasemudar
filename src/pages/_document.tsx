import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
						rel="stylesheet"
					/>

					<meta name="facebook-domain-verification" content="b28sgql9k4ojudz3hauhud27awynt5" />

					<script>
						!function (f, b, e, v, n, t, s) {
            				if (f.fbq) return; n = f.fbq = function () {
							n.callMethod ?
								n.callMethod.apply(n, arguments) : n.queue.push(arguments)
						};
						if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
						n.queue = []; t = b.createElement(e); t.async = !0;
						t.src = v; s = b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t, s)
        			} (window, document, 'script',
						'https://www.facebook.com/tr?id=3117302385217007&ev=PageView&noscript=1');
						fbq('init', '3117302385217007');
						fbq('track', 'PageView');

						<noscript>
							<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3117302385217007&ev=PageView&noscript=1" />
						</noscript>
					</script>

				</Head>

				<body>
					<Main />
					<NextScript />
				</body>

				<script
					async
					defer
					src="https://static.cdn.prismic.io/prismic.js?new=true&repo=gabrieljoseph">
				</script>


			</Html>
		);
	}
}