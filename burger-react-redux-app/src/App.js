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

    deletePesonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons})

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

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person  
                                click={() => this.deletePesonHandler(index)}
                                name={person.name} 
                                age={person.age} />
                        )       
                    })}
                </div> 
            )
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React APp</h1>
                <p>This is really working</p>
                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Toogle Persons
                </button>
                {persons}
            </div>
        );
    }   
}

export default App;
