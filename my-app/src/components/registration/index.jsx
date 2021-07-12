import * as React from 'react';
import { Logo } from '../logo/index';
import { isEmpty, isInvalidEmail, isInvalidString, isInvalidPassword, isInvalidPasswordConf } from '../../helpers/validation'

require("./index.css");

export const Registration = () => {

    const [name, setName]=React.useState('');
    const [surname, setSurname]=React.useState('');
    const [email, setEmail]=React.useState('');
    const [company, setCompany]=React.useState('');
    const [password, setPassword]=React.useState('');
    const [passwordConf, setPasswordConf]=React.useState('');

    const [nameDirty, setNameDirty]=React.useState(false);
    const [surnameDirty, setSurnameDirty]=React.useState(false);
    const [emailDirty, setEmailDirty]=React.useState(false);
    const [companyDirty, setCompanyDirty]=React.useState(false);
    const [passwordDirty, setPasswordDirty]=React.useState(false);
    const [passwordConfDirty, setPasswordConfDirty]=React.useState(false);

    const [globalError, setGlobalError]=React.useState('');
    
    const onClickByRegistration = () => {
        setNameDirty(isEmpty(name));
        setSurnameDirty(isEmpty(surname));
        setEmailDirty(isEmpty(email));
        setCompanyDirty(isEmpty(company));
        setPasswordDirty(isEmpty(password));
        setPasswordConfDirty(isEmpty(passwordConf));
        
        if (isInvalidString(name) || isInvalidString(surname))
        {
            setGlobalError('Имя и Фамилия могут содержать только строковые символы')
        }
        else if (isInvalidEmail(email))
        {
            setGlobalError('E-mail указан неверно');
        }
        else if (isInvalidPassword(password))
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
        <div class="form">
            <Logo/>
            <div class = "fields">
                <div class="fields__item fields__item-two">
                    <div class = "item-first">
                        <label>
                            Имя:
                            <input type="text" name="name" className = {nameDirty ? 'error': null} value={name} onChange={e=>{               
                            setName(e.target.value)}}>
                            </input>
                        </label>
                    </div>
                    <div class = "item-second">
                        <label>
                            Фамилия:
                            <input type="text" name="surname" className = {surnameDirty ? 'error': null} value={surname} onChange={e=>{                    
                                setSurname(e.target.value)}}>
                            </input>
                        </label>
                    </div>
                </div>
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
                        Компания:
                        <input type="text" name="company" value={company}  className = {companyDirty ? 'error': null} onChange={e=>{                
                            setCompany(e.target.value)}}>
                        </input>
                    </label>
                </div>
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
                        <button type="submit" onClick={onClickByRegistration}>Регистрация
                        </button>
                    </label>
                </div>
            </div>
            <div class="bottom">
                <img src="Mail.png" alt=""></img>
                <a href="#">Написать разработчикам</a>
            </div>
        </div>

        {
            globalError ? <div class = "global-error"><img src ="error.png" alt=""></img>
                {globalError} </div> : null
        }
    </>
    )
}