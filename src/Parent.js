import React from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentData: "Data from Parent"
        }
    }

    handleCallback = (childData) => {
        console.log("parent function");
        this.setState({ parentData: childData })
    }

    render() {
        const { parentData } = this.state;
        return (
            <div>
                <p>Parent data</p>
                <Child parentCallback={this.handleCallback} />
                {parentData}
            </div>
        )
    }
}

export default Parent;