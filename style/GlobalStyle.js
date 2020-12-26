import { createGlobalStyle } from 'styled-components'
import { Colors } from './designSpecs'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    list-style: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
    ${(props) => (props.overlay ? 'overflow: hidden;' : null)}
}

html {
    font-size: 62.5%;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: ${Colors.white};
}

@media screen and (min-width: 1800px) {
    html {
        font-size: 70%;
    }
}


@media screen and (max-width: 1300px) {
    
    html {
        font-size: 59%;
    }
}

@media screen and (max-width: 850px) {
    
    html {
        font-size: 55%;
    }
}

@media screen and (max-width: 450px) {
    
    html {
        font-size: 50%;
    }
}
`

export default GlobalStyle