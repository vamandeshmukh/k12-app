
import React from 'react';
import Child from './Child';
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {parentData : "Data from Parent"}
    }

    static getDerivedStateFromProps(props, state) {
        console.log("done");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }
    handleCallback = (abc) => {
        console.log("handleCallback")
        this.setState({parentData : abc});
    }
    render() {
        return (
            <div>
                <p>Parent Data</p>
                
                <Child parentCallback= {this.handleCallback} />
                {this.state.parentData}
            </div>
        );
    }
}
export default Parent;