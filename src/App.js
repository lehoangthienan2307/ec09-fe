import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/Header';
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import { AccountProvider } from './State'


function App() {
  return (
  <AccountProvider>
    <Router>
    <div className="App">
      <Header/>
      <Body />
      <Footer/>
    </div>
    </Router>


  </AccountProvider>
    


  );
}

export default App;
