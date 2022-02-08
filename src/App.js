import './App.css';
import React from 'react';

// components
import ContactUs from './components/Contact'
import Profile from './components/Profile';
import AboutUs from './components/About';

// micro-stylesheets
const styledText = {
  fontSize: "25px",
  textAlign: "center",
  margin: "40px",
  border: "1px solid green"
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ContactUs/>
      {/* passing styledText variable to Profile component (child) */}
      <Profile stylesheet={styledText}/>
      <AboutUs />
    </div>
  );
}

export default App;
