import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../views/Home';
import Settings from '../views/Settings';
import DashBoard from '../views/Dashboard';
import PainelEstatistico from '../views/PainelEstatistico';
import NotFound from '../views/NotFound';
import SignIn from '../views/SingIn';
import SignUp from '../views/SignUp';
import Form from '../views/Form';
import PrivateRoute from './privateRoute';

const router = createBrowserRouter([
  {
    path: '/AT-Desenvolvimento-Web-com-React/signin',
    element: <SignIn />,
  },
  {
    path: '/AT-Desenvolvimento-Web-com-React/signup',
    element: <SignUp />,
  },
  {
    element: <PrivateRoute />,
    children: [
      { path: '/AT-Desenvolvimento-Web-com-React/', element: <Home /> },
      { path: '/AT-Desenvolvimento-Web-com-React/settings', element: <Settings /> },
      { path: '/AT-Desenvolvimento-Web-com-React/dashboard', element: <DashBoard /> },
      { path: '/AT-Desenvolvimento-Web-com-React/painel-estatico', element: <PainelEstatistico /> },
      { path: '/AT-Desenvolvimento-Web-com-React/form', element: <Form /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
