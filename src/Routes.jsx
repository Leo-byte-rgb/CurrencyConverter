import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home'

function Routes() {
    return (
            <BrowserRouter>
                <Header />
                
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                          
                        </Route>

                    </Switch>               
            </BrowserRouter>
    )
}

export default Routes;