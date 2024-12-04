import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../../api"

const InitialState = {
    userData : null,
    isLoading: false ,
    isSuccess: false, 
    isError: false, 

} 

// login 
 
export const login = createAsyncThunk('login',async (params,thunkApi) =>{
    console.log(" file: AuthSlice.js:12 login params:",params);
    try{
        const response = await API.post('/auth/login',params);
        console.log(" file: AuthSlice.js:16 login response:",response);
        return response.data;
    }
    catch (error){
        console.log(" file: AuthSlice.js:16 login error:",error);
        const errorDetails = {
            message: error?.response?.data?.message || 'An error occurred',
            status: error?.response?.status || 500,
        };

        return thunkApi.rejectWithValue(errorDetails);
    }
} );


// logout
export const logout = createAsyncThunk("logout", async () => {
    return {};
});

const AuthSlice = createSlice({
    name: 'authSlice',
    initialState: InitialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending,(state) =>{
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.userData = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            const errorMessage = action.payload?.response?.data?.message || 'Login failed';
            state.userData = null;
            state.errorMessage = errorMessage; 
        });

         // Handle logout
         builder.addCase(logout.fulfilled, (state) => {
            // Reset state upon logout
            state.userData = null;
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = null; // Clear any previous error messages
        });
        
        
    }
});

export default AuthSlice.reducer;