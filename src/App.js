
import './App.css';
import Center from './center';
import CursorFollower from './cursor';
import Navbar from './Navbar';
import Expertise from './expertise';
import Work from './work';
import Profession from './pro';
import Last from './last';


function App() {
  
  return (
    <div className="App">
      
      <Navbar />
      <CursorFollower />
      <Center />
      <Expertise />
      <Work />
      <Profession />
      <Last />


    </div>
  );
}

export default App;
