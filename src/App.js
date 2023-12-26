import logo from './logo.svg';
import './App.css';
//import InfoSection from './components/js/InfoSection.js';
import ContactForm from './components/js/ContactForm.js';
import Header from './components/js/Header.js';
//import Intro from './components/js/Intro.js';
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
import Test from './components/js/Test.js';
import FullQuote from './components/js/FullQuote.js';
import { lazy } from 'react';

const InfoSection = lazy(() => import('./components/js/InfoSection.js'));
const Intro = lazy(() => import('./components/js/Intro.js'));

function App() {
  const [menu_clicked , SetMenuClicked] = useState(false);
  const [tabs_activity, setActivity] = useState({intro: true, qualifications: false, skills: false, contact: false})
  const [triggers, setTriggers] = useState(false);

  const intro_ref = useRef(null);
  const qualifications_ref = useRef(null);
  const skills_ref = useRef(null);
  const contact_ref = useRef(null);
  const education_qualification_ref = useRef(null);
  const web_development_ref = useRef(null);
  const data_processing_ref = useRef(null);
  const web_automation_ref = useRef(null);

 
  


  const intro_ref_visible = useIsInViewport(intro_ref);
  const qualifications_ref_visible = useIsInViewport(qualifications_ref);
  const skills_ref_visible = useIsInViewport(skills_ref);
  const contact_ref_visible = useIsInViewport(contact_ref);
  const education_qualification_ref_visible = useIsInViewport(education_qualification_ref);
  const web_development_ref_visible = useIsInViewport(web_development_ref);
  const data_processing_ref_visible = useIsInViewport(data_processing_ref);
  const web_automation_ref_visible = useIsInViewport(web_automation_ref);


  useEffect(()=>{
      if(intro_ref_visible){
        setTriggers('INTRO')
      }
      if(education_qualification_ref_visible){
        setTriggers('EQ');
      }
      if(web_development_ref_visible){
        setTriggers('WD');
      }
      if(data_processing_ref_visible){
        setTriggers('DP');
      }
      if(web_automation_ref_visible){
        setTriggers('WA');
      }
      if(contact_ref_visible){
        setTriggers('CT');
      }
  
  }, [intro_ref_visible ,education_qualification_ref_visible, web_development_ref_visible, data_processing_ref_visible, web_automation_ref_visible, contact_ref_visible, intro_ref_visible])


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
          <div ref = {intro_ref} id = "introduction">
          </div>
          
          <Intro code = "ED" triggers = {triggers}/>
          
          <div id = "qualifications" ref={qualifications_ref}>
            <div ref={education_qualification_ref}>
            <InfoSection code = "ED" title = "Education Qualifications" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={EducationQualificationsCardData} section_data={EducationQualifications} active={'EQ' == triggers}/>
          </div>

          <Quote quotes = {Quotes[0]['quotes']} images = {Quotes[0]['images']} authors={Quotes[0]['authors']} />
          
          <div ref = {skills_ref}>
          <div ref={web_development_ref} >
          <InfoSection code = "WD" title = "Web Development Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={WebDevelopmentSkillsCardData} section_data={WebDevelopmentSkills} active={'WD' == triggers}/>
          </div>
          
          <FullQuote quotes = {Quotes[1]['quotes']} images = {Quotes[1]['images']} authors={Quotes[1]['authors']}/>
          
          <div ref={data_processing_ref} >
          <InfoSection code = "DP" title = "Data Processing Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={DataProcessingSkillsCardData} section_data={DataProcessingSkillsData} active={'DP' == triggers} ref={data_processing_ref}/>
          </div>
          
          <Quote quotes = {Quotes[2]['quotes']} images = {Quotes[2]['images']} authors={Quotes[2]['authors']} />
          
          <div ref={web_automation_ref} >
          <InfoSection code = "WA" title = "Web Automation Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={WebAutomationSkillsCardData} section_data={WebAutomationSkillsData} active={'WA' == triggers}/>
          </div>
          
          <FullQuote quotes = {Quotes[3]['quotes']} images = {Quotes[3]['images']} authors={Quotes[3]['authors']} />
          
          </div>
          </div>
          <div id = "contact" ref = {contact_ref}>
            <ContactForm bg_color = "#232533" active = {triggers == 'CT'}/>
            <SocialMedia />
          </div>
          <Copyrights />  
        </div>    
    </div>
  );
}

export default App;