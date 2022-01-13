import React,{useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {AddTransaction} =useContext(GlobalContext);
    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        AddTransaction(newTransaction);
        setText('');
        setAmount(0);
    }
  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={onSubmit}>Add transaction</button>
      </form>
    </React.Fragment>
  );
};

export default AddTransaction;
