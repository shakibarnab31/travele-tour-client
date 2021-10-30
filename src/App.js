
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BookingPackage from './Components/BookingPackage/BookingPackage';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageAllBookings from './Components/MangeAllBookings/ManageAllBookings';
import Mybooking from './Components/MyBooking/Mybooking';

import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateStatus from './Components/UpdateStatus/UpdateStatus';

import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <BookingPackage></BookingPackage>
            </PrivateRoute>
            <Route path="/myBooking">
              <Mybooking></Mybooking>
            </Route>
            <Route path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </Route>
            <Route path="/updateStatus/:bookedId">
              <UpdateStatus></UpdateStatus>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
