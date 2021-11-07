import './App.css';
import Component from "./Component/Component"
import { TextHidden } from './TextHidden';
import Container from "./Slider/Container"
import { SquareContainer } from './SquareContainer';
import {InputContainer} from "./InputText"
function App() {
  return (
    <div className="App">
      {/* <Component/> */}
      {/* <TextHidden/> */}
      {/* <Container/> */}
      <SquareContainer/>
      <InputContainer/>
    </div>
  );
}

export default App;
