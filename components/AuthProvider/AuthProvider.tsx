"use client";
import { checkServerSession, getUser } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((s) => s.setUser);
  const clearIsAuthenticated = useAuthStore((s) => s.clearIsAuthenticated);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchUser = async () => {
      try {
        const session = await checkServerSession();
        if (!mounted) return;
        if (session.success) {
          const user = await getUser();
          if (user) setUser(user);
        } else {
          clearIsAuthenticated();
        }
      } catch (err) {
        console.warn("AuthProvider check error", err);
      } finally {
        if (mounted) setChecking(false);
      }
    };
    fetchUser();
    return () => {
      mounted = false;
    };
  }, [setUser, clearIsAuthenticated]);

  return <>{children}</>;
};
export default AuthProvider;
