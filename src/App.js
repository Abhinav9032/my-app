import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class Aggregrate extends Component {
    render(){       
        return(  
            
        <h1>Developed and maintained by Abhinav Mishra</h1>
        
        );       
    } 
}

class App extends Component {  
render() {
//let name='Abhinav' 
//let MyHeader ={color:'red', 'font-size':'50px'}
var title='Advanced Playlist'
return (
    <div className="App">
    
        <div className="TitleBox">
            <h1>{title}</h1>
        </div>
    
    <Aggregrate/>
    
</div>
);
}
}

export default App;
