import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon, PlusCircle, Search, Menu, X, LayoutDashboard } from 'lucide-react';

export const Layout = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isActive = (path: string) => location.pathname === path ? "text-primary-600 font-bold" : "text-gray-600 hover:text-primary-500";

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 10h10" />
                                        <path d="M10 7l-3 3 3 3" />
                                        <path d="M14 13l3-3-3-3" />
                                    </svg>
                                </div>
                                <span className="font-bold text-xl tracking-tight text-gray-900">TruequePlus</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/explore" className={isActive('/explore')}>Explorar</Link>
                            
                            {isAuthenticated ? (
                                <>
                                    <Link to="/dashboard" className={isActive('/dashboard')}>Panel</Link>
                                    <Link to="/create" className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                        <PlusCircle size={18} /> Publicar
                                    </Link>
                                    <div className="relative group">
                                        <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
                                            <img src={user?.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                                        </Link>
                                    </div>
                                    <button onClick={handleLogout} className="text-gray-500 hover:text-red-500" title="Cerrar Sesión">
                                        <LogOut size={20} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="text-gray-600 hover:text-primary-600 font-medium">Iniciar Sesión</Link>
                                    <Link to="/register" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                        Registrarse
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/explore" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Explorar</Link>
                            {isAuthenticated ? (
                                <>
                                    <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Mi Panel</Link>
                                    <Link to="/create" className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-primary-50">Publicar Producto</Link>
                                    <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Mi Perfil</Link>
                                    <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50">Cerrar Sesión</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Iniciar Sesión</Link>
                                    <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-primary-50">Registrarse</Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                             <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 10h10" />
                                    <path d="M10 7l-3 3 3 3" />
                                    <path d="M14 13l3-3-3-3" />
                                </svg>
                            </div>
                            <span className="text-gray-500 text-sm">© 2024 TruequePlus. Todos los derechos reservados.</span>
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-500">
                            <a href="#" className="hover:text-primary-600">Sobre Nosotros</a>
                            <a href="#" className="hover:text-primary-600">Reglas</a>
                            <a href="#" className="hover:text-primary-600">Privacidad</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};