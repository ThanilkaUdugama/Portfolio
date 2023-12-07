import logo from './logo.svg';
import './App.css';
import InfoSection from './components/js/InfoSection.js';
import ContactForm from './components/js/ContactForm.js';
import Header from './components/js/Header.js';
import Intro from './components/js/Intro.js';
import Copyrights from './components/js/Copyrights.js';
import Sidebar from './components/js/Sidebar.js';
import { useEffect, useState } from 'react';

function App() {
  const [menu_clicked , SetMenuClicked] = useState(false);

  useEffect(()=>{
    const menu_button = document.querySelector('.menu-button');
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('.body');
    if(menu_button){
      if(menu_clicked){
        menu_button.classList.add('menu-button-clicked');
        sidebar.classList.remove('sidebar-closed');
        body.classList.add('blur');
      }
      else {
        menu_button.classList.remove('menu-button-clicked');
        sidebar.classList.add('sidebar-closed');
        body.classList.remove('blur');

      };
    }
  }, [menu_clicked])

  return (
    <div className="App">
        <Sidebar menu_clicked = {menu_clicked}/>
        <Header set_menu_clicked = {SetMenuClicked} menu_clicked = {menu_clicked}/>
        <div className='body'>
          <Intro />
          <InfoSection title = "Education Qualification" />
          <InfoSection title = "Web Development Qualifications" />
          <InfoSection title = "Web Automation Qualifications" />
          <InfoSection title = "Web Automation Qualifications" />
          <InfoSection title = "Data Processing Qualifications" />
          <ContactForm />
          <Copyrights />  
        </div>    
    </div>
  );
}

export default App;
