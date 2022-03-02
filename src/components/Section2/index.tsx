import { Container, Content } from './styles'

import ReactPlayer from 'react-player'

export default function Section2() {

    return (
        <Container>
            <Content>
                <b>*Importante: Assista o vídeo abaixo</b>

                <div>
                    <ReactPlayer width='860px' height='400px' url="https://youtu.be/gLEYYR3V5GQ" controls />
                </div>

                <h1>Chega de viver <span>recomeçando</span>, é hora de <span>CONSEGUIR</span></h1>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nisi vitae mollitia aut, atque illum, eius sint quis, quisquam necessitatibus dolorum ad dignissimos consequuntur assumenda incidunt alias magni vero eveniet?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem quos voluptatum qui nostrum voluptates corporis a officiis, autem asperiores, quia assumenda odio aut adipisci praesentium maiores obcaecati odit optio!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque totam, soluta ipsam minus explicabo qui repudiandae officiis, corporis est voluptatem eveniet eligendi maxime magni consequatur facilis nulla modi recusandae quibusdam.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia magnam suscipit facere odit nulla delectus non eum! Animi vero fuga provident quaerat quod maiores delectus labore placeat dolorum consectetur?
                </p>
            </Content>

        </Container>
    )
}