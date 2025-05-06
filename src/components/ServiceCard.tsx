import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
    name: string;
    icone: string;
    image: string;
    category: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ name, icone, image }) => {
    const navigate = useNavigate();
    const handleNaviagte=() => {
        navigate('/parcours-suivie');
    }
    return (
        <div onClick={handleNaviagte} style={{ position: 'relative', width: 344, height: 270, border: '1px solid #D8D8D8', borderRadius: 25, boxSizing: 'border-box' }} className='flex flex-col items-center justify-center cursor-pointer'>
            <img src={image} alt='logo' style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 25, filter: 'brightness(0.5)',  }} />
            <div style={{ position: 'absolute', top: 70 }}>
                <div className='flex flex-col items-center gap-2'>
                    <img src={icone} alt='logo' style={{ width: 24, height: 24 }} />
                    <p style={{ textAlign:'center', fontSize: 24, lineHeight: '100%', fontWeight: 600, letterSpacing: 0, color: 'white' }}>{name}</p>
                </div>

            </div>
            <div style={{ height: 70, background: '#F88206', width: '100%', position: 'absolute', bottom: 0, left: 0, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.11px', textAlign: 'center', color: '#FFFFFF' }}> souscrire</p>
            </div>
        </div>
    );
};

export default ServiceCard;