import '../styles_files/normal.css';
// import './App.css';
import { useState } from 'react';

function DaynamicInline() {
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

      <div className="box-2">
        <p>Frist inputed data</p>
      </div>
      <div className="box-2">
        <p>Frist inputed data</p>
      </div>
    </div>
  );
}

export default DaynamicInline;
