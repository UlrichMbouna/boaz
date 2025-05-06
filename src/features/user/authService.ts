// authService.ts

import { usersMock } from "../../services";


// Fonction pour simuler la récupération d'un utilisateur à partir de données mock
export const fetchUserFromMock = async (email: string, password: string) => {
  // Simule la recherche d'un utilisateur
  const user = usersMock.find(
    (user) => user.email === email && user.token === password
  );

  // Si aucun utilisateur n'est trouvé, on lance une erreur
  if (!user) {
    throw new Error('Email ou mot de passe incorrect');
  }

  // Retourne l'utilisateur trouvé
  return user;
};
