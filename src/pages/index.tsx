import { GlobalStyle } from '../styles/global'

import Head from 'next/head'
import Section1 from '../components/Section1'

export default function Home() {

    return (

        <>
            <GlobalStyle />

            <Head>
                <title>Permita-se Mudar</title>
            </Head>

            <main>
                <Section1 />
            </main>
        </>
    )
}