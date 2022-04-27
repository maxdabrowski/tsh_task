import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { LOGIN_USER, LOGOUT_USER } from "store/user";
import { useHttpPost } from "shared/hooks/useHttpPost";

export interface User{
  login: string,
  password: string,
}

export const useLogin = () => { 

  const dispatch = useDispatch();
  let history = useHistory();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorValue, setErrorValue] = useState<string>('');
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const {data, status, loading, httpPost} = useHttpPost();

  useEffect(() => {
   if(data !== null){
      if(status === 201){
        dispatch({type: LOGIN_USER, payload:data});
        history.push("/");
      }else if(status === 404 || status === 401) {
        setErrorValue(data.message);
      }else if(status === 400) {
        setErrorValue(data.message[0]);
      }else{
        setErrorValue('Login error')
      }
   }
  }, [data]);

  useEffect(() => { 
    setDataLoading(loading);
  }, [loading]);
 
  const loginHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.getAttribute('name');
      if(name === 'username'){
        setUsername(e.target.value);
      }else if(name === 'password'){
        setPassword(e.target.value);
      }
  }

  const loginSubmitHandle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    httpPost('users/login', {username : username ,password : password})
  }

  const logoutHandle = (e: React.MouseEvent<HTMLElement>) => {
    dispatch({type: LOGOUT_USER});
    history.push("/login");
  }

  return { username, password, errorValue, dataLoading, loginHandle, loginSubmitHandle, logoutHandle } ;

}