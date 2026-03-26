import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex text-center justify-center items-center">Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  return children;
}
