import React from 'react'; 
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Explore } from './pages/Explore';
import { ProductDetail } from './pages/ProductDetail';
import { CreateListing } from './pages/CreateListing';
import { Profile } from './pages/Profile';

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Landing />} />
                <Route path="login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
                <Route path="register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
                
                <Route path="explore" element={<Explore />} />
                <Route path="product/:id" element={<ProductDetail />} />

                {/* Protected Routes */}
                <Route path="dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="create" element={
                    <ProtectedRoute>
                        <CreateListing />
                    </ProtectedRoute>
                } />
                <Route path="profile" element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } />
            </Route>
        </Routes>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AuthProvider>
    );
};

export default App;