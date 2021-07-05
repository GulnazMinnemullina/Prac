import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class App extends React.Component {
    render() {
      return (
            <div class = "wrapper">
                    <div class="container">
                    <div class = "content">
                    <form action="" method ="">
                        <div class = "logo">
                            <div class="logo__img">
                                <img src="logo.png" alt=""></img>
                            </div>
                            <div class="dele"></div>
                            <div class = "logo__text">
                                Роботизированная разведка нефтяных месторождений
                            </div>
                        </div>
                        <div class = "fields">
                            <div class="field field-two">
                                <label>
                                    Имя:
                                    <input type="text1" name="name">
                                    </input>
                                </label>
                                <label>
                                    Фамилия:
                                    <input type="text2" name="surname">
                                    </input>
                                </label>
                            </div>
                        <div class = "field">
                            <label>
                                E-mail:
                                <input type="email" name="email">
                                </input>
                            </label>
                        </div>
                        <div class = "field">
                            <label>
                                Компания:
                                <input type="text" name="company">
                                </input>
                            </label>
                        </div>
                        <div class = "field">
                            <label>
                                Пароль:
                                <input type="password" name="password">
                                </input>
                            </label>
                        </div>
                        <div class = "field">
                            <label>
                                Подтверждение пароля:
                                <input type="password" name="password">
                                </input>
                            </label>
                        </div>
                        <div class = "field">
                            <label>
                                <input type="submit" value="Регистрация">
                                </input>
                            </label>
                        </div>
                    </div>
                </form>
                <footer class="footer">
                    <img src="Mail.png" alt=""></img>
                    <a href="#">Написать разработчикам</a>
                </footer>
                </div>
                </div>
        </div>
    );
   }
 }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  