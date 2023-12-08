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
function App() {
  const [menu_clicked , SetMenuClicked] = useState(false);
  const [tabs_activity, setActivity] = useState({intro: true, qualifications: false, contact: false, services: false})

  const EQ_DESC = {
    0 : {temp: 1, section_name : 'Advanced Level Exam Qualifications', lm_line : 'Dharmaraja College, Kandy', l_subline : '@ Studied Advanced Level', link : { text : 'View Advanced Level Certificate' ,'href': "#"}, rmline : 'Faced the Advanced Level Examination on Physical Science Stream.', r_subline: "Therefore I studied combined mathematics, physics and chemisty.", r_val1 : {val: '2021', l1: 'EXAM' , l2: ' YEAR'}, r_val2 : {val: '1.6047', l1: 'Z' , l2: 'VALUE'}},
    1 : {temp: 1, section_name : 'Ordinary Level Exam Qualifications', lm_line : 'Sri Chandananda Buddhist College, Kandy', l_subline : '@ Studied Advanced Level', link : { text : 'View Ordinary Level Certificate' ,'href': "#"}, rmline : 'Faced the Advanced Level Examination on Physical Science Stream.', r_subline: "Therefore I studied combined mathematics, physics and chemisty.", r_val1 : {val: '2018', l1: 'EXAM' , l2: ' YEAR'}, r_val2 : {val: '9A', l1: '' , l2: 'GRADES'}},
    2 : {temp: 1, section_name : 'Advanced Level Exam Qualifications', lm_line : 'Dharmaraja College, Kandy', l_subline : '@ Studied Advanced Level', link : { text : 'View Advanced Level Certificate' ,'href': "#"}, r_subline: "Therefore I studied combined mathematics, physics and chemisty.", r_val1 : {val: '2021', l1: 'ACADEMIC' , l2: ' YEAR'}, r_val2 : {val: '4.0', l2: 'GPA'}}
  }
  
  const qualifications_ref = useRef(null);
  const intro_ref = useRef(null);
  // const intro_ref = useRef(null);
  const contact_ref = useRef(null);

  const qualifications_ref_visible = useIsInViewport(qualifications_ref);
  const contact_ref_visible = useIsInViewport(contact_ref);
  const intro_ref_visible = useIsInViewport(intro_ref);

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
        setActivity({intro: true, qualifications: false, contact: false, services: false})
      }
    
    else if(qualifications_ref_visible && !contact_ref_visible){
        setActivity({intro: false, qualifications: true, contact: false, services: false})
      }
    
    else if(qualifications_ref_visible && contact_ref_visible){
      setActivity({intro: false, qualifications: false, contact: true, services: false})
    }
  },[qualifications_ref_visible, contact_ref_visible, intro_ref_visible])

  return (
    <div className="App">
        <Sidebar menu_clicked = {menu_clicked} activity = {tabs_activity} references = {[intro_ref, qualifications_ref, contact_ref]}/>
        <Header set_menu_clicked = {SetMenuClicked} menu_clicked = {menu_clicked} activity = {tabs_activity} references = {[intro_ref, qualifications_ref, contact_ref]}/>
        <div className='body transition'>
          <div ref = {intro_ref} id = "#introduction">
          </div>
          <Intro />
          <div id = "#qualifications" ref={qualifications_ref}>
          <InfoSection code = "EQ" title = "Education Qualifications" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#32344'} cards_data={[{id: 0, title:'AL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa', type: 1}, {id: 1, title:'OL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }, {id: 2, title:'School', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }]} section_data={EducationQualifications}/>
          {/* <InfoSection code = "WD" title = "Web Development Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#323445'} cards_data={[{id: 0, title:'AL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa', type: 1}, {id: 1, title:'OL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }]}/>
          <InfoSection code = "DP" title = "Data Processing Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#323445'} cards_data={[{id: 0, title:'AL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa', type: 1}, {id: 1, title:'OL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }]}/>
          <InfoSection code = "WA" title = "Web Automation Skills" title_bg_color={'#232533'} tbg_color={'#232533'} bbg_color={'#323445'} cards_data={[{id: 0, title:'AL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa', type: 1}, {id: 1, title:'OL', icon:icon, active_icon:icon, description: 'dasdsadsadsadsa' }]}/> */}
          </div>
          <div id = "#contact" ref = {contact_ref}>
            <ContactForm bg_color = "#232533"/>
          </div>
          <Copyrights />  
        </div>    
    </div>
  );
}

export default App;
