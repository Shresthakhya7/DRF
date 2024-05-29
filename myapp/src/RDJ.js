import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function RDJ(){
    const[messages, setMessages]=useState({message1:'',message2:''});

    useEffect(()=>{
    axios.get('http://localhost:8000/api/rdj')
    .then(response=>{
        setMessages({
            message1:response.data.message1,
            message2:response.data.message2
        });
    })
    .catch(error=>{
        console.log(error);
    });
},[]);
return(
    <div className='hello'>
        <h1>Hello World</h1>
        <p>{messages.message1}</p>
        <p>{messages.message2}</p>
    </div>
);
}

export default RDJ;