import styled from 'styled-components'



const Container = styled.div`

    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

`

const ContentContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    
    input {
        margin: 1rem;
    }

`
const Img = styled.img`
    width: 400px;

`

const Input = styled.input`
    outline: none;
    border: 1px var(--blue-dark) solid;
    height: 35px;
    border-radius: 5px;
    text-align: center;
    padding: 1rem;


    &:disabled {
        background-color: var(--white);
    }
`


export { Container, ContentContainer, Img, Input}