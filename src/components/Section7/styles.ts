import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem 0;
`

export const Content = styled.div`

    max-width: 800px;
    text-align: center;
    width: 90%;
    margin: 0 auto;

    h1 {
        font-size: 2.6rem;
        
        @media(max-width: 500px) {
            font-size: 2rem;
        }

        strong {
        color: var(--pink-500);
    }
    }

    .price {

        .small {
            font-size: 4rem;
        }

        font-size: 2.2rem;
        border: 1px solid #000;
        padding: 2rem;
        max-width: 500px;
        border-radius: 5px;

        margin: 2rem auto;
    }
`