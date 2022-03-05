import styled from 'styled-components'

export const Container = styled.section`
    background-image: url('images/IMAGEM ROSA DE FUNDO 2.png');

    padding: 2rem 0;
`

export const Content = styled.div`

    text-align: center;

    max-width: 800px;
    margin: 0 auto;
    width: 90%;

    strong {
        color: #fff;
    }

    h1 {
        font-size: 2.6rem;
        color: #fff;

        margin-bottom: 2rem;

        @media(max-width: 500px) {
            font-size: 2rem;
        }
    }

    p {
        color: #fff;
        font-size: 1.6rem;

        & + p {
            margin-top: 2rem;
        }
    }

    button {
        margin-top: 2rem;
    }

`