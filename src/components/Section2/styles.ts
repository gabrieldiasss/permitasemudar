import styled from 'styled-components'

export const Container = styled.section`
    margin-top: -10rem;
`

export const Content = styled.div`

    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    width: 90%;

    b {
        color: #fff;
        font-size: 1.6rem;
    }

    .video-area {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        
        max-width: 640px;
        height: 360px;

        @media(max-width: 425px) {
            height: 200px;
        }
    }

    h1 {
        margin-top: 2rem;

        font-size: 2.2rem;

        strong {
        color: var(--pink-500);
    }
    }

    p {
        font-size: 1.8rem;
        margin-top: 2rem;
    }

`