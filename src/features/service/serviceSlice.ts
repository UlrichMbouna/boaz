import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchServiceFromMock } from './serviceService';


interface Service {
    id: number;
    name: string;
    icone: string;
    image: string;
    category: string;
  }
  
  interface ServiceState {
    services: Service[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  }
  const initialState: ServiceState = {
    services: [],
    status: 'idle',
  };
  
  

export const getMockService = createAsyncThunk('service/getService', async () => {
  const response = await fetchServiceFromMock();
  return response;
});

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMockService.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMockService.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.services = action.payload;
       

      })
      .addCase(getMockService.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default serviceSlice.reducer;
