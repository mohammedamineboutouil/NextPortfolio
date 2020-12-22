import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { black, white, detailColor2, shadow1, shadow2 } = Colors

export const HeaderStyle = Styled.div`

*:active, *:focus {
  outline: none;
}

z-index: 200;
position: absolute;
width: 100%;
padding-top: 3rem;
top: 0;
left: 0;
display: flex;
transition: 0.3s ease all;

.logo-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;
    cursor: pointer;


    .title {
        text-transform: uppercase;
        font-weight: 700;
        padding: 0;
        margin: 0;
        color: ${black};
  }

    .profession {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.2rem;
        color: ${black};

        .line-break {
            display: none;
        }
  }
}

.nav-section {
  width: 50%;
  height: 100%;
  display: flex;
  padding-right: 10rem;
  align-items: center;
  justify-content: flex-end;

    button {
        width: 5rem;
        background: transparent;
        border-style: none;
        margin-right: 2rem;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 600;

        h4{
            position: relative;
            padding: 0;
            margin: 0;
            font-size: 1.6rem;
            transition: .3s ease all;
        }

        h4:after {
            content: '';
            width: 0;
            height: 0;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left:50%;
            opacity: 0;
            transform: translate(-50%,-50%);
            transition: .3s ease all;
        }

        :hover h4:after {
            width: 4rem;
            height: 4rem;
            border: 2px solid ${detailColor2};
            opacity: 1;
        }

        :hover h4 {
            font-size: 1.75rem;
        }
    }

    .burger-menu {
        width: 3rem;
        height: 3rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-bottom: 1rem;
        cursor: pointer;

        .line {
            width: 80%;
            height: .6rem;
            margin-top: .4rem;
            background: ${black};
            border-radius: 0.25rem;
            transition: .3s ease all;
        }
        .line2 {
            width: 50%;
        }

        .line1x {
            transform: rotate(-45deg) translate(-5%,100%);
            
        }
        .line2x {
            width: 80%;
            transform: rotate(45deg) translate(-5%,-100%);
        }

    }
}

//------------------------------------------------------------------------------------------------------ media queries

@media screen and (max-width: 450px) {
    .logo-section {
        padding-left: 5rem;

        .profession {

            .line-break {
                display: inline;
            
            }
        }
    }
    
    .nav-section {
        padding-right: 5rem;

        button {
            margin-right: 1rem;
        }
    }
}

@media screen and (max-width: 350px) {
    .logo-section {
        padding-left: 2rem;
    }
    
    .nav-section {
        padding-right: 2rem;
    }
}

`
