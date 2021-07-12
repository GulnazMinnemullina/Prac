import * as React from 'react';
import { Logo } from '../logo/index';
import { isEmpty, isInvalidEmail } from '../../helpers/validation';
require("./index.css");

export const PasswordRecovery = () => {

    const [email, setEmail]=React.useState('');
    const [emailDirty, setEmailDirty]=React.useState(false);
    const [globalError, setGlobalError]=React.useState('');
    
    const onClickByPasswordRecovery = () => {
        setEmailDirty(isEmpty(email));

        if (isInvalidEmail(email))
        {
            setGlobalError('E-mail указан неверно');
        }
    } 

    return (
    <>
    <div class ="form">
        <Logo/>
        <p>Восстановление пароля</p>
        <div class = "fields__item">
            <label>
                E-mail:
                <input type="email" name="email" value={email}  className = {emailDirty ? 'error': null} onChange={e=>{
                    setEmail(e.target.value)}}>
                </input>
            </label>
        </div>
        <div class = "fields__item">
            <label>
                <button type="submit" onClick={onClickByPasswordRecovery}>Отправить
                </button>
            </label>
        </div>
    </div>
    
    {
        globalError ? <div class = "global-error"><img src ="error.png" alt=""></img>
            {globalError} </div> : null
    }
    </>
    )      
}