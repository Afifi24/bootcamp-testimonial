import {createGlobalStyle} from 'styled-components'


export const Globalstyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
:root{
    --Dark-Blue: hsl(240, 38%, 20%);
    --Grayish-Blue: hsl(240, 18%, 77%);
    --size:32px;
    --container-width-lg:80%;
    --container-width-md:90%;
}
body{
    font-family: 'Inter', sans-serif;

}

`