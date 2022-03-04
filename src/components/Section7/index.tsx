import { ElementsSection7 } from '../../types'
import { Container, Content } from './styles'

interface ElementsSectionProps {
    data: ElementsSection7[]
}

export default function Section7({ data }: ElementsSectionProps) {

    return (
        <Container>
            {data.map((value, key) => (
                <Content key={key} >
                    <div dangerouslySetInnerHTML={{ __html: value.title }} />

                    <div className='price' >
                        <div>12x <b className='small' >{value.lowest_price}</b></div>
                        <div>ou <b>{value.price_total}</b> a vista!</div>
                    </div>

                    <a href={value.link_button} >
                        <button type="button" >EU QUERO MUDAR</button>
                    </a>
                    
                </Content>
            ))}

        </Container>
    )
}