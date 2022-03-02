import styled from 'styled-components'

export const Container = styled.section`
    background-image: url('images/img-section1.png');
`

export const Content = styled.div`
    display: flex;
    aling-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 0;

    gap: 2rem;

`

export const Texts = styled.div`


    h1 {
        font-size: 3rem;
        
        color: #fff;

        margin-top: 2rem;

        @media(max-width: 500px) {
            font-size: 2rem;
        }
    }

    h2 {
        color: rgb(255, 255, 255, 0.9);
        max-width: 500px;

        @media(max-width: 1000px) {
            margin: 1rem auto 0;
        }

        @media(max-width: 500px) {
            font-size: 1.2rem;
        }
    }

    button {
        margin-top: 1.4rem;
    }

    p {
        color: rgb(255, 255, 255, 0.9);
        margin-top: 1.2rem;
        font-size: 1.6rem;
    }
    
`