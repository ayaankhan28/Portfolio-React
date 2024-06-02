
import './App.css';
import Center from './center';
import CursorFollower from './cursor';
import Navbar from './Navbar';
import Expertise from './expertise';
import Work from './work';
import Profession from './pro';
import Last from './last';


const items = [
  {
    title: 'Section 1',
    content: 'Content for Section 1'
  },
  {
    title: 'Section 2',
    content: 'Content for Section 2'
  },
  {
    title: 'Section 3',
    content: 'Content for Section 3'
  }
];
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
