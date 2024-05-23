
import './App.css';
import Center from './center';
import CursorFollower from './cursor';
import Navbar from './Navbar';
import Expertise from './expertise';
import Work from './work';

function App() {
  
  return (
    <div className="App">
      
      <Navbar />
      <CursorFollower />
      <Center />
      <Expertise />
      <Work />


    </div>
  );
}

export default App;
