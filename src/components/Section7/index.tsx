import { Container, Content } from './styles'

export default function Section7() {

    return (
        <Container>
            <Content>
                <h1>
                    Tenha acesso a todo o conteúdo do <span>programa Permita-se mudar</span> + <span>Bônus</span> por apenas:
                </h1>

                <div className='price' >
                    <div>12x <strong>R$9, 45</strong></div>
                    <div>ou <b>R$97, 00</b> a vista!</div>
                </div>

                <button type="button" >EU QUERO MUDAR</button>
            </Content>
        </Container>
    )
}