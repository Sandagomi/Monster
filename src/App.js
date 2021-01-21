import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/search-box.component';
import './App.css'


const  App =()=> {

    const [monsters,setMonsters]= useState([])
    const [search,setSearch]= useState('')

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toString().toLowerCase()))

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>res.data).then(users=>setMonsters(users));
    });

  return (
    <div className="App">
        <SearchBox
            placeholder="search Monsters"
            handleChange={e=> setSearch(e.target.value)}
        />
        <CardList monster={filteredMonsters}/>
    </div>
  );
}

export default App;
