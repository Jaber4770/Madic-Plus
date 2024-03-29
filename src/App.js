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
import AuthProvider from './Components/ContextApi/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path='/emergency'>
            <Emergency></Emergency>
          </Route>
          <PrivateRoute path='/services'>
            <Services></Services>
          </PrivateRoute>
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
    </AuthProvider>
  );
}

export default App;
