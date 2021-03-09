import { Div, StyledLink, Img } from './styles'



const Header = (props) => {

    return (
        <Div>
            <div>
                <Img src="dolar.svg" alt=""/>
            </div>
            <div>
                <StyledLink to='/'>About Me</StyledLink>
                <StyledLink to="/">About Dolar</StyledLink>
                <StyledLink to="/">Change Currency</StyledLink>
            </div>
            
        </Div>

    )


}

export default Header;