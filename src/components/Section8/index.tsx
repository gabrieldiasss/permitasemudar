import { ElementsSection8 } from '../../types'
import { Container, Content, DaysWarranty, WhoAmI } from './styles'

interface ElementsProps {
    data: ElementsSection8[];
}

export default function Section8({ data }: ElementsProps) {

    return (
        <Container>
            {data.map((value, key) => (
                <Content key={key} >

                    <DaysWarranty>
                        <div>
                            <h1>{value.title}</h1>

                            <div dangerouslySetInnerHTML={{ __html: value.subtitle_2 }} />
                        </div>

                        <img src="images/EBOOK.png" alt="" />

                    </DaysWarranty>

                    <a href={value.link_button} >  
                        <button type="button">EU VOU ATINGIR MEUS OBJETIVOS!</button>
                    </a>
                   

                    <WhoAmI>

                        <div>
                            <img src="images/Foto silvana.png" alt="" />
                        </div>

                        <div>
                            <b>{value.title_2}</b>

                           <div dangerouslySetInnerHTML={{ __html: value.text_2 }} />
                        </div>

                    </WhoAmI>

                </Content>
            ))}

        </Container>
    )
}