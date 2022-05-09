import ReactPlayer from 'react-player'
import { ElementsSection1 } from '../../types'
import { Container, Content, Texts, Video } from './styles'

interface ElementsSectionProps {
    data: ElementsSection1[]
}

export default function Section1({ data }: ElementsSectionProps) {

    return (
        <Container>

            {data.map((value, key) => (
                <div className='video-area-desktop' key={key} >
                    <ReactPlayer width="100%" height="100%" url={`http://www.youtube.com/embed/${value.link_youtube}?autoplay=1&origin=http://localhost:3000`}
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
            ))}

            <Content>

                {data.map((value, key) => (
                    <Texts key={key} >
                        <h1>{value.title}</h1>

                        <p>{value.subtitle}</p>

                        {data.map((value, key) => (
                            <div className='video-area-mobile' key={key} >
                                <ReactPlayer width="100%" height="100%" url={`http://www.youtube.com/embed/${value.link_youtube}?autoplay=1&origin=http://localhost:3000`}
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
                        ))}

                        {/* <a href={value.link_button} >
                            <button type="button">EU QUERO MUDAR</button>
                        </a> */}

                    </Texts>
                ))}



                <div>
                    <img src="/images/EBOOK.png" alt="" />
                </div>

            </Content>

            <Video>

            </Video>

        </Container>
    )
}

