import React from 'react';

class Child extends React.Component {

    constructor() {
        super();
        this.state = {
            childData: "Data from child"
        }
    }
    onTrigger = (event) => {
        console.log("Child function");
        this.props.parentCallback(this.state.childData);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <p>Child Data</p>
                <form onSubmit={this.onTrigger}>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Child;
