import http from "../app/http-common";

const GenerateNewAccessCode =(data)=>{
    return http.post("/client/newAccessCode",data)
}
const getAllAgence =()=>{
    return http.get("/agence/all")
}
const addEtudiant =(data)=>{
    console.log("Etudiant")
    console.log(data)
    return http.post("/etudiant/add",data)
}
const addMarocainResident=(data)=>{
    console.log("MarocainResident")
    console.log(data)
    return http.post("/marocainresident/add",data)
}
const getClientByEmail=(email)=>{
    return http.get(`/client/email/${email}`)
}

const ClientServices={
    GenerateNewAccessCode,
    getAllAgence,
    addEtudiant,
    addMarocainResident,
    getClientByEmail
}
export default ClientServices