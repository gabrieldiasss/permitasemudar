import { ElementsSection3 } from '../../types'
import { Container, Content } from './styles'

interface ElementsSectionProps {
    data: ElementsSection3[]
}

export default function Section3({ data }: ElementsSectionProps) {

    return (
        <Container>
            {data.map((value, key) => (
                <Content key={key} >
                    <div dangerouslySetInnerHTML={{ __html: value.title }} />

                    <div dangerouslySetInnerHTML={{ __html: value.text }} />

                    <a href={value.link_button} >
                        <button type='button'>EU ME PERMITO MUDAR</button>
                    </a>
                    
                </Content>
            ))}

        </Container>
    )
}