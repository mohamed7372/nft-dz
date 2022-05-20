import './App.css';
import FloatingCircles from './components/FloatingCircles';

import HeaderSection from './components/HeaderSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <FloatingCircles />
      <HeaderSection title='editors pick for this week' txtPlus='See artwork' />
      <HeaderSection title='popular artist' txtPlus='view all' />
      <div className="plus-section">
        <h3>
          What are you waiting for ? <br />
          Explore now!
        </h3>
        <p>get started now</p>
        <img src={process.env.PUBLIC_URL + '/assets/lines.png'} /> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
