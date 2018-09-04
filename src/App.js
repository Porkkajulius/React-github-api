import React, { Component } from 'react';
import './App.css';
import Github from './components/github';
import { Alert } from 'reactstrap';
class App extends Component {


    render() {
        return (
         <div className="App">
            <header className="App-header">
                 <h1 className="App-title">Welcome to Github app</h1>
            </header>
            <Github/>

        </div>

        );
      }
     
}

export default App;
