import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { getMockService } from '../features/service/serviceSlice';
import ServiceCard from '../components/ServiceCard';
// import { useKeycloak } from '@react-keycloak/web';
const Home: React.FC = () => {
    // const { keycloak } = useKeycloak();
    const dispatch = useDispatch<AppDispatch>();
    const serviceState = useSelector((state: RootState) => state.service);
    console.log(serviceState);

    useEffect(() => {
        dispatch(getMockService());
    }, []);
    return (
        <div style={{ width: 1074, height: 820, borderRadius: 25, border: '1px solid #D8D8D8', boxSizing: 'border-box', background: 'white' }}>
            <p className='pt-5 pl-4' style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.11px', color: '#0140FF' }}>Les services Boaz </p>
           
            <div className='flex align-center justify-center gap-5'>

                <div style={{ width: 710, height: 600}} className='flex flex-wrap gap-5 mt-20'>


                    <div className="grid grid-cols-2 gap-6">
                        {serviceState.services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                name={service.name}
                                icone={service.icone}
                                image={service.image}
                                category={service.category}
                            />
                        ))}

                    </div>


                </div>
            </div>


        </div>
    );
};

export default Home;