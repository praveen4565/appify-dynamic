import './App.css';
import CreateAccount from './mocks/createAccount';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import SubmitButton from './components/SubmitButton';
function App() {
  const [createAccState, setCreateAccountState] = useState({});
 /* useEffect(()=>{
     let currState ={};
     CreateAccount.form.fields.filter((item,i)=>{
      currState[item.label]="";
     });
     setCreateAccountState(currState);
  },[]);*/
  const handleChange = (event) => {
    setCreateAccountState((prev)=>({ ...prev, [event.target.name]: event.target.value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("newAccount", JSON.stringify(createAccState));
  }
  return (
    <div className="App">
      <h1>
        {CreateAccount.title}
      </h1>
      <form onSubmit={handleSubmit}>
        {
          CreateAccount.form.fields.map((obj) => {
           return (<Form key={obj.id} {...obj} handleChange={handleChange} ></Form>)
          })

        }
        <SubmitButton></SubmitButton>
      </form>
    </div>
  );
}

export default App;
