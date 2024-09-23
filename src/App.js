import './App.css'
import { Contactform } from './components/contactForm/contactform.jsx';
import { ContactHeader } from './components/contactHeader/contact-Header';
import { Navigation } from './components/Navigation/navigation.jsx'

const App = () => {
  return (
    <div>
     <Navigation/>
     <main className='main_container'>
     <ContactHeader/>
     <Contactform/>
     </main>
    </div>
  )
}

export default App;
