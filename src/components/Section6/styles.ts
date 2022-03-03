import styled from "styled-components";

export const Container = styled.section`
    background-image: url('images/IMAGEM ROSA DE FUNDO 3.png');
    padding: 2rem 0;
`

export const Content = styled.div`

    color: #fff;

    display: flex;
    align-items: center;
    flex-direction: column;

    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    width: 90%;

    h1 {
        font-size: 2rem;
    }

    img {
        width: 500px;

        @media(max-width: 700px) {
            width: 400px;
        }

        @media(max-width: 425px) {
            width: 250px;
        }
    }

    strong {
        font-size: 2rem;
        margin-top: 2rem;
    }

    p {
        margin: 1rem;
        font-size: 1.6rem;
    }

`