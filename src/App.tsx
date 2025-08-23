
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

  const routeConfig = [
    {
      path: PATH.ROOT,
      component: Dashboard,
      guard: AuthRoutes,
      layout: Template1
    },
    {
      path: PATH.LOGIN,
      component: Login,
      guard: GuestRoutes,
    },
    {
      path: PATH.REGISTER,
      component: Register,
      guard: GuestRoutes
    },
    {
      path: PATH.ABOUT,
      component: About,
    },
  ]
  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <Routes>
          {routeConfig.map(route => {
            const Guard = route?.guard || React.Fragment;
            const Layout = route?.layout || React.Fragment;
            const Component = route.component;
            return (
              <Route 
                key={route.path}
                path={route.path}
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                } 
              />
            )
          })}
          <Route path={PATH.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
