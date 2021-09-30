import {Router, Switch,Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Home from './Home/Home';
import { Template } from './Template/Template';


export const history = createBrowserHistory();

function App() {
  return (
    
    <Router history = {history} >
      <Template path="/" exact Component={Home} />
      
    </Router>
  );
}

export default App;
