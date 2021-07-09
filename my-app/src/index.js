import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Registration } from './components/registration';
import { Footer } from './components/footer';

  class App extends React.Component {
    render() {
      return (
            <div class = "wrapper">
                <div class="container">
                  <Registration/>
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
  