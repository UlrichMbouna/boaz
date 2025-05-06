import React from 'react';

interface CardParcoursProps {
    num: string | number;
    title: string;
    couleur: string;
}

const CardParcours: React.FC<CardParcoursProps> = ({ num, title, couleur }) => {
    return (
        <div className='flex align-center justify-center m-4 '>
            {/* '#999999' */}
            <p style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #0140FF', color: '#0140FF' }} className='flex items-center justify-center'> {num}</p>
            <div className='w-4 h-1' style={{ border: '2px solid #0140FF', marginTop: 17 }}></div>
            <div style={{ width: 429, height: 40, borderRadius: '7px', color: '#0140FF', border: '2px solid #0140FF' }} className='flex items-center justify-between'>
                <p className='ml-3' style={{ fontWeight:500,fontFamily: 'roboto', fontSize: 14, color: couleur }}>{title}</p>
                <div className='flex items-center gap-2'>
                    <p style={{ border: '1px solid #646464', padding: " 1px 20px", color: "#646464", borderRadius: 8,whiteSpace:'nowrap',cursor:'pointer' }}> Aller à l’étape</p>
                    <img src='./assets/img/Group 237614.svg' alt='logo' style={{ width: 40, height: 36 }} />
                </div>
            </div>
        </div>
    );
};

export default CardParcours;