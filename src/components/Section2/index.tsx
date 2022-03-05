import { Container, Content } from './styles'

import ReactPlayer from 'react-player'
import { ElementsSection2 } from '../../types'

interface ElementsSectionProps {
    data: ElementsSection2[]
}

export default function Section2({ data }: ElementsSectionProps) {

    return (
        <Container>
            <Content>
                <b>*Importante: Assista o vídeo abaixo</b>

                {data.map((value, key) => (
                    <div key={key}>
                        <div className='video-area' >
                            <ReactPlayer width="100%" height="100%" className="video" url={value.link_youtube} controls />
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: value.title }} />
                        
                        <div dangerouslySetInnerHTML={{ __html: value.text }} />
                    </div>
                ))}

            </Content>

        </Container>
    )
}