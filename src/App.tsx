// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;









// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from './app/store';
// import { getMockUser } from './features/user/userSlice';

// function App() {
//   const user = useSelector((state: RootState) => state.user);
//   const dispatch: AppDispatch = useDispatch();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Bonjour {user.name || '...'}</h1>
//       <p>Email: {user.email}</p>
//       <p>Rôle: {user.role}</p>

//       <button
//         onClick={() => dispatch(getMockUser())}
//         className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
//       >
//         Charger depuis les mocks
//       </button>

//       {user.status === 'loading' && <p>Chargement...</p>}
//     </div>
//   );
// }

// export default App;
