import { Navbar } from "./Navbar.jsx";
import { Sidebar } from "./Sidebar.jsx";
 
export const DashboardContainer = ({ children }) => {
    return (
        /* bg-gray-100 (o gray-50) para que sea gris y cubra todo el alto */
        <div className="min-h-screen bg-gray-100 flex flex-col">
           
            {/* Navbar */}
            <Navbar />
 
            <div className="flex flex-1">
               
                {/* Sidebar */}
                <Sidebar />
 
                {/* Área de contenido: Sin bordes, sin sombras, fondo gris uniforme */}
                <main className="flex-1 bg-gray-100">
                    <div className="p-8 h-full">
                       
                        {children || (
                            <>
                                <h1 className="text-2xl font-bold text-gray-700 mb-4">
                                    Dashboard
                                </h1>
                                <div className="text-gray-500">
                                    Contenido del menú
                                </div>
                            </>
                        )}
 
                    </div>
                </main>
 
            </div>
        </div>
    );
};