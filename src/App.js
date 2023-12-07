import logo from './logo.svg';
import './App.css';
import InfoSection from './components/js/InfoSection.js';
import ContactForm from './components/js/ContactForm.js';
import Header from './components/js/Header.js';
import Intro from './components/js/Intro.js';
import Copyrights from './components/js/Copyrights.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Intro />
        <InfoSection title = "Education Qualification" />
        <InfoSection title = "Web Development Qualifications" />
        <InfoSection title = "Web Automation Qualifications" />
        <InfoSection title = "Web Automation Qualifications" />
        <InfoSection title = "Data Processing Qualifications" />
        <ContactForm />
        <Copyrights />      

    </div>
  );
}

export default App;
