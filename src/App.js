
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
   <>
   <Navbar/>
    <div className="container mb-3">
   <Textform heading="Enter the text to convert"/>
   </div>
   </>
  );
}

export default App;
