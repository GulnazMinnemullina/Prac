import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Registration } from './components/registration';

  class App extends React.Component {
    render() {
      return (
            <div class = "wrapper">
                <div class="container">
                    <Registration/>
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
  