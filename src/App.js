import './App.css';
import React, { useState } from "react";


function App() {
  // Making state of our Application

  const [ weight, setWeight ] = useState('');
  const [ height, setHeight ] = useState('');
  const [ bmi, setBmi ] = useState('');
  const [ message, setMessage ] = useState('');



  // Logic
  let calBmi = (e)=>
  {

    // Preventing  Submitting to the server
    e.preventDefault();

    if(weight===0 || height===0)
    {
      alert("Please Enter a valid weight and height");
    }

    else{
      let bmi = (weight/(height*height))
      setBmi(bmi.toFixed(1))



      if(bmi<19){
        setMessage('You are Underweight')
      }

      else if(bmi>=19 && bmi<=25){
        setMessage('You are Healthy')
      }

      else if(bmi>=25 && bmi<=32){
        setMessage('You are Overweight')
      }

      else{
        setMessage('You are Obese')
      }

    }
  }


  //  Reload

  let reload = () => {
    window.location.reload()
  }


  return (
    <div className="App">

      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (Kg)</label>
            <input type='text' placeholder='Enter Your Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (m)</label>
            <input type='text' placeholder='Enter Your Height' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outside' type='submit' onClick={reload}>Reload</button>
          </div>

          <div>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>

    </div>
  );
}

export default App;
