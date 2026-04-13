// AuthPage.jsx
import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
 
const AuthPage = () => {
    const [view, setView] = useState("login");
 
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">
 
                <div className="flex justify-center mb-6">
                    <img
                        src="/src/assets/img/kinal_sports.png"
                        alt="Kinal Sport"
                        className="h-20 w-auto"
                    />
                </div>
 
                <div className="text-center mb-6">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {view === "forgot"
                            ? "Recuperar contraseña"
                            : view === "login"
                                ? "Bienvenido de nuevo"
                                : "Crear una cuenta"
                        }
                    </h1>
 
                    <p className="text-gray-600 text-base max-w-md mx-auto">
                        {view === "forgot"
                            ? "Ingresa tu correo electrónico para restablecer tu contraseña"
                            : view === "login"
                                ? "Ingresa a tu cuenta de administrador de Kinal Sport"
                                : "Regístrate como administrador de Kinal Sport"
                        }
                    </p>
                </div>
 
                {view === "forgot" ? (
                    <ForgotPasswordForm onSwitch={() => setView("login")} />
                ) : (
                    <LoginForm onSwitch={() => setView("forgot")} />
                )}
            </div>
        </div>
    );
};
 
export default AuthPage;