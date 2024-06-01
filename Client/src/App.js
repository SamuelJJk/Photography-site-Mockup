import './App.css';
import {Route,Routes} from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Portfilio from './Pages/Portfilio'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/Portfilio' element={<Portfilio />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contacts />}/>
      </Routes>
      
    </div>
  );
}

export default App;
