import styled from 'styled-components'

export const Container = styled.section`
    background-image: url('images/img-section1.png');

    .video-area-desktop {
        padding-top: 2rem;
        height: 400px;
        max-width: 650px;
        width: 90%;
        margin: 0 auto;

        @media(max-width: 1000px) {
            display: none;
        }

        @media(max-width: 425px) {
            height: 250px;
        }

        @media(max-width: 375px) {
            height: 230px;
        }
    }

    .video-area-mobile {
        padding-top: 2rem;
        height: 400px;
        max-width: 650px;
        width: 90%;
        margin: 0 auto;

        @media(min-width: 1000px) {
            display: none;
        }

        @media(max-width: 425px) {
            height: 250px;
        }

        @media(max-width: 375px) {
            height: 230px;
        }
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 0 1rem;

    gap: 2rem;

    @media(max-width: 1000px) {
        text-align: center;

        display: flex;
    }

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {

        @media(max-width: 1000px) {
            margin-top: 3rem;
        }

        @media(max-width: 600px) {
            width: 400px;
        }

        @media(max-width: 375px) {
            width: 280px;
        }
    }

`

export const Texts = styled.div`


    h1 {
        font-size: 3rem;
        
        color: #fff;

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

export const Video = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex: 1;

    text-align: center;

    max-width: 800px;
    margin: 0 auto;

    padding-bottom: 2rem;
`