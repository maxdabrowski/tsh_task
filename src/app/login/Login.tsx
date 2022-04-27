import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLogin } from './useLogin';
import Loader from 'shared/components/Loader/Loader';
import './Login.css';

export const Login:React.FC = () => {

  const { username, password, errorValue, dataLoading, loginHandle, loginSubmitHandle } = useLogin();

  return (
    <div className='login'>
      <div className='login_img'></div>
      <div className="login_container">  
        <div className="login_tittle"><Link to={AppRoute.Home}>join.tsh.io</Link></div>
        <div className="login_form">
          <p className='login_head'>Login</p> 
          <form>
            <div >
              <label className="login_label">Username</label>
              <input className="login_input" type="tekst" name="username" placeholder="Enter username" value={username} onChange={loginHandle} />
            </div>
            <div>
              <label className="login_label">Password</label>
              <input className="login_input" type="password" name="password" placeholder="Enter password" value={password} onChange={loginHandle} /> 
            </div>  
            <button className="primmary_button login_button" onClick={loginSubmitHandle}>{dataLoading?<Loader/>:'Log in' }</button>
          </form>
          <p className="login_error">{errorValue}</p>      
        </div>
      </div>
    </div>
  );
};
