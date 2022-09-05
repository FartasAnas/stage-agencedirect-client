import http from "../app/http-common";

const GenerateNewAccessCode =(data)=>{
    return http.post("/client/newAccessCode",data)
}

const ClientServices={
    GenerateNewAccessCode,
}
export default ClientServices