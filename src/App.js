import logo from './logo.svg';
import './App.css';
import Propdef from './components/Propsdef'
import RefInput from './components/RefInput'
import RefClass from './components/RefClass'
import First from './components/First';
import Second from './components/Second';
function App() {
  const callBack = (f) =>{
    console.log("print values",f)
  }
  return (
    <div className="App">
     <h1>Hello React</h1>
     {/* <Propdef name ={"Hello Props Here I AM"} />
     <RefInput ref_value = {"Name"} callBack = {callBack}/>
     <RefClass ref_class = {"Ref class component"} /> */}
     <First/>
     <Second/>
    </div>
  );
}

export default App;
