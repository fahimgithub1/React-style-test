// import './styles_files/normal.css';
// import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const Box1 = styled.div`
    width: 30%;
    margin: auto;
    padding: 15px 30px;
    border-radius: 8px;
    text-align: left;
    margin-bottom: 2.5rem;
    box-shadow: 0 0 10px rgb(73, 65, 65);


  & .label{
    font-size: 28px;
    font-weight: bold;
  }

  & input{   
    width: 90%;
    height: 23px;
    margin-top: .7rem;
    margin-bottom: .9rem;
  }

  & button{
    font-size: 20px;
    /* font-weight: bold; */
    background-color: rgb(217, 51, 51);
    padding: 12px 24px;
    border: 0px;
    border-radius: 5px;
    color: white;
    margin-bottom: 1.2rem;
  }

  &.inValid input{
    background-color: rgb(207, 30, 30);
  }
  
  @media (max-width: 768px){
    width: 70%;

    & button{
      width: 100%;
    }

    & input{   
      width: 98%;
    }
  }
`;

const Box2 = styled.div`
    width: 33%;
    margin: auto;
    margin-top: 1rem;
    padding: .2px 30px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: rgb(5, 133, 122);
    box-shadow: 0 0 10px rgb(82, 72, 72);

`;


function StyledComponentsynamicPropspp() {
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
      <Box1 className={!valid && 'inValid'}>  {/*  className={!valid ? 'inValid':''} */}
        <label className='label'>Input data</label>
        <input type="text" onChange={inputChanger}/>
        <br/>
        <button onClick={submitHandel}>Set Values</button>
      </Box1>

      <Box2>
        <p>Frist inputed data</p>
      </Box2>

      <Box2>
        <p>Frist inputed data</p>
      </Box2>
    </div>
  );
}

export default StyledComponentsynamicPropspp;
// Styled_Components_&_Dynamic_Props