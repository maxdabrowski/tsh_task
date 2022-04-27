import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import './Header.css';
import { IoSearchSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import avatar from 'assets/Avatar.png'
import { useLogin } from 'app/login/useLogin';

interface Props{
  searchParam:string;
  active:boolean;
  promo:boolean;
  inputsHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header:React.FC<Props> = (props) => {

  const user = useSelector((state:any) => state.user);
  const { logoutHandle } = useLogin();

  return (
    <>
      <div className='header_products'>
        <div className='header_tittle'>
          <p >join.tsh.io</p>
        </div>
        <div className='header_form'>
          <div>
            <input className='header_input' type='tekst' placeholder='Search' value={props.searchParam} onChange={props.inputsHandle}/>
            <span className='header_input_icon'><IoSearchSharp/></span>
          </div>
          <div className='header_form_checkbox_section'>
          <div className='header_form_checkbox'>
            <input type="checkbox" id="active" name="active" checked={props.active} onChange={props.inputsHandle}/>
            <label htmlFor="horns">Active</label>
          </div>
          <div className='header_form_checkbox'>
            <input type="checkbox" id="promo" name="promo" checked={props.promo}  onChange={props.inputsHandle}/>
            <label htmlFor="horns">Promo</label>
          </div>
          </div>
        </div>
        <div className='header_login'>
          { user.auth?
            <div className='dropdown'>
              <span><img className='avatar' src={avatar}/></span>
              <div className='dropdown-content'>
                <p onClick={logoutHandle} className='dropdown-logout'>Logout</p>
              </div>
            </div>
            :
            <Link to={AppRoute.Login}> <button  className='secondary_button'> Log in </button> </Link>        
          }
        </div>

    </div>
    </>
  );
};
