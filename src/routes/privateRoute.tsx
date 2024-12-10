import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem("email");
    return isAuthenticated ? <Outlet /> : <Navigate to="/AT-Desenvolvimento-Web-com-React/signin" replace />;
};

export default PrivateRoute;
