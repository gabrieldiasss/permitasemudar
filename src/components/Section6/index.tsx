import { ElementsSection6 } from '../../types'
import { Container, Content } from './styles'

interface ElementsSectionProps {
    data: ElementsSection6[]
}

export default function Section6({ data }: ElementsSectionProps) {

    return (
        <Container>
            {data.map((value, key) => (
                <Content key={key} >
                    <h1>{value.title}</h1>

                    <img src="images/AREA DE MEMBROS.png" alt="Área de Membros" />

                   <div dangerouslySetInnerHTML={{ __html: value.text }} />
                </Content>
            ))}

        </Container>
    )
}