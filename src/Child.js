import React from 'react';
class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            childData: "Data from Child"
        }
    }
    onTrigger = (childData) => {
        console.log("onTrigger")
        this.props.parentCallback(this.state.childData);
        childData.preventDefault();
    }
    render() {
        return (
            <div>
                <p>Child Data</p>
                <form onSubmit={this.onTrigger}>
                    <input type="submit" value="Submit"></input>

                </form>
            </div>
        );
    }
}
export default Child;