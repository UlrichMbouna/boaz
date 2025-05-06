import React from 'react';
import CardParcours from '../components/CardParcours';
import { useNavigate } from 'react-router-dom';

const ParcourSuivie: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{ width: 1074, height: 820, borderRadius: 25, border: '1px solid #D8D8D8', boxSizing: 'border-box', background: 'white' }} className='flex flex-col items-center justify-center'>
            <p className='pt-5 pl-4' style={{ textAlign: 'center', fontSize: '24px', fontWeight: 400, letterSpacing: '-0.11px', color: '#000000' }}>Parcours à suivre </p>
            <div style={{ position: 'relative' }}>
                <CardParcours num='01' title='Informations Personnelles' couleur='#99999' />
                <CardParcours num='02' title='Détails de la Formation' couleur='#999999' />
                <CardParcours num='03' title='Informations Financièreset Autres ' couleur='#999999' />
                <CardParcours num='04' title='Principe de paiement' couleur='#999999' />
                <CardParcours num='05' title='Mode de paiement' couleur='#999999' />
                <CardParcours num='06' title='Etablissement bancaire' couleur='#999999' />
                <CardParcours num='07' title='Coordonnées bancaires' couleur='#999999' />
                <CardParcours num='08' title='Proforma' couleur='#999999' />
                <CardParcours num='09' title='Mon contrat' couleur='#999999' />
                <CardParcours num='10' title='Dépot de preuve' couleur='#999999' />
                <div className='flex items-center justify-center gap-2 mt-5'>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 flex items-center gap-2">
                        <span style={{ fontSize: 20, fontFamily: 'inter', fontWeight: 500 }}>
                            Télécharger un résumé
                        </span>
                        <img src="./assets/img/Group 2.svg" alt="logo" style={{ width: 20, height: 15 }} />
                    </button>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 91, left: 1300, right: 0, marginBottom: 25, width: 205 }} className='flex items-center justify-center gap-2 mt-5'>

                <button
                    onClick={() => navigate('/etape-suivie')}
                    style={{
                        borderRadius: '10px',
                        width: 205,
                        height: 32,
                    }}
                    className="bg-blue-500 text-white hover:bg-blue-600 flex justify-center items-center gap-2"
                >
                    <span style={{ fontSize: 12, fontFamily: 'Inter', fontWeight: 600 }}>
                        Commencer
                    </span>
                </button>


            </div>

        </div>




    );
};

export default ParcourSuivie;