import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

/** creating react components */
/** Functional Component */


/** react component  */
const Header =() =>{
  return ( <header>
  <div className='header-wrapper'>
  <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Prince Hope</p>
    <small>Oct 3, 2020</small>
  </div>
</header>)
}

const UserCard = () =>{
  return (
    <div className='userCard'>
    <img src='{./img}' alt='profile img'/>
    <h2>Prince Hope</h2>
    </div>
  )
}

const TechList = () =>{
    const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

const App = () =>{
  return (
    <div className='app'>
      {<Header/>}
      {<userCard/>}
    </div>
  )
}
const rootElement = document.getElementById('root')

ReactDOM.render(<App/>, rootElement)




