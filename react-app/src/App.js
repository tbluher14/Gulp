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
import CreateReviewForm from './components/Reviews/CreateReviewForm';
import BusinessCard from './components/BusinessCard';
import HomePage from './components/HomePage';
import BusinessesDetails from './components/BusinessDetails/BusinessDetail';
import EditReviewForm from './components/Reviews/EditReviewForm';
import QueriedBusiness from './components/QueriedBusiness/QueriedBusiness';
import MenuItemsPage from './components/MenuItemsPage';
import CreateMenuItemForm from './components/MenuItemsPage/CreateMenuItem'
//
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
        <Route path='/users' exact={true} >
          <UsersList/>
        </Route>
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
          <BusinessesDetails />
        </Route>
        <Route path='/businesses/menu/:businessId' exact={true}>
          <MenuItemsPage />
        </Route>
        <Route path='/businesses/menu/:businessId/add' exact={true}>
          <CreateMenuItemForm />
        </Route>
        <ProtectedRoute path='/create-business-form' exact={true}>
          <BusinessCreateForm />
        </ProtectedRoute>
        <ProtectedRoute path='/businesses/:businessId/edit' exact={true}>
          <BusinessEditForm />
        </ProtectedRoute>
        <ProtectedRoute path='/reviews/:businessId' exact={true}>
          <CreateReviewForm />
        </ProtectedRoute>
        <Route path='/businesscard' exact={true}>
          <BusinessCard />
        </Route>
        <Route path='/reviews/:reviewId/:businessId/edit'>
          <EditReviewForm />
        </Route>
        <Route path='/search'>
          <QueriedBusiness />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
