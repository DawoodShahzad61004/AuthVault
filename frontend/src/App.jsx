import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';

// Pages
import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import Admin from './pages/Admin';
import About from './pages/About';
import Documentation from './pages/Documentation';

// Components
// import ProtectedRoute from './components/ProtectedRoute';
// import AdminRoute from './components/AdminRoute';

const App = () => {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />

          {/* Protected Routes */}
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}

          {/* Admin Route */}
          {/* <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          /> */}

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
          {/* <Route path="*" element={<Navigate to="/about" replace />} /> */}
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
};

export default App;
