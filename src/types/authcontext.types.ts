import { Dispatch } from "react";

type loginUser = (email: string, password: string) => void
type signUpUser = (name: string, email: string, password: string) => void
export type AuthContextType = {
    token: "",
    setToken: Dispatch<any>,
    user: "",
    setUser: Dispatch<any>,
    loginUser: loginUser;
    signUpUser: signUpUser;
    userInfo: { name: string, email: string },
    setUserInfo: Dispatch<any>
}