import React from 'react';
import '../App.css';
class ReduxApp extends React.Component {
    onChangeHandler(evt) {
        console.log('ReduxApp started.');
        this.props.onChange(evt.target.value);
    }
    render() {
        return (
            <div className="App">
                <p>Enter data here - </p>
                <p className="App">
                    {this.props.data}
                    {' '}
                    <input onChange={this.onChangeHandler.bind(this)}>
                    </input>
                </p>
            </div>
        );
    }
}
export default ReduxApp;