// importing components
import Home from "./Components/Home";
import LoginSignup from "./Components/LoginSignup";
import UserState from "./State/User/UserState"
import Loading from "./State/LoadingBar/Loading";
import { Toaster } from 'react-hot-toast';
import Otp from "./Components/Otp";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainApp from "./Components/MainApp";
import BankDetails from "./Components/Bank Details/BankDetails";
import UserBankState from "./State/User Bank Details/UserBankState";
import UserCardState from "./State/User Card Details/UserCardState";
import CardDetails from "./Components/CardDetails/CardDetails";
import Settings from "./Components/User Settings/Settings";
import ForgotPassword from "./Components/Forgot Password/ForgotPassword";
import PasswordResetOtp from "./Components/Forgot Password/PasswordResetOtp";
import LightDarkMode from "./Components/LightDarkMode";

function App() {

  return (
    <>
      <Toaster />
      <UserState>
        <LightDarkMode />
        <Router>
          <Switch>
            <Loading>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/login-signup">
                <LoginSignup></LoginSignup>
              </Route>
              <Route exact path="/otp-verify">
                <Otp></Otp>
              </Route>

              <Route exact path="/main-app/:id">
                <Navbar />
                <MainApp />
              </Route>

              <Route exact path={'/bankdetails/:id'}>
                <Navbar />
                <UserBankState>
                  <BankDetails />
                </UserBankState>
              </Route>
              <Route exact path={'/card-details/:id'}>
                <Navbar />
                <UserCardState>
                  <CardDetails />
                </UserCardState>
              </Route>
              <Route exact path={'/settings/:id'}>
                <Navbar />
                <Settings />
              </Route>
              <Route exact path={'/forgot-password'}>
                <ForgotPassword />
              </Route>
              <Route exact path={'/otp-passwordreset/:id'}>
                <PasswordResetOtp />
              </Route>
            </Loading>
          </Switch>
        </Router>

      </UserState>
    </>
  );
}

export default App;
