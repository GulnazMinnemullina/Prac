import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class App extends React.Component {
    render() {
      return (
            <div class = "wrapper">
                    <div class="container">
                    <form action="" method ="">
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
                            <div class="fields__item-two">
                                <div class = "fields__item-first"><label>
                                    Имя:
                                    <input type="text" name="name">
                                    </input>
                                </label>
                                </div>
                                <div class = "fields__item-second">
                                <label>
                                    Фамилия:
                                    <input type="text" name="surname">
                                    </input>
                                </label>
                                </div>
                            </div>
                        <div class = "fields__item">
                            <label>
                                E-mail:
                                <input type="email" name="email">
                                </input>
                            </label>
                        </div>
                        <div class = "fields__item">
                            <label>
                                Компания:
                                <input type="text" name="company">
                                </input>
                            </label>
                        </div>
                        <div class = "fields__item">
                            <label>
                                Пароль:
                                <input type="password" name="password">
                                </input>
                            </label>
                        </div>
                        <div class = "fields__item">
                            <label>
                                Подтверждение пароля:
                                <input type="password" name="password">
                                </input>
                            </label>
                        </div>
                        <div class = "fields__item">
                            <label>
                                <button type="submit" >Регистрация</button>
                            </label>
                        </div>
                    </div>
                </form>
                <div class="bottom">
                        <img src="Mail.png" alt=""></img>
                        <a href="#">Написать разработчикам</a>
                </div>
                </div>
                <footer class="footer">
                    <a >Teics 2021.</a>
                </footer>
        </div>
    );
   }
 }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  