import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    const [textNa, setTextNa] = useState('')
    const [textSur, setTextSur] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [password, setPassword] = useState('')
    
    const [textNaDirty, setTextNaDirty] = useState(false)
    const [textSurDirty, setTextSurDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [textDirty, setTextDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [textNaError, setTextNaError] = useState('Заполните поле Имя')
    const [textSurError, setTextSurError] = useState('Заполните поле Фамилия')
    const [emailError, setEmailError] = useState('Заполните поле E-mail')
    const [textError, setTextError] = useState('Заполните поле Компания')
    const [passwordError, setPasswordError] = useState('Заполните поле Пароль')

    return (
        <div classname = 'app'>
            <form>
                {(textNaDirty && textNaError)}
                <input type="textNa" name="name"></input>
                <input type="textSur" name="surname"></input>
                <input type="email" name="email"></input>
                <input type="text" name="company"></input>
                <input type="password" name="password"></input>
                <button type="submit" value="Регистрация"></button>
            </form>
        </div>
        
    )
}

export default App;