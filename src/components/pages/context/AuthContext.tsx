import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../../firebase";

type UserType = "driver" | "owner" | null;

type AuthContextType = {
  user: User | null;
  userType: UserType;
  loading: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  userType: null,
  loading: true,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      // Получаем тип из localStorage (или из БД)
      const storedType = localStorage.getItem("userType") as UserType;
      setUserType(storedType);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setUserType(null);
        localStorage.removeItem("userType");
      })
      .catch((error) => {
        console.error("Ошибка выхода:", error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, userType, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
