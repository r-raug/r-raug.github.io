
import styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero'
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />


   </div>;
  
}

export default App
