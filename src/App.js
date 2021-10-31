
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './Components/AddPackage/AddPackage';
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
            <PrivateRoute path="/myBooking">
              <Mybooking></Mybooking>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path="/updateStatus/:bookedId">
              <UpdateStatus></UpdateStatus>
            </PrivateRoute>
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
