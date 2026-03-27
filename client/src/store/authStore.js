import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  loading: true,

  initialize: () => {
    const token = get().token;
    if (token) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          set({ user: JSON.parse(storedUser) });
        } catch (e) {
          console.error("Failed to parse stored user", e);
        }
      }
    }
    set({ loading: false });
  },

  login: async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        set({ token: data.data.accessToken, user: data.data.user });
        localStorage.setItem('token', data.data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        return { success: true };
      } else {
        return { success: false, error: data.message || "Login failed" };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: "Network error" };
    }
  },

  register: async (email, password, username) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        return { success: true };
      } else {
        return { success: false, error: data.message || "Registration failed" };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: "Network error" };
    }
  },

  logout: (navigate) => {
    set({ token: null, user: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    if (navigate) {
      navigate('/login');
    } else {
      window.location.href = '/login';
    }
  },

  authFetch: async (url, options = {}) => {
    const { token, logout } = get();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, { ...options, headers });
    if (response.status === 401) {
      logout();
    }
    return response;
  }
}));
