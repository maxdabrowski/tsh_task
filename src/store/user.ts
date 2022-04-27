export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

interface User {
  access_token: string;
  expiresIn:string;
  user: {avatar: string, id:number, username:string}
}

const initialState = {
  auth: false,
  user:'',
  avatar:'',
  accessToken:''
}

export default (state = initialState, action:{type:string, payload:User}) => {

  switch(action.type){

    case LOGIN_USER: {
      const NewUserName = action.payload.user.username;
      console.log(NewUserName);
      return{
        ...state,
        auth:true,
        user: action.payload.user.username,
        avatar: action.payload.user.avatar,
        accessToken: action.payload.access_token,
      }
    };

    case LOGOUT_USER: {
      return{
        ...state,
        auth:false,
        user: '',
        avatar: '',
        accessToken:''
      }
    }

    default: {
      console.warn(`Unknow action ${action.type}`)
      return{...state};
    }

  }

}