import { Button } from '@mui/material';
import './login.css';
import {auth,provider} from '../firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function Login()
{
    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then( 
            (result) =>  {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user,
                })
                console.log(result)
            } )
            .catch( (error)=>alert(error) 
        );
    };

    return(
        <div className='login'>
            <div className='login_container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/300px-WhatsApp.svg.png' alt='WhatsAppLogo'/>
                <div className='login_text'>
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
        );
} 

export default Login;