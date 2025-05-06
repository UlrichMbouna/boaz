// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar: React.FC = () => {
    return (
        // <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        //   <h1 className="text-xl font-bold">Boaz Study</h1>
        //   <div className="space-x-4">
        //     <Link to="/" className="text-blue-500 hover:underline">Accueil</Link>
        //     <Link to="/about" className="text-blue-500 hover:underline">À propos</Link>
        //   </div>
        // </nav>
      

        <nav style={{ width: 1074, height: 79, borderRadius: '25px', border: '1px solid #D8D8D8', boxSizing: 'border-box',marginLeft:18 }} className="bg-white  p-4 flex justify-between items-center">
            <p style={{ fontSize: '32px', lineHeight: '100%', letterSpacing: '-0.11px', color: '#0140FF' }} className="text-xl font-bold">Obtenier mon A.V.I</p>
            <div className="space-x-4">
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <img src='./assets/img/office-building.svg' alt='logo' style={{ width: 24, height: 24 }} />
                        <p style={{ fontSize: 14, lineHeight: "100%", fontWeight: 400, color: "#646464" }}>Mon agence</p>
                    </div>
                    <div className='flex items-center gap-2 ml-3'>
                        <img src='./assets/img/man-438081_960_720.svg' alt='logo' style={{ width: 44, height: 44 }} />
                        <div className='flex flex-col gap-2'>
                            <p style={{ fontSize: 14, lineHeight: "100%", fontWeight: 600, color: "#646464",letterSpacing:0 }}>Moni Roy</p>
                            <p style={{ fontSize: 12, lineHeight: "100%", fontWeight: 400, color: "#646464",letterSpacing:0 }}>Admin</p>
                        </div>
                    </div>
                    <div className='ml-5 mr-5'>
                        <img src='./assets/img/More.svg' alt='logo' style={{ width: 18, height: 18 }} />
                    </div>
                </div>
            </div>
        </nav>
   
    );
};

export default Navbar;
