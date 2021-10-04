import './App.css';
import styled from 'styled-components';
import {useRef} from 'react';

const Button=styled.button`
  margin:5px;
  font-size:20px;
  color:black;
  background-color:grey;
  border: 1px solid black;
  border-radius:5px;
`;

const FixedButton=styled(Button)`
  font-weight:bold;
  font-family:cursive;
  background-color:palegreen;
`;

const CustomButton=styled(Button)`
  color:${(props)=>props.color};
  background-color:${(props)=>props.background||"gold"};
`;

const Container=styled.div`
  text-align:center;
`;

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value='';
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>initialize</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Container>
        <div><Button>Styled-Button</Button> </div>
        <div><FixedButton>Fixed-Button</FixedButton></div>
        <div><CustomButton color='seashell' background='salmon'>Custom-Button1</CustomButton></div>
        <div><CustomButton color='seashell'>Custom-Button2</CustomButton></div>
      </Container>
      <TextInputWithFocusButton></TextInputWithFocusButton>
    </div>
  );
}

export default App;
