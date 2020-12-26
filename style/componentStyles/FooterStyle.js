import Styled from 'styled-components'

export const FooterStyle = Styled.div`

width: 100%;
position: ${(props) => (props.homeActive ? 'absolute' : 'unset')};
bottom: 0;
left: 0;

p {
    font-size: 1.3rem;
    padding-left: 10rem;
}

@media screen and (max-width: 850px) {
    position: ${(props) => (props.homeActive ? 'fixed' : 'unset')};
    width: 100%;
    display: flex;

    p {
        padding-left: 5rem;
    }
}

@media screen and (max-width: 450px) {
    p {
        padding-left: 3rem;
    }
}



`