import { RouteObject } from 'react-router-dom';
import { CommonRoutes } from '../types/routes/common';
import { Login } from '../ui/molecules/auth/Login';
import { SignUp } from '../ui/molecules/auth/Sign-Up';

export const CommonRouter: Array<RouteObject> = [
  {
    path: `${CommonRoutes.LOG_IN}`,
    element: (<Login />)
  },
  {
    path: `${CommonRoutes.SIGN_UP}`,
    element: <SignUp />
  }

];
