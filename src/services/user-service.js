import { myAxios } from "./helper";


export const signUp=(user) =>{

  return myAxios.post("/api/doctors").then((Response)=> Response.json())
}