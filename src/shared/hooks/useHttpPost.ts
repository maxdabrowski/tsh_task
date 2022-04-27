import { useState } from "react";

export const useHttpPost = () => {

  const [data,setData] = useState<any>(null);
  const [status,setStatus] = useState<number>(0);
  const [error,setError] = useState<boolean>(false)
  const [loading,setLoading] = useState<boolean>(false)

  const httpPost = (endpoint:string, body:any) => {
    (
      async () => {
        try{
          setLoading(true)
          await fetch(`https://join-tsh-api-staging.herokuapp.com/${endpoint}`,
            { method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
            })
            .then(res => {
              setStatus(res.status) 
              return res})
            .then( res => res.json())
            .then( res => {setData(res)})
            .catch(()=>{console.log('wystapił błąd')})
        }catch(err){
          setError(true)
        }finally{
          setLoading(false)
        }
      }
    )()
  }
  return { data, status, error, loading, httpPost }
}