// src/routes/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import _ from 'lodash';

const requireAuth = (userNameKey) => {
  const user = JSON.parse(localStorage.getItem(userNameKey));
  return user?.isUserLoggedIn;
};

const ProtectedRoute = ({ userNameKey }) => {
  const location = useLocation();

  const isAuthenticated =
    _.get(location.state, 'userName') &&
    requireAuth(location.state.userName);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
