import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardList} from './components/card-list/card-list.component'


const  App =()=> {

    const [monsters,setMonsters]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>res.data).then(users=>setMonsters(users));
    });


  return (
    <div className="App">
        <CardList monster={monsters}/>
    </div>
  );
}

export default App;
