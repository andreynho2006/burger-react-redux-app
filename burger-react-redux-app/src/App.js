import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28},
            { name: "Manu", age: 29},
            { name: "Simona", age: 30}
        ],
        otherState: "some other value",
        showPersons: false
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons : !doesShow
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Max", age: 28},
                { name: event.target.value, age: 29},
                { name: "Iasmina", age: 30}
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            fint: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React APp</h1>
                <p>This is really working</p>
                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Toogle Persons
                </button>
                { 
                this.state.showPersons ?
                <div>
                    <Person  
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} />
                    <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        changed={this.nameChangedHandler} >My hobbies: Racing
                    </Person>
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} />
                </div> : null
                }  
            </div>
        );
    }   
}

export default App;
