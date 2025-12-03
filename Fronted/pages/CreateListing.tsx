import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CreateListing = () => {
    const navigate = useNavigate();
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulation
        alert("¡Producto publicado con éxito! (Simulado)");
        navigate('/dashboard');
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-black text-gray-900">Publicar un Nuevo Producto</h1>
                <p className="mt-2 text-gray-500">Completa los detalles para añadir tu artículo.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Details Section */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Detalles del Producto</h2>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Nombre del producto</label>
                            <div className="mt-1">
                                <input type="text" name="title" id="title" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-lg p-2.5 border" placeholder="Ej: Cafetera Eléctrica" required />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
                            <div className="mt-1">
                                <select id="category" name="category" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-lg p-2.5 border">
                                    <option>Electrónica</option>
                                    <option>Hogar</option>
                                    <option>Ropa</option>
                                    <option>Deportes</option>
                                    <option>Otros</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción detallada</label>
                            <div className="mt-1">
                                <textarea id="description" name="description" rows={4} className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-lg p-2.5 border" placeholder="Describe el estado, antigüedad, etc."></textarea>
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700">¿Qué buscas a cambio? (Opcional)</label>
                            <div className="mt-1">
                                <input type="text" name="lookingFor" id="lookingFor" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-lg p-2.5 border" placeholder="Ej: Herramientas, Libros..." />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Upload */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Sube una imagen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:bg-gray-50 transition-colors cursor-pointer relative">
                            <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600 justify-center">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none">
                                        <span>Sube un archivo</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG hasta 5MB</p>
                            </div>
                        </div>

                        <div className="relative border rounded-xl bg-gray-50 h-48 flex items-center justify-center overflow-hidden">
                             {preview ? (
                                 <>
                                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                    <button type="button" onClick={() => setPreview(null)} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70">
                                        <X size={16} />
                                    </button>
                                 </>
                             ) : (
                                 <span className="text-gray-400 text-sm">Vista Previa</span>
                             )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => navigate('/dashboard')} className="bg-white py-3 px-6 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                        Cancelar
                    </button>
                    <button type="submit" className="bg-primary-500 py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        Publicar Producto
                    </button>
                </div>
            </form>
        </div>
    );
};