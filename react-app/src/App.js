import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllBusinesses from './components/AllBusinesses/AllBusinesses';
import BusinessCreateForm from './components/NavBar/CreateBusinessForm';
import BusinessEditForm from './components/BusinessDetails/EditBusinessForm';
import BusinessesDetails from './components/BusinessDetails/BusinessDetails';
import CreateReviewForm from './components/Reviews/CreateReviewForm';
import BusinessCard from './components/BusinessCard';
import HomePage from './components/HomePage';
import BusinessesDetailsCopy from './components/BusinessDetails/BusinessDetailCopy';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/businesses' exact={true}>
          <AllBusinesses />
        </Route>
        <Route path='/businesses/:businessId' exact={true}>
          <BusinessesDetailsCopy />
        </Route>
        <ProtectedRoute path='/testing' exact={true}>
          <BusinessCreateForm />
        </ProtectedRoute>
        <ProtectedRoute path='/businesses/:businessid/edit' exact={true}>
          <BusinessEditForm />
        </ProtectedRoute>
        <ProtectedRoute path='/testdelete' exact={true}>
          <BusinessesDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/testingreviews' exact={true}>
          <CreateReviewForm />
        </ProtectedRoute>
        <Route path='/businesscard' exact={true}>
          <BusinessCard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
