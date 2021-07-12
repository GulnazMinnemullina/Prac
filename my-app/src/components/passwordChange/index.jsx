import * as React from 'react';
import { Logo } from '../logo/index';
import { isEmpty, isInvalidPassword, isInvalidPasswordConf } from '../../helpers/validation'
require("./index.css");

export const PasswordChange = () => {

    const [password, setPassword]=React.useState('');
    const [passwordConf, setPasswordConf]=React.useState('');

    const [passwordDirty, setPasswordDirty]=React.useState(false);
    const [passwordConfDirty, setPasswordConfDirty]=React.useState(false);

    const [globalError, setGlobalError]=React.useState('');
    

    const onClickByPasswordChange = () => {
        setPasswordDirty(isEmpty(password));
        setPasswordConfDirty(isEmpty(passwordConf));

        if (isInvalidPassword(password))
        {
            setGlobalError('Пароль должен состоять из 3-8 символов');
        }
        else if (isInvalidPasswordConf(password, passwordConf))
        {
            setGlobalError('Пароли не совпадают');
        }
    } 

    return (
    <>
    <div class ="form">
            <Logo/>
            <p>Введите новый пароль</p>
            <div class = "fields">
                <div class = "fields__item">
                    <label>
                        Пароль:
                        <input type="password" name="password" value={password} className = {passwordDirty ? 'error': null} onChange={e=>{                 
                            setPassword(e.target.value)}}>
                        </input>
                    </label>
                </div>
                <div class = "fields__item">
                    <label>
                        Подтверждение пароля:
                        <input type="password" name="passwordConf" value={passwordConf} className = {passwordConfDirty ? 'error': null} onChange={e=>{                
                            setPasswordConf(e.target.value)}}>
                        </input>
                    </label>
                </div>
                <div class = "fields__item">
                    <label>
                        <button type="submit" onClick={onClickByPasswordChange}>Отправить
                        </button>
                    </label>
                </div>
            </div>
    </div>
    
    {
        globalError ? <div class = "global-error"><img src ="error.png" alt=""></img>
            {globalError} </div> : null
    }
    </>
    )      
}