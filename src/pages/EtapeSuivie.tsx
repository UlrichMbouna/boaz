import React, { useState } from 'react';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';

const EtapeSuivie: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { title: 'Étape 1', component: <StepOne /> },
        { title: 'Étape 2', component: <StepTwo /> },
        { title: 'Étape 3', component: <StepThree /> }
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };
    return (
        <div className="flex justify-center items-center  bg-gray-100">
            <div className="w-[1074px] h-[820px] rounded-[25px] border border-[#D8D8D8] bg-white p-10 box-border">
                <div className="w-[800px] mx-auto">
                    {/* Barre de progression */}
                    <ol className="flex items-center w-full mb-8">
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                className={`flex w-full items-center 
              after:content-[''] after:w-full after:h-1 after:inline-block 
              ${index < steps.length - 1 ? 'after:border-b after:border-4' : ''} 
              ${index < currentStep
                                        ? 'text-blue-600 after:border-blue-100 dark:text-blue-500 dark:after:border-blue-800'
                                        : 'after:border-gray-100 dark:after:border-gray-700'
                                    }`}
                            >
                                <span
                                    className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 
                ${index <= currentStep ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-700'}
              `}
                                >
                                    <span className={`${index <= currentStep ? 'text-blue-600 dark:text-blue-300' : 'text-gray-500 dark:text-gray-100'}`}>
                                        {index + 1}
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ol>

                    {/* Composant dynamique */}
                    <div className="mb-6">
                        {steps[currentStep].component}
                    </div>

                    {/* Boutons */}
                    <div className="relative min-h-[200px]"> {/* Parent avec hauteur minimale et position relative */}
                        {/* Autres éléments ici */}

                        {/* Boutons toujours en bas */}
                        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 pb-4">
                            <button
                                style={{ width: 110, height: 32 }}
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 disabled:opacity-50 flex items-center justify-center"
                            >
                                Retour
                            </button>

                            <button
                                style={{ width: 110, height: 32 }}
                                onClick={handleNext}
                                disabled={currentStep === steps.length - 1}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
                            >
                                Suivant
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EtapeSuivie;
const fields = [
    { id: "nom", label: "Nom", placeholder: "Moni", required: true },
    { id: "prenom", label: "Prénom", placeholder: "Roy", required: true },
    { id: "email", label: "Email", placeholder: "wonloy22@mail.com", type: "email", required: true },
    { id: "telephone", label: "Numéro de téléphone", placeholder: "telephone", type: "tel", required: true },
    { id: "passport", label: "Numéro de passeport", placeholder: "Numéro de passeport", required: true },
    { id: "date_delivrance", label: "Date de délivrance du passeport", type: "date", required: true },
    { id: "date_expiration", label: "Date d'expiration du passeport", type: "date", required: true },
];
const fields2 = [
    {
      id: "etablissement",
      label: "Nom de l'établissement d'accueil",
      placeholder: "Université de Douala",
      required: true,
    },
    {
      id: "titre_formation",
      label: "Titre de la formation",
      placeholder: "Master en génie logiciel",
      required: true,
    },
    {
      id: "ville",
      label: "Ville",
      placeholder: "Douala",
      required: true,
    },
    {
      id: "date_debut",
      label: "Date de début de la formation",
      type: "date",
      required: true,
    },
  ];
  const selectFields = [
    {
      id: "annee_scolaire",
      label: "Année scolaire",
      options: ["2023/2024", "2024/2025", "2025/2026"],
      required: true,
    },
    {
      id: "renouvellement",
      label: "Est-ce un renouvellement ?",
      options: ["Oui", "Non"],
      required: true,
    },
    {
      id: "montant_par_mois",
      label: "Montant à recevoir par mois en euro",
      options: ["600€", "700€", "800€", "900€", "1000€"],
      required: true,
    },
    {
      id: "motif_voyage",
      label: "Je vais en France pour",
      options: ["Études", "Stage", "Formation", "Recherche"],
      required: true,
    },
    {
      id: "devise_pays",
      label: "Devise de votre pays d'origine",
      options: ["FCFA", "USD", "GNF", "XOF"],
      required: true,
    },
    {
      id: "acs_assurance",
      label: "ACS Assurance France",
      options: ["Oui", "Non"],
      required: true,
    },
    {
      id: "duree_avi",
      label: "Durée de l'AVI",
      options: ["6 mois", "9 mois", "12 mois"],
      required: true,
    },
  ];
const StepOne = () => (

    <div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#4379EE' }}>Informations Personnelles</h2>
        <div className='flex items-center justify-center flex-col flex-wrap gap-4'>

            <div className="grid grid-cols-2 gap-4">
                {fields.map((field) => (
                    <InputField key={field.id} {...field} />
                ))}

                {/* Champ fichier séparé */}
                <div className="w-[393px] h-[56px] m-2">
                    <label htmlFor="scan_passeport" style={{ color: '#5E6366', fontSize: 12, fontWeight: 400 }} className="block mb-2 text-sm font-medium text-red-500 dark:text-white">
                        Scan du passeport
                    </label>
                    <input
                        type="file"
                        id="scan_passeport"
                        accept="image/*,application/pdf"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                </div>

            </div>
        </div>
    </div>
);

const StepTwo = () => (
    <div>
    <h2 className="text-xl font-semibold mb-2" style={{ color: '#4379EE' }}>Détails de la formation</h2>
    <div className='flex items-center justify-center flex-col flex-wrap gap-4'>

        <div className="grid grid-cols-2 gap-4">
            {fields2.map((field) => (
                <InputField key={field.id} {...field} />
            ))}

            {/* Champ fichier séparé */}
            <div className="w-[393px] h-[56px] m-2">
                <label htmlFor="scan_passeport" style={{ color: '#5E6366', fontSize: 12, fontWeight: 400 }} className="block mb-2 text-sm font-medium text-red-500 dark:text-white">
                    Scan du passeport
                </label>
                <input
                    type="file"
                    id="scan_passeport"
                    accept="image/*,application/pdf"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                />
            </div>

        </div>
    </div>
</div>
);

const StepThree = () => (
    <div>
    <h2 className="text-xl font-semibold mb-2" style={{ color: '#4379EE' }}>Informations Personnelles</h2>
    <div className='flex items-center justify-center flex-col flex-wrap gap-4'>

        <div className="grid grid-cols-2 gap-4">
            {selectFields.map((field) => (
                <SelectField key={field.id} {...field} />
            ))}

           

        </div>
    </div>
</div>
);

