import './App.css';
import React from 'react';
import AboutChild from './AboutChild';

// Parent component 
// class About extends React.Component {

//     constructor() {
//         super();
//         this.state = { id: 0, myName: '', salary: 10.0, phones: { home: 1010, office: 2020 } };
//     }

//     setMySalary = () => {
//         this.setState({ salary: this.state.salary * 2 });
//     }

//     setChildData =(abc) => {
//         this.setState({salary : abc});

//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1 className="display-4">this is About of class component</h1>
//                 <p className='k12'>this is my About of class component paragrph</p>
//                 < AboutChild name="K12" city="Bengaluru" abc={this.setChildData} />
//                 <p> {this.state.salary} </p>
//                 <button type="button" onClick={this.setMySalary} >Click me</button>
//             </div>
//         )
//     }
// }

let name = '';

const setName = (abc) => {
    name = abc;
}
const About = () => {

    return (
        <div>
            <p>AboutParent</p>
            <p>{name}</p>
      <AboutChild fun={ () => setName(null)} name={name} />
        </div>
    );
  };

export default About;

// const App = () => {
//     const [user, setUser] = useState(null);
  
//     return user ? (
//       <AuthWebsite logout={() => setUser(null)} user={user} />
//     ) : (
//       <NoAuthWebsite login={username => setUser(username)} />
//     );
//   };



