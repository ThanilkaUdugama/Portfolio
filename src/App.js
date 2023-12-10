import logo from './logo.svg';
import './App.css';
import InfoSection from './components/js/InfoSection.js';
import ContactForm from './components/js/ContactForm.js';
import Header from './components/js/Header.js';
import Intro from './components/js/Intro.js';
import Copyrights from './components/js/Copyrights.js';
import Sidebar from './components/js/Sidebar.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import icon from './images/test_icon.png'
import useIsInViewport from './functions/useIsInViewport.js';
import EducationQualifications from './data/EducationQualifications.js';
import EducationQualificationsCardData from './data/EducationQualificationsCardData.js';
import WebDevelopmentSkills from './data/WebDevelopmentSkillsData.js';
import WebDevelopmentSkillsCardData from './data/WebDevelopmentSkillsCard.js';
import DataProcessingSkillsCardData from './data/DataProcessingSkillsCardData.js';
import DataProcessingSkillsData from './data/DataProcessingSkillsData.js';
import WebAutomationSkillsData from './data/WebAutomationSkillsData.js';
import WebAutomationSkillsCardData from './data/WebAutomationCardData.js';
import Quote from './components/js/Quote.js';
import Quotes from './data/Quotes.js';
import SocialMedia from './components/js/SocialMedia.js';

function App() {
  const [menu_clicked , SetMenuClicked] = useState(false);
  const [tabs_activity, setActivity] = useState({intro: true, qualifications: false, skills: false, contact: false})


  const intro_ref = useRef(null);
  const qualifications_ref = useRef(null);
  const skills_ref = useRef(null);
  const contact_ref = useRef(null);

  const intro_ref_visible = useIsInViewport(intro_ref);
  const qualifications_ref_visible = useIsInViewport(qualifications_ref);
  const skills_ref_visible = useIsInViewport(skills_ref);
  const contact_ref_visible = useIsInViewport(contact_ref);

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

  useEffect(()=>{
    if((intro_ref_visible && qualifications_ref) || intro_ref_visible){
        setActivity({intro: true, qualifications: false, contact: false, skills: false})
      }
    
    else if(qualifications_ref_visible && !skills_ref_visible){
        setActivity({intro: false, qualifications: true, contact: false, skills: false})
      }
    
    else if(contact_ref_visible && skills_ref_visible && qualifications_ref_visible){
        setActivity({intro: false, qualifications: false, contact: true, skills: false})
      }
    
    else if ((skills_ref_visible && qualifications_ref_visible)){
      setActivity({intro: false, qualifications: false, contact: false, skills: true})
    }
    
    
  },[qualifications_ref_visible, contact_ref_visible, intro_ref_visible, skills_ref_visible])
  
  return (
    <div className="App">
        <Sidebar menu_func = {SetMenuClicked} menu_clicked = {menu_clicked} activity = {tabs_activity} references = {[intro_ref, qualifications_ref, skills_ref, contact_ref]}/>
        <Header set_menu_clicked = {SetMenuClicked} menu_clicked = {menu_clicked} activity = {tabs_activity} references = {[intro_ref, qualifications_ref, skills_ref, contact_ref]}/>
        <div className='body transition'>
          <div ref = {intro_ref} id = "#introduction">
          </div>
          <Intro />
          <div id = "#qualifications" ref={qualifications_ref}>
          <InfoSection code = "EQ" title = "Education Qualifications" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={EducationQualificationsCardData} section_data={EducationQualifications}/>
          <Quote quotes = {Quotes[0]['quotes']} images = {Quotes[0]['images']} />
          <div ref = {skills_ref}>
          <InfoSection code = "EQ" title = "Web Development Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={WebDevelopmentSkillsCardData} section_data={WebDevelopmentSkills}/>
          <Quote quotes = {Quotes[1]['quotes']} images = {Quotes[1]['images']} />
          <InfoSection code = "EQ" title = "Data Processing Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={DataProcessingSkillsCardData} section_data={DataProcessingSkillsData}/>
          <Quote quotes = {Quotes[2]['quotes']} images = {Quotes[2]['images']} />
          <InfoSection code = "EQ" title = "Web Automation Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={WebAutomationSkillsCardData} section_data={WebAutomationSkillsData}/>
          <Quote quotes = {Quotes[3]['quotes']} images = {Quotes[3]['images']} />
          </div>
          {/* <InfoSection code = "WD" title = "Web Development Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#323445'} cards_data={[{id: 0, title:'AL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa', type: 1}, {id: 1, title:'OL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }]}/>
          <InfoSection code = "DP" title = "Data Processing Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#323445'} cards_data={[{id: 0, title:'AL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa', type: 1}, {id: 1, title:'OL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }]}/>
          <InfoSection code = "WA" title = "Web Automation Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#323445'} cards_data={[{id: 0, title:'AL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa', type: 1}, {id: 1, title:'OL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }]}/> */}
          </div>
          <div id = "#contact" ref = {contact_ref}>
            <ContactForm bg_color = "#232533"/>
            <SocialMedia />
          </div>
          <Copyrights />  
        </div>    
    </div>
  );
}

export default App;
