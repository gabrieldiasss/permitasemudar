import { ElementsSection5 } from '../../types'
import { Container, Content, BoxGrid } from './styles'

interface ElementsSectionProps {
    data: ElementsSection5[]
}

export default function Section5({ data }: ElementsSectionProps) {

    return (
        <Container>
            <Content>

                {data.map((value, key) => (
                    <div key={key} >
                        <div dangerouslySetInnerHTML={{ __html: value.title }} />

                        <p>{value.subtitle}</p>

                        <BoxGrid>
                            {value.group.map((v, key) => (
                                <div key={key} >
                                    <b>{v.title_box_section_5[0].text}</b>
                                    <br />
                                    {v.text_box_section_5[0].text}
                                </div>
                            ))}

                        </BoxGrid>
                    </div>

                ))}

            </Content>
        </Container >
    )
} 