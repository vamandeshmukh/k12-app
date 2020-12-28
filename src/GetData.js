
import React from 'react';
import axios from 'axios';

class GetData extends React.Component {
    constructor() {
        super();
        this.state = { posts: [], title: '', post: '', hello: '' }
    }
    componentDidMount() {
        console.log("componentDidMount");
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            });

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                const post = response.data;
                this.setState({ post });
            });

        axios.get('http://localhost:3333')
            .then(response => {
                const hello = response.data;
                this.setState({ hello });
            }).catch((error) => {
                console.log(error);
                this.setState({ error });
            });

    }
    handleChange = (evt) => {
        this.setState({ title: evt.target.value });
    }
    handleSubmit = () => {
        // const title = { title: this.state.title };
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then(res => { console.log(res.data) });
    }

    render() {
        return (
            <div >
                <p>Post requests</p>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Enter
                        <input type="text" name="title" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Click</button>
                    </form>
                </div>
                <p>Local data </p>
                <p> {this.state.hello} </p>
                <p>Single data </p>
                <p className="display-4"> {this.state.post.title} </p>
                <p className="text-info"> {this.state.post.id} </p>
                <p className="text-info"> {this.state.post.body} </p>
                <p>All the data</p>
                <ul> {this.state.posts.map(p => <div key={p.id}><li>{p.id}</li> <li>{p.title}</li> <li>{p.body}</li></div>)} </ul>
            </div>
        );
    }
}

export default GetData;









