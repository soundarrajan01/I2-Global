import { Navigate, Outlet } from "react-router"

export const AuthPrivateRoute=()=>{
    return localStorage.getItem('userDetails') ? <Navigate to={'dashboard'}/>:<Outlet/>
}
export const DashboardPrivateRoute=()=>{
    return !localStorage.getItem('userDetails') ? <Navigate to={'/'}/>:<Outlet/>
}