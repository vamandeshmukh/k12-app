import React from 'react';
import List from './List';

class Department extends React.Component {
    constructor() {
        super();
        this.state = {
            name: `Mahesh`, salary: 11.5
        };
    }
    render() {
        return (
            <div>
                <p className="display-4" >Department Component</p>
                <p>This is Department Component.</p>
                <p> </p>
                {/* <List /> */}
            </div>
        )
    }
}

export default Department;


// react-redux 

// store, action, reducer, subscribe, action reducer 

























