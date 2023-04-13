import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { user } from '../features/user';
import { CommonRoutes } from '../types/routes/common';

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const currentUser = useAppSelector(user);

  return currentUser ? <>{children} </> : <Navigate to={`${CommonRoutes.LOG_IN}`} />
}

AuthGuard.displayName = 'AuthGuard';