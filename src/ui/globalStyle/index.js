import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
        line-height: 1.44;
        font-family: ${({ theme }) => theme.fontFamily};
        font-size: 16px;
        color:${({ theme }) => theme.colors.primary[0]};
        background:${({ theme }) => theme.colors.background}
    }
    a {
        text-decoration: none;
        color:${({ theme }) => theme.colors.primary.c100}
    }
    ul {
        list-style: none;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
    }
`;
