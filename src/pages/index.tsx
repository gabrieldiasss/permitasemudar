import { GlobalStyle } from '../styles/global'

import Head from 'next/head'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import Section8 from '../components/Section8'
import Section9 from '../components/Section9'

import { getPrismicClient } from '../services/prismic'
import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { RichText, Link } from 'prismic-dom'
import { ElementsSection1, ElementsSection2, ElementsSection3, ElementsSection4, ElementsSection5, ElementsSection6, ElementsSection7, ElementsSection8 } from '../types'

interface ElementsProps {
    elementsSection1: ElementsSection1[];
    elementsSection2: ElementsSection2[];
    elementsSection3: ElementsSection3[];
    elementsSection4: ElementsSection4[];
    elementsSection5: ElementsSection5[];
    elementsSection6: ElementsSection6[];
    elementsSection7: ElementsSection7[];
    elementsSection8: ElementsSection8[];
}

export default function Home({ elementsSection1, elementsSection2, elementsSection3, elementsSection4, elementsSection5, elementsSection6, elementsSection7, elementsSection8 }: ElementsProps) {

    return (

        <>
            <GlobalStyle />

            <Head>
                <title>Permita-se Mudar</title>
            </Head>

            <main>
                <Section1 data={elementsSection1} />
                <Section2 data={elementsSection2} />
                <Section3 data={elementsSection3} />
                <Section4 data={elementsSection4} />
                <Section5 data={elementsSection5} />
                <Section6 data={elementsSection6} />
                <Section7 data={elementsSection7} />
                <Section8 data={elementsSection8} />
                <Section9 />
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient()

    const response = await prismic.query<any>([
        Prismic.Predicates.at('document.type', 'content')
    ], {
        fetch: ['content.title_section_1', 'content.text_section_1', 'content.link_button_section_1', 'content.link_youtube', 'content.title_section_2', 'content.text_section_2', 'content.title_section_3', 'content.text_section_3', 'content.link_button_section_3','content.title_section_4', 'content.group_section_4', 'content.title_section_5', 'content.text_section_5', 'content.group_section_5', 'content.title_section_6', 'content.text_section_6', 'content.title_section_7', 'content.lowest_price', 'content.price_total', 'content.link_button_section_7', 'content.title_1_section_8', 'content.text_1_section_8', 'content.link_button_section_8',
        'content.title_2_section_8', 'content.text_2_section_8'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    const elementsSection1 = response.results.map(value => {

        return {
            title: RichText.asText(value.data.title_section_1),
            subtitle: RichText.asText(value.data.text_section_1),
            link_button: Link.url(value.data.link_button_section_1),
        }
    })

    const elementsSection2 = response.results.map(value => {

        return {
            link_youtube: Link.url(value.data.link_youtube),
            title: RichText.asHtml(value.data.title_section_2),
            text: RichText.asHtml(value.data.text_section_2),
        }
    })

    const elementsSection3 = response.results.map(value => {

        return {
            link_button: Link.url(value.data.link_button_section_3),
            title: RichText.asHtml(value.data.title_section_3),
            text: RichText.asHtml(value.data.text_section_3),
        }
    })

    const elementsSection4 = response.results.map(value => {

        return {
            title: RichText.asHtml(value.data.title_section_4),
            group: value.data.group_section_4,
        }
    })

    const elementsSection5 = response.results.map(value => {

        return {
            title: RichText.asHtml(value.data.title_section_5),
            subtitle: RichText.asText(value.data.text_section_5),
            group: value.data.group_section_5,
        }
    })

    const elementsSection6 = response.results.map(value => {

        return {
            title: RichText.asText(value.data.title_section_6),
            text: RichText.asHtml(value.data.text_section_6),
        }
    })

    const elementsSection7 = response.results.map(value => {

        return {
            title: RichText.asHtml(value.data.title_section_7),
            lowest_price: new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }).format(value.data.lowest_price),
            price_total: new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }).format(value.data.price_total),
            link_button: Link.url(value.data.link_button_section_7),
        }
    })

    const elementsSection8 = response.results.map(value => {

        return {
           title: RichText.asText(value.data.title_1_section_8),
           subtitle_2: RichText.asHtml(value.data.text_1_section_8),
           link_button: Link.url(value.data.link_button_section_8),
           title_2: RichText.asText(value.data.title_2_section_8),
           text_2: RichText.asHtml(value.data.text_2_section_8),
        }
    })

    return {
        props: {
            elementsSection1, elementsSection2, elementsSection3,elementsSection4, elementsSection5, elementsSection6, elementsSection7, elementsSection8
        },

        revalidate: 1800 // 30 minutos

    }
}