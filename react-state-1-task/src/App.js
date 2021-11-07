import './App.css';
import Component from "./Component/Component"
import { TextHidden } from './TextHidden';
import Container from "./Slider/Container"
import { SquareContainer } from './SquareContainer';
import {InputContainer} from "./InputText"
import {WindowContainer} from "./Window/"
import { DropContainer } from './Dropdown';
function App() {
  return (
    <div className="App">
      {/* <Component/> */}
      {/* <TextHidden/> */}
      {/* <Container/> */}
      <SquareContainer/>
      <InputContainer/>
      <WindowContainer/>
      <DropContainer btnName="Fruit list"/>
    </div>
  );
}

export default App;
