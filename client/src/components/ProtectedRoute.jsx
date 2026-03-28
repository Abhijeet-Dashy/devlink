import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Loader from "./Loader";

export default function ProtectedRoute({ children }) {
  const { token, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-50 dark:bg-slate-950">
        <Loader size="lg" text="Authenticating..." />
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  return children;
}
