import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Div = styled.div`

    height: 60px;
    

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: var(--green);

`
const StyledLink = styled(Link)`
    font-size: 1rem;
    margin-right: 1rem;
    font-weight: 700;
`
const Img = styled.img`
    margin-left: 1rem;
    width: 2.5rem;

`

export { Div, StyledLink, Img }