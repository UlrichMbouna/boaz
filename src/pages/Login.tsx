// Login.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectError, selectIsLoading, selectUser } from '../features/user/userSlice'; // Importer les sélecteurs et actions
import { AppDispatch } from '../app/store';
import { useNavigate } from 'react-router-dom';
// import { AppDispatch } from '../store'; // Importer le type AppDispatch

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();  // Typage du dispatch
    const user = useSelector(selectUser);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    // Créer les états pour chaque champ du formulaire
    const [formData, setFormData] = useState<Record<'email' | 'password', string>>({
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Met à jour la valeur du champ spécifique
        }));
    };
    const navigate=useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(loginUser(formData)).then(
            (result) => {
                if (result.meta.requestStatus === 'fulfilled') {
                    // Rediriger vers la page d'accueil après une connexion réussie
                    navigate('/home');
                }
            }
        );  // Dispatch avec le bon type
    };

    const loginFields = [
        {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "Votre email",
            required: true,
        },
        {
            id: "password",
            label: "Mot de passe",
            type: "password",
            placeholder: "Votre mot de passe",
            required: true,
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center' style={{ width: 1074, height: 820, borderRadius: 25, border: '1px solid #D8D8D8', boxSizing: 'border-box', background: 'white' }}>
            <p className='pt-5 pl-4' style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.11px', color: '#0140FF' }}>Se connecter </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-10 w-[500px] mx-auto">
                <div className="mb-10">
                    {loginFields.map((field) => (
                        <div key={field.id} className="mb-5">
                            <InputField
                                {...field}
                                value={formData[field.id as 'email' | 'password']} // Lier chaque champ à son état
                                onChange={handleChange} // Gérer le changement de valeur
                            />
                        </div>
                    ))}
                </div>

                {/* Bouton de connexion */}
                <button
                    style={{ width: 150 }}
                    type="submit"
                    className="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                    disabled={isLoading}
                >
                    {isLoading ? 'Chargement...' : 'Se connecter'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user && <p>Bienvenue {user.name} !</p>}
        </div>
    );
};

export default Login;

interface InputFieldProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ id, label, type = "text", placeholder, required = false, value, onChange }: InputFieldProps) => {
    return (
        <div className="w-[393px] h-[52px] m-2">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-red-500 dark:text-white" style={{color:'#5E6366', fontSize:12, fontWeight:400}}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}  // Utiliser 'name' pour correspondre avec FormData et pour associer au state
                placeholder={placeholder}
                required={required}
                value={value}  // Lier la valeur à l'état du formulaire
                onChange={onChange}  // Mettre à jour l'état lors de la saisie
                className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </div>
    );
};
