import React from 'react';

const Sidebar: React.FC = () => {       
    return (
        <aside className="sidebar flex mr-6" style={{ borderRadius: 25, justifyContent: 'space-between' }} >
            <div>
                <div className='flex justify-center'>
                    <img src='./assets/img/BOAZ  studyy 1.svg' alt='logo' style={{ width: "107,58px", height: 44 }} />
                </div>
                <div style={{ marginTop: 75, marginBottom: 20 }}>
                    <div style={{ background: '#F5F6FA', width: '211px' }} className='flex items-center gap-2 p-3 rounded-lg'>
                        <img src='./assets/img/home.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                        <p style={{ color: '#0140FF', fontWeight: 600 }}> Accuiel</p>
                    </div>
                </div>
                <div style={{ borderTop: '2px solid #D8D8D8', width: '211px', borderBottom: '2px solid #D8D8D8' }} className='flex items-center gap-2 p-3 '>
                    <img src='./assets/img/office-building.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                    <p style={{ color: '#646464', fontWeight: 600 }} className='mt-1'> Mon agence</p>
                    <img src='./assets/img/chevron-down.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                </div>
                <div style={{ width: '211px', borderBottom: '2px solid #D8D8D8' }} className='flex items-center gap-2 p-3 '>
                    <img src='./assets/img/view-grid-add.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                    <p style={{ color: '#646464', fontWeight: 600 }} className='mt-1'> Service</p>
                    {/* <img src='./assets/img/chevron-down.svg' alt='logo' style={{ width: "20px", height: "20px" }} /> */}
                </div>
                <div className="w-[211px]">
                    {/* Contrôleur du dropdown */}
                    <input type="checkbox" id="toggle-sub" className="peer hidden" />

                    {/* Titre du menu (cliquable) */}
                    <label htmlFor="toggle-sub"
                        className="flex items-center gap-2 p-3 border-b-2 border-[#D8D8D8] cursor-pointer">
                        <img src="./assets/img/collection.svg" alt="logo" className="w-5 h-5" />
                        <p className="text-[#0140FF] font-semibold mt-1">Mes suscriptions</p>
                        <img src="./assets/img/chevron-up.svg" alt="logo" className="w-5 h-5 transition-transform duration-200 peer-checked:rotate-180" />
                    </label>

                    {/* Contenu déroulant */}
                    <div className="hidden peer-checked:block">
                        <div className="flex items-center gap-2 p-3 border-b-2 border-[#D8D8D8]">
                            <p className="text-[#646464] font-semibold mt-1">Services</p>
                        </div>
                        <div className="flex items-center gap-2 p-3 border-b-2 border-[#D8D8D8]">
                            <p className="text-[#646464] font-semibold mt-1">Financement</p>
                        </div>
                        <div className="flex items-center gap-2 p-3 border-b-2 border-[#D8D8D8]">
                            <p className="text-[#646464] font-semibold mt-1">Remboursements</p>
                        </div>
                    </div>
                </div>

                <div style={{ width: '211px', borderBottom: '2px solid #D8D8D8' }} className='flex items-center gap-2 p-3 '>
                    <img src='./assets/img/Group 3615.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                    <p style={{ color: '#646464', fontWeight: 600, whiteSpace: 'nowrap' }} className='mt-1'> Preuves de versement</p>
                    {/* <img src='./assets/img/chevron-down.svg' alt='logo' style={{ width: "20px", height: "20px" }} /> */}
                </div>
                <div className="w-[211px]">
                    {/* Contrôleur du dropdown */}
                    <input type="checkbox" id="toggle-wallet" className="peer hidden" />

                    {/* Titre cliquable */}
                    <label htmlFor="toggle-wallet"
                        className="flex items-center gap-2 p-3 border-b-2 border-[#D8D8D8] cursor-pointer">
                        <img src="./assets/img/currency-euro.svg" alt="logo" className="w-5 h-5" />
                        <p className="text-[#646464] font-semibold mt-1 whitespace-nowrap">Mon Wallet Boaz</p>
                        <img src="./assets/img/chevron-down.svg" alt="chevron" className="w-5 h-5 transition-transform duration-200 peer-checked:rotate-180" />
                    </label>

                    {/* Contenu déroulant */}
                    <div className="hidden peer-checked:block">
                        <div className="flex items-center gap-2 p-3 border-b-2 border-[#D8D8D8]">
                            <p className="text-[#646464] font-semibold mt-1">Mes historiques</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '211px', borderBottom: '2px solid #D8D8D8' }} className='flex items-center gap-2 p-3 '>
                    <img src='./assets/img/user-group.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                    <p style={{ color: '#646464', fontWeight: 600, whiteSpace: 'nowrap' }} className='mt-1'> Programme d'affiliation</p>
                    {/* <img src='./assets/img/chevron-down.svg' alt='logo' style={{ width: "20px", height: "20px" }} /> */}
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <div className="flex items-center justify-center my-4">
                    <span className="flex-grow border-t border-gray-400"></span>
                    <span className="mx-4 text-gray-600 font-semibold text-sm">GENERAL</span>
                    <span className="flex-grow border-t border-gray-400"></span>
                </div>

                <div style={{ width: '211px', justifyContent: 'center' }} className='flex items-center gap-2 p-3 '>
                    <img src='./assets/img/template.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                    <p style={{ color: '#646464', fontWeight: 600, whiteSpace: 'nowrap' }} className='mt-1'> Tableau de bord</p>
                    {/* <img src='./assets/img/chevron-down.svg' alt='logo' style={{ width: "20px", height: "20px" }} /> */}
                </div>
                <div style={{ width: '211px', justifyContent: 'center' }} className='flex items-center gap-2 p-3 '>
                    <img src='./assets/img/cog.svg' alt='logo' style={{ width: "20px", height: "20px" }} />
                    <p style={{ color: '#0140FF', fontWeight: 600, whiteSpace: 'nowrap' }} className='mt-1'>Paramètres</p>
                    {/* <img src='./assets/img/chevron-down.svg' alt='logo' style={{ width: "20px", height: "20px" }} /> */}
                </div>
            </div>


        </aside>
    );
};

export default Sidebar;