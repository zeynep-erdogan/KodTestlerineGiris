import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './components/login';

function App() {
  

  return (
    <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <h1>Main Page</h1>
          </Route>
          <Route exact path="/error">
          <h1>Error Page</h1>
          </Route>
        </Switch>
  )
}

export default App
