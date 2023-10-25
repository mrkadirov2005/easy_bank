import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NGD__banking from './components/NGD__banking';
import WHYEB from './components/WHYEB';
import L_articles from './components/L_articles';
import Footer from './components/footer';
function App() {
  return (
    <div className="App" style={{backgroundColor:'whitesmoke'}}>
     <Header/> 
     <NGD__banking/>
     <WHYEB/>
    <L_articles/>
    <Footer/>
    </div>
  );
}

export default App;
