import { RouteObject } from 'react-router-dom';
import { Protected } from '../types/routes/protected';
import { AuthGuard } from '../utils/auth-guard';

export const ProtectedRoutes: Array<RouteObject> = [
  {
    path: `${Protected.ROOT_PATH}`,
    element: (
      <AuthGuard >
        <p>success auth</p>
      </AuthGuard >
    ),
    children: [
      
    ]
  }
]