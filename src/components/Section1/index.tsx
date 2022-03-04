import { ElementsSection1 } from '../../types'
import { Container, Content, Texts } from './styles'

interface ElementsSectionProps {
    data: ElementsSection1[]
}

export default function Section1({ data }: ElementsSectionProps) {

    return (
        <Container>
            <Content>
                {data.map((value, key) => (
                    <Texts key={key} >
                        <h1>{value.title}</h1>

                        <p>{value.subtitle}</p>

                        <a href={value.link_button} >
                            <button type="button">EU QUERO MUDAR</button>
                        </a>

                    </Texts>
                ))}

                <div>
                    <img src="/images/EBOOK.png" alt="" />
                </div>

            </Content>
        </Container>
    )
}

