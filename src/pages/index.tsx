import { GlobalStyle } from '../styles/global'

import Head from 'next/head'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'

export default function Home() {

    return (

        <>
            <GlobalStyle />

            <Head>
                <title>Permita-se Mudar</title>
            </Head>

            <main>
                <Section1 />
                <Section2 />
            </main>
        </>
    )
}