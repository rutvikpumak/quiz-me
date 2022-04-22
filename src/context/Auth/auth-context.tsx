import { createContext, useContext, useEffect, useState } from "react";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../services/auth-service";
import { AuthContextType } from "../../types/authcontext.types";
import { toast } from "react-toastify";
import { collection, db, getDocs, query, where } from "../../firebase";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const localStorageToken = localStorage.getItem("token");
  const [token, setToken] = useState(localStorageToken);
  const localStorageUser = localStorage.getItem("user");
  const [user, setUser] = useState(localStorageUser);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  useEffect(() => {
    if (token && user) {
      (async () => {
        const q = query(collection(db, "users"), where("uid", "==", user));
        const querySnapshot1 = await getDocs(q);
        querySnapshot1.forEach((doc) => {
          const userObj: any = doc.data();
          setUserInfo(userObj);
        });
      })();
    }
  }, [token, user]);

  const loginUser = async (email: string, password: string) => {
    if (email && password !== "") {
      try {
        const authRes = await logInWithEmailAndPassword(email, password);
        const user: any = authRes?.user;
        if (user) {
          localStorage.setItem("token", JSON.stringify(user.accessToken));
          localStorage.setItem("user", JSON.stringify(user.uid));
          setToken(user.accessToken);
          setUser(user.uid);
          toast.success(`Logged In Successfully!`);
        }
      } catch (error: any) {
        const msg = error.message
          .match(/\/(\S+)[)]./i)[1]
          .replace(/-/g, " ")
          .toUpperCase();
        toast.error(`${msg} !`);
        console.log(error.message);
      }
    }
  };

  const signUpUser = async (name: string, email: string, password: string) => {
    try {
      const authRes = await registerWithEmailAndPassword(name, email, password);
      const user: any = authRes?.user;
      if (user) {
        localStorage.setItem("token", JSON.stringify(user.accessToken));
        localStorage.setItem("user", JSON.stringify(user.uid));
        setToken(user.accessToken);
        setUser(user.uid);
        toast.success(`Account Created Successfully!`);
      }
    } catch (error: any) {
      const msg = error.message
        .match(/\/(\S+)[)]./i)[1]
        .replace(/-/g, " ")
        .toUpperCase();
      toast.error(`${msg} !`);
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, loginUser, signUpUser, userInfo, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
