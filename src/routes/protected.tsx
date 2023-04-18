import { RouteObject } from 'react-router-dom';
import { Protected } from '../types/routes/protected';
import { DefaultPage } from '../ui/molecules/default';
import { AuthGuard } from '../utils/auth-guard';

export const ProtectedRoutes: Array<RouteObject> = [
  {
    path: `${Protected.ROOT_PATH}`,
    element: (
      <AuthGuard >
        <DefaultPage />
      </AuthGuard >
    ),
    children: [

    ]
  }
]