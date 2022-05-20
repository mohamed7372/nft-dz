import './App.css';
import FloatingCircles from './components/FloatingCircles';

import HeaderSection from './components/HeaderSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <FloatingCircles /> */}
      <HeaderSection title='editors pick for this week' txtPlus='See artwork'/>
      <Footer/>
    </div>
  );
}

export default App;
