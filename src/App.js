import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import newUser from './components/newUser';
import newDoctor from './components/newDoctor';
import existingUser from './components/existingUser';
import existingDoctor from './components/existingDoctor';
import Login from './components/Login'; 
import Change from './components/changePassword'; 
import Reset from './components/resetLink';
// import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import history from './components/helpers/history';
function App() {
  return (
    <div className="App">
       <BrowserRouter history={history}>
     <ReactNotification />
        <Switch>
          <Route path="/" exact component={existingUser}></Route>
          <Route path="/newUser" exact component={newUser}></Route>
          <Route path="/newDoctor" exact component={newDoctor}></Route>
          {/* <Route path="/existingUser" exact component={existingUser}></Route> */}
          <Route path="/existingDoctor" exact component={existingDoctor}></Route>
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/reset" exact component={Reset}></Route>
          <Route path="/reset/:token" component={Change}></Route>
          
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
