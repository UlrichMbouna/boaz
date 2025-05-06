import { mockUser } from '../../services/mock/user.mock';

// export const fetchUserFromMock = (): Promise<typeof mockUser> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockUser);
//     }, 700); // délai simulé
//   });
// };

// Exemple de fonction pour récupérer un utilisateur via des données mock
export const fetchUserFromMock = async (email: string, password: string) => {
  // Simule des utilisateurs mock
  const usersMock = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'admin',
      token: 'fake-token-1234',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'user',
      token: 'fake-token-5678',
    },
  ];

  // Recherche d'un utilisateur correspondant aux identifiants
  const user = usersMock.find((user) => user.email === email && user.token === password);

  if (!user) {
    throw new Error('Email ou mot de passe incorrect');
  }

  return user;  // Retourne l'utilisateur trouvé
};
