
import { Route, Routes } from 'react-router';

// config
import { PATH } from './configs';

// template
import Template1 from './layouts/template1';

// pages
// import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import About from './pages/about';
import AuthRoutes from './routes/AuthRoutes';
import NotFound from './pages/not-found';
import GuestRoutes from './routes/GuestRoutes';
import React from 'react';
import Spinner from './components/atoms/spinner/Spinner';

const Login = React.lazy(() => import('./pages/login'));

// user navigate to login -> wait load resource Login -> render Loading -> finish load resource -> render UI

function App() {

  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <Routes>
          <Route 
            path={PATH.ROOT}
            element={
              <AuthRoutes>
                <Template1>
                  <Dashboard />
                </Template1>
              </AuthRoutes>
            } 
          />
          <Route 
            path={PATH.LOGIN} 
            element={
              <GuestRoutes>
                <Login />
              </GuestRoutes>
            } 
          />
          <Route 
            path={PATH.REGISTER}
            element={
              <GuestRoutes>
                <Register />
              </GuestRoutes>
            } 
          />
          <Route 
            path={PATH.REGISTER}
            element={
              <GuestRoutes>
                <Register />
              </GuestRoutes>
            } 
          />
          <Route 
            path={PATH.ABOUT}
            element={
              <About />
            } 
          />
          <Route path={PATH.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
