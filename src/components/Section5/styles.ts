import styled from 'styled-components'

export const Container = styled.section`
    padding: 2rem 0;
`

export const Content = styled.div`

    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    width: 90%;

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.6rem;
        margin: 2rem 0;
    }

`

export const BoxGrid = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    
    div {

        strong {
            font-size: 1.4rem;
        }

        background-color: var(--gray-300);
        padding: 2rem;
        border-radius: 5px;
        font-size: 1.2rem;
    }

`