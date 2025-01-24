/*import React from 'react'

const Header = () => {
  return (
    <div> 
        <h1> 
            Welcome to react class
        </h1>
      
    </div>
  )
}

export default Header */
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>MySite   </h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#services" style={styles.link}>Services</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'fff',
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'fff',
    textDecoration: 'none',
  },
};

export default Header;
