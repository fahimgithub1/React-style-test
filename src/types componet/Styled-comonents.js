
import '../styles_files/normal.css';
// import './App.css';
import { useState } from 'react';
import DIV from '../styles_files/DIVcompnent';
// import styled from 'styled-components';

// const DIV = styled.div`
//   color :red;
//   background-color: white;
// `;

function Styledcomonents() {
  const [inputValu, setInputValu] = useState('');
  const [valid, setValid] = useState(true);

  const inputChanger = event =>{
    setInputValu(event.terget.value);
    console.log(event.terget.value);
  };

  const submitHandel = () =>{
    if(inputValu.trim().length === 0){
      setValid(false);
      return;
    }
  }

  return (
    <div className="App">
      <div className="box-1">
        <label className='label'>Input data</label>
        <input type="text" 
               className={`input ${!valid? 'inValid':''}`}
               onChange={inputChanger}
        />
        <br/>
        <button onClick={submitHandel}>Set Values</button>
      </div>

      <DIV className="box-2">
        <p>Frist inputed data</p>
      </DIV>
      <DIV className="box-2">
        <p>Frist inputed data</p>
      </DIV>
    </div>
  );
}

export default Styledcomonents;
