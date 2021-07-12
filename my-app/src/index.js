import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { Registration } from './components/registration/index';
//import { PasswordRecovery } from './components/passwordRecovery/index';
import { PasswordChange } from './components/passwordChange/index';
import { Footer } from './components/footer/index';

  class App extends React.Component {
    render() {
      return (
            <div class = "wrapper">
                <div class="container">
                  <PasswordChange/>
                </div>
                  <Footer/>
            </div>
    );
   }
 }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  