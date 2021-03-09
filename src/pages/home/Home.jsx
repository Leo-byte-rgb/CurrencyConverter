import React, {useState, useEffect} from 'react'
import { DolarContext } from '../../Contexts/DolarContext'
import { Container, ContentContainer, Img, Input } from './styles'

function App() {
  const {value} = React.useContext(DolarContext)
  const [brl, setBrl] = useState(1)
  const [dolar, setDolar] = useState(value)

  
  useEffect(() => {
    setDolar(brl * value)
    // eslint-disable-next-line
  }, [brl])
  return (
    <Container>
            <Img src="undraw_wallet.svg" />
            <ContentContainer>
              
            </ContentContainer>
            <ContentContainer>
              <label>R$</label>
              <Input type="number" value={brl} onChange={e => Number(setBrl(e.target.value))}/>
              <label>$</label>
              <Input  type="number" value={Number(dolar).toFixed(2)} disabled="disabled"/>
            </ContentContainer>
    </Container>
    
  );
}

export default App;
