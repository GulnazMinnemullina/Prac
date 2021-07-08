import * as React from 'react';
export const Registration = () => {

    const [name, setName]=React.useState('');
    const [surname, setSurname]=React.useState('');
    const [email, setEmail]=React.useState('');
    const [company, setCompany]=React.useState('');
    const [password, setPassword]=React.useState('');
    const [password_conf, setPassword_conf]=React.useState('');

    const [nameDirty, setNameDirty]=React.useState(false);
    const [surnameDirty, setSurnameDirty]=React.useState(false);
    const [emailDirty, setEmailDirty]=React.useState(false);
    const [companyDirty, setCompanyDirty]=React.useState(false);
    const [passwordDirty, setPasswordDirty]=React.useState(false);
    const [password_confDirty, setPassword_confDirty]=React.useState(false);

    const [globalError, setGlobalError]=React.useState('');

    const onClickByRegistration = () => {
        console.log('onClick');
        setNameDirty(name === '');
        setSurnameDirty(surname === '');
        setEmailDirty(email === '');
        setCompanyDirty(company === '');
        setPasswordDirty(password === '');
        setPassword_confDirty(password_conf === '');
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase()))
            {setGlobalError('E-mail указан неверно')}
        else if (password.length < 3 || password.length > 8)
            {setGlobalError('Пароль должен состоять из 3-8 символов')}
        else if (password!==password_conf)
            {setGlobalError('Пароли не совпадают')}
        else {setGlobalError('')}
    }
    
    return (
        <>
    <div class="form">
        <div class = "logo">
            <div class="logo__img">
                <img src="logo.png" alt=""></img>
            </div>
            <div class="divisor"></div>
            <div class = "logo__text">
                Роботизированная разведка нефтяных месторождений
            </div>
        </div>
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
                        setEmail(e.target.value)
                        }}>
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
                        setPassword(e.target.value)
                        }}>
                    </input>
                </label>
            </div>
            <div class = "fields__item">
                <label>
                    Подтверждение пароля:
                    <input type="password" name="password_conf" value={password_conf} className = {password_confDirty ? 'error': null} onChange={e=>{                
                        setPassword_conf(e.target.value)
                        }}>
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
        globalError ? <div class = "globalError"><img src ="error.png" alt=""></img>
            {globalError} </div> : null
    }
</>
    )
}