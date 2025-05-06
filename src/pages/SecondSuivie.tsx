import React, { useState } from 'react';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import SelectedField from '../components/SelectedField';

const SecondSuivie: React.FC = () => {
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
                    <ol className="flex items-center w-full mb-8" style={{ marginLeft: 90 }}>
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
                                        {index + 4}
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

export default SecondSuivie;
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
        id: "depot_bancaire",
        label: "Dépôt Bancaire",
        description: "Choisissez cette option si vous souhaitez payer la totalité des frais.",
    },
    {
        id: "virement_bancaire",
        label: "Virement Bancaire Direct",
        description: "Choisissez cette option si vous avez souscrits à un fiancement .",
    }
];
const selectFields2 = [
    {
        id: "depot_bancaire",
        label: "Dépôt Bancaire",
        description: "Choisissez cette option si vous souhaitez payer la totalité des frais.",
    },
    {
        id: "virement_bancaire",
        label: "Virement Bancaire Direct",
        description: "Choisissez cette option si vous avez souscrits à un fiancement .",
    },
    {
        id: "mobile_money",
        label: "Mobile Money",
        description: "Effectuez un paiement via Mobile Money sur le compte Boaz Study, puis téléchargez la preuve de paiement dans l'application.",
    }
];

const StepOne = () => (

    <div>
        <h1 className="text-xl font-semibold mb-2" style={{ color: '#4379EE' }}>  Principe de paiement</h1>
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'black', textAlign: 'center' }}>  Sélectionnez votre mode de paiement</h3>

        <div className='flex items-center justify-center flex-col flex-wrap gap-4'>

            <div className="grid grid-cols-1 gap-4">
                {selectFields.map((field) => (
                    <SelectedField key={field.id} {...field} />
                ))}

            </div>
        </div>
    </div>
);

const StepTwo = () => (
    <div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#4379EE' }}>Mode de paiement</h2>
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'black', textAlign: 'center' }}>  Sélectionnez votre mode de paiement</h3>

        <div className='flex items-center justify-center flex-col flex-wrap gap-4'>

            <div className="grid grid-cols-1 gap-4">
                {selectFields2.map((field) => (
                    <SelectedField key={field.id} {...field} />
                ))}

            </div>
        </div>
    </div>
);

const StepThree = () => (
    <div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#4379EE' }}>Etablissement bancaire</h2>
        <h3 className="text-xl font-semibold mb-2 mt-5" style={{ color: 'black', textAlign: 'center' }}>  Choix de l’établissement bancaire</h3>
        <div className='flex items-center justify-center flex-col flex-wrap gap-4 mt-15' style={{marginTop: 50}}>
            <div style={{ width: '394px', height: '54px',border:'2px solid #D8D8D8',borderRadius:15 }} className=" flex items-center justify-center gap-2 border-[#D8D8D8]">
                <img src='./assets/img/asd.png' alt='logo' style={{ width: "115px", height: 45 }} />
            </div>
            <div style={{ width: '394px', height: '54px',border:'2px solid #D8D8D8',borderRadius:15 }} className=" mt-3 flex items-center justify-center gap-2 border-[#D8D8D8]">
                <img src='./assets/img/azs.png' alt='logo' style={{ width: "115px", height: 45 }} />
            </div>
        </div>
    </div>
);

