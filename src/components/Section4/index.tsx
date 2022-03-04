import { ElementsSection4 } from '../../types'
import { Container, Content, BoxGrid } from './styles'

interface ElementsSectionProps {
    data: ElementsSection4[]
}

export default function Section4({ data }: ElementsSectionProps) {

    return (
        <Container>
            <Content>
                {data.map((value, key) => (
                    <div key={key} >
                        <div dangerouslySetInnerHTML={{ __html: value.title }} />

                        <BoxGrid>
                            {value.group.map((v, key) => (
                                <div key={key}>
                                    {v.box_section_4}
                                </div>
                            ))}
                        </ BoxGrid>

                    </div>
                ))}

            </Content>
        </Container>
    )
}