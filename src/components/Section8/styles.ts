import styled from "styled-components";

export const Container = styled.section`
    padding: 3rem 0;
    background-image: url('images/IMAGEM ROSA DE FUNDO 4.png');
`

export const Content = styled.div`

    color: #fff;

    max-width: 1200px;
    width: 90%;
    margin: 0 auto;

    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }

`

export const DaysWarranty = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

    h1 {
        font-size: 3rem;

        @media(max-width: 500px) {
            font-size: 2.6rem;
        }
    }

    p {
        font-size: 1.6rem;
        margin-top: 2rem;
    }

    img {

        @media(max-width: 1000px) {
            margin-top: 3rem;
        }

        @media(max-width: 600px) {
            width: 400px;
        }

        @media(max-width: 430px) {
            width: 280px;
        }
    }

    

    @media(max-width: 1000px) {
        text-align: center;
        display: block;
        
    }

`

export const WhoAmI = styled.div`

    margin-top: 2rem;

    display: flex;
    align-items: center;

    b {
        font-size: 3rem;
    }

    p {
        font-size: 1.6rem;
    }

    img {

        @media(max-width: 1000px) {
            margin-top: 3rem;
        }

        @media(max-width: 600px) {
            width: 400px;
        }

        @media(max-width: 430px) {
            width: 300px;
        }
    }

    @media(max-width: 1000px) {
        text-align: center;
        display: block;

        margin-top: 2rem;

        display: flex;
        flex-direction: column-reverse;
        
    }
`