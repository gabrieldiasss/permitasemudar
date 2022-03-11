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
                            <ReactPlayer width="100%" height="100%" url="http://www.youtube.com/embed/gLEYYR3V5GQ?autoplay=1&origin=http://localhost:3000"
                                config={{
                                    youtube: {
                                        playerVars: {
                                            'autoplay': 1,
                                            'controls': 0,
                                            'autohide': 1,
                                            'wmode': 'opaque',
                                            'origin': 'http://localhost:3000' 
                                        }
                                    }
                                }}
                                controls
                            />
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: value.title }} />

                        <div dangerouslySetInnerHTML={{ __html: value.text }} />
                    </div>
                ))}

            </Content>

        </Container>
    )
}