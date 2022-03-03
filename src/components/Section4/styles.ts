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

`

export const BoxGrid = styled.div`

    margin-top: 2rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media(max-width: 900px) {
        grid-template-columns: 1fr;
    }

    div {
        background-color: var(--gray-300);
        padding: 2rem;
        border-radius: 5px;
        font-size: 1.2rem;
    }

`