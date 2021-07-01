import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class App extends React.Component {
    render() {
      return (
        <div className="app">
            <div class = "wrapper">
                <div class = "content">
                <form action="" method ="">
                    <div class = "logo">
                        <div class="img">
                            <img src="img/image.png" alt=""></img>
                        </div>
                        <div class = "text">
                            <p>Роботизированная разведка нефтяных месторождений</p>
                        </div>
                    </div>
                    <div class = "fields">
                        <label>
                            Имя:
                            <input type="text" name="name">
                            </input>
                        </label>
                
                        <label>
                            Фамилия:
                            <input type="text" name="surname">
                            </input>
                        </label>
                    
                        <label>
                            Компания:
                            <input type="text" name="company">
                            </input>
                        </label>
                    
                        <label>
                            E-mail:
                            <input type="email" name="email">
                            </input>
                        </label>
                  
                        <label>
                            Пароль:
                            <input type="password" name="password">
                            </input>
                        </label>
                        <label>
                            Подтверждение пароля:
                            <input type="password" name="password">
                            </input>
                        </label>
                    </div>
                </form>
                </div>
                <footer class="footer">
                    <input type="submit" value="Регистрация">
                    </input>
                    <a href="#">Написать разработчикам</a>
                </footer>
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
  