import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Team from './components/Teams/Team';
// import ArmyData from './components/ArmyData/ArmyData';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Team></Team>
      {/* <ArmyData></ArmyData> */}
    </div>
  );
}

export default App;
