import { RouteObject } from 'react-router-dom';
import { Protected } from '../types/routes/protected';
import { Loader } from '../ui/molecules/loader.tsx';
import { AuthGuard } from '../utils/auth-guard';

export const ProtectedRoutes: Array<RouteObject> = [
  {
    path: `${Protected.ROOT_PATH}`,
    element: (
      <AuthGuard >
        <Loader />
      </AuthGuard >
    ),
    children: [

    ]
  }
]