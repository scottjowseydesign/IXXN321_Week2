import React from 'react';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import logo from './logo.svg';
import data from './data/employee.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Then you'll have this shown on the page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className = 'Contact-Box'>
          {data.Employees.map(i => <ContactCard profileIMG={i.profileIMG} firstName={i.firstName} lastName={i.lastName} 
          jobTitle={i.jobTitle} emailAddress={i.emailAddress} phoneNumber={i.phoneNumber}/>)}
        </div>
      </header>
    </div>
  );
}

export default App;
