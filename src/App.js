import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor="#fff";
let defaulTextStyle = {
    color:defaultTextColor
};

class Aggregrate extends Component {
    render(){           
        return(  
            <div style={{...defaulTextStyle,width:'40%',display:'inline-block'}}>
                <h2 style={{display:'inline-block'}}>Number Text</h2>
            </div>
        );       
    } 
}

class Filter extends Component {
    render(){
        return(
            <div style={{...defaulTextStyle}}>
                <img/>
                <input type="search"/>  &nbsp;Filter
            </div>        
        );       
    }    
}


class PlayList extends Component{
    render(){
        return(
            <div style={{...defaulTextStyle,width:"25%",display:'inline-block'}}>
                <img/>
                <h3>Play List</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
            </div>     
        );    
    }
}
class App extends Component {  
render() {
        var title='Advanced Playlist'
        return (
            <div className="App">

                <div className="TitleBox">
                    <h1>{title}</h1>
                </div>

            <Aggregrate/>
            <Aggregrate/>
            <Filter/>
            <PlayList/>
            <PlayList/>
            <PlayList/>
            <PlayList/>

        </div>
);
}
}

export default App;
