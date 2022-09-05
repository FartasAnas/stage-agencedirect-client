import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import ClientServices from "../../services/ClientServices";

export const GenerateNewAccessCode=createAsyncThunk(
    "client/GenerateNewAccessCode",
    async ({email,sendMail}) => {
        const response = await ClientServices.GenerateNewAccessCode({email,sendMail});
        return response.data
    }
)

export const ClientSlice=createSlice({
    name:'client',
    initialState:{},
    extraReducers:{
        [GenerateNewAccessCode.fulfilled]:(state,action)=>{
            state.push=action.payload;
        },
    }
})
export default ClientSlice.reducer;