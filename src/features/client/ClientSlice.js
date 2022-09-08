import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import ClientServices from "../../services/ClientServices";

export const GenerateNewAccessCode=createAsyncThunk(
    "client/GenerateNewAccessCode",
    async ({email,sendMail}) => {
        const response = await ClientServices.GenerateNewAccessCode({email,sendMail});
        return response.data
    }
)
export const getAllAgence = createAsyncThunk(
    "client/getAllAgence",
    async () => {
        const response = await ClientServices.getAllAgence();
        return response.data;
    }
);
export const addEtudiant = createAsyncThunk(
    "client/addEtudiant",
    async ({email,prenom,nom,dateNaissance,telephone,cin,adresse,codePostale,ecole,agence,pack,cinRectoURL,cinVersoURL,selfieURL}) => {
        const response = await ClientServices.addEtudiant({email,prenom,nom,dateNaissance,telephone,cin,adresse,codePostale,ecole,agence,pack,cinRectoURL,cinVersoURL,selfieURL});
        return response.data;
    }
)
export const addMarocainResident = createAsyncThunk(
    "client/addMarocainResident",
    async ({email,prenom,nom,dateNaissance,telephone,cin,adresse,codePostale,profession,agence,pack,cinRectoURL,cinVersoURL,selfieURL}) => {
        const response = await ClientServices.addMarocainResident({email,prenom,nom,dateNaissance,telephone,cin,adresse,codePostale,profession,agence,pack,cinRectoURL,cinVersoURL,selfieURL});
        return response.data;
    }
)
export const getClientByEmail = createAsyncThunk(
    "client/getClientByEmail",
    async (email) => {
        const response = await ClientServices.getClientByEmail(email);
        return response.data;
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