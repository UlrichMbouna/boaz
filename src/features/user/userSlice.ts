// authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserFromMock } from './authService'; // Import de la fonction fetchUserFromMock

// Interface pour l'utilisateur
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  token: string;
}

// Interface pour l'état d'authentification
interface AuthState {
  user: User | null;
  error: string | null;
  isLoading: boolean;
}

// État initial
const initialState: AuthState = {
  user: null,
  error: null,
  isLoading: false,
};

// Action asynchrone pour la connexion utilisateur
export const loginUser = createAsyncThunk(
  'auth/loginUser',  // Type de l'action
  async (credentials: { email: string; password: string }) => {
    const user = await fetchUserFromMock(credentials.email, credentials.password);
    return user;  // Retourne l'utilisateur authentifié
  }
);

// Création du slice d'authentification
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cas de l'action en cours (pendante)
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Cas de l'action réussie
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      // Cas de l'action échouée
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Erreur lors de la connexion';
      });
  },
});

// Sélecteurs pour accéder à l'état
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading;
export const selectError = (state: { auth: AuthState }) => state.auth.error;

// Réducteur exporté
export default authSlice.reducer;
