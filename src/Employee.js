import React from 'react';

class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mahesh", salary: 11.5
        };
    }
    payHike = () => {
        this.setState({ salary: this.state.salary + 10 });
    }
    myName = (evt) => {
        this.setState({ name: evt.target.value });

    }
    render() {
        return (
            <div>
                <p className="text-info" >Hi! My name is {this.state.name} and my salary is {this.state.salary}.</p>
                <button type="button" onClick={this.payHike}>Hike!</button>
                
                <form>
                    <p class="display-4">Please enter data here - </p>
                    <input type="text" onChange={this.myName}></input>
                </form>
            </div>
        )
    }
}


export default Employee;
