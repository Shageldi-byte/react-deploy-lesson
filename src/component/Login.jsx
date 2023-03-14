import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducers/userReducer";

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(login({ name: "Shageldi", age: 22, email: "some@gmail.com" }))
            }}>Login</button>
            <button onClick={() => {
                dispatch(logout())
            }}>Logout</button>
        </div>
    )
}

export default Login