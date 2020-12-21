import './App.css';
import React from 'react';
import AboutCompany from './AboutCompany';

class About extends React.Component {

    constructor() {
        super();
        this.state = { id: 0, myName: '', salary: 10.0, phones: { home: 1010, office: 2020 } };
    }

    setMySalary = (abc) => {
        console.log("Slaary hiked.");
        this.setState({ salary: this.state.salary * 2 });
    }

    render() {
        return (
            <div className="App">
                <h1 className="display-4">this is About of class component</h1>
                <p className='k12'>this is my About of class component paragrph</p>
                < AboutCompany name="K12" city="Bengaluru"></AboutCompany>
                {/* <p> {this.state.salary} </p>
                <button type="button" onClick={this.setMySalary} >Click me</button>
                <form>
                    <p class="display-4">Please enter data here - </p>
                    <input type="text" onChange={this.myName}></input>
                </form> */}

            </div>
        )
    }
}
export default About;
