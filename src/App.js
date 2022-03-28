import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import Emergency from './Components/Emergency/Emergency';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/emergency'>
            <Emergency></Emergency>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
